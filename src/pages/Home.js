import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import AutoCompleteText from '../components/AutoCompleteText';
import './Home.css';
import brands from '../data/brands';

function Home() {

    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [miles, setMiles] = useState('');

    return (
      <div className="Home">
      <Link to={`/results/aston/martin/2021/10`}>
        Test
      </Link>
      <div className="Home-Component">
        <AutoCompleteText className="AutoCompleteText" items={brands}/>
        <AutoCompleteText className="AutoCompleteText" items={brands}/>
        <AutoCompleteText className="AutoCompleteText" items={brands}/>
      </div>
      </div>
    );
}

export default Home;