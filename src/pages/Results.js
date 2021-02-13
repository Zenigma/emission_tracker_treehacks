import React, { useState, useEffect } from 'react';

function Results({ match }) {
    useEffect(() => {
        calculateValue();
    }, []);

    // const [item, setItem] = useState({});

    const calculateValue = async () => {
        // Find the car and model in the "database" 
        // and multiply by the appropriate value
    };
    return (
      <div>
        <h1>{match.params.brand}</h1>
        <h1>{match.params.model}</h1>
        <h1>{match.params.year}</h1>
        <h1>{match.params.miles}</h1>
      </div>
    );
}

export default Results;