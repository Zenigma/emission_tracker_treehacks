import React, { useState }from 'react';
import './AutoCompleteText.css';

function AutoCompleteText(props) {

    const [suggestions, setSuggestions] = useState([]);
    const [text, setText] = useState('');

    const onTextChanged = (e) => {
        const { items } = props;
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0){
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = items.sort().filter(v => regex.test(v));
        }
        setSuggestions(suggestions);
        setText(value);
    }

    const suggestionSelected  = (value) => {
        setText(value);
        setSuggestions([]);
    };

    const renderSuggestions = () => {
        if (suggestions.length === 0){
            return null;
        }
        return (
            <ul>
              {suggestions.map((item) => (
                  <li onClick={ () => suggestionSelected(item) } 
                  key={item}>{item}</li>
                ))}
            </ul>
        )
    };

    return (
      <div className="AutoCompleteText">
          <input value={text} onChange={onTextChanged} type="text"/>
          {renderSuggestions()}
      </div>
    );
}

export default AutoCompleteText;