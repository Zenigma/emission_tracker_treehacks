import React from 'react';
import carData from '../data/carData';

function Results({ match }) {
  const carYear = carData[match.params.year];
  let emissions = '-1';
  for (const car in carYear){
    if (carYear[car]['Represented Test Veh Make'].toLowerCase() === match.params.brand.toLowerCase()){
      if (carYear[car]['Represented Test Veh Model'].toLowerCase() === match.params.model.toLowerCase()){
        emissions = '0';
        if (carYear[car]['CO2 (g/mi)']){
          emissions = carYear[car]['CO2 (g/mi)'];
        }
        break;
      }
    }
  }
  let emissionsKG = 0;
  let emissionsPounds = 0;
  let emissionsTrees = 0;

  if (emissions === '-1'){
    emissions = 'Not found';
  }
  else {
    emissionsKG = ((parseInt(emissions) * parseFloat(match.params.miles)) / 1000).toFixed(2);
    emissionsPounds = (emissionsKG / 2.20462);
    emissionsTrees = emissionsPounds / 0.132;
    emissionsPounds = emissionsPounds.toFixed(2);
    emissionsTrees = Math.ceil(emissionsTrees);
  }

  return (
    <div>
      <h1>{match.params.brand}</h1>
      <h1>{match.params.model}</h1>
      <h1>{match.params.year}</h1>
      <h1>{match.params.miles}</h1>
      {
        (emissions === '-1') ? <h1>Not Found</h1> : 
        <div>
          <h1>{`${emissionsKG} kilograms of CO2`}</h1>
          <h1>{`Or, ${emissionsPounds} pounds of CO2`}</h1>
          <h1>{`You need about ${emissionsTrees} trees to offset your vehicle!`}</h1>
        </div>
      }
    </div>
  );
}

export default Results;