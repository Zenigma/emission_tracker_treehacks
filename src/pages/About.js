import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import AutoCompleteText from '../components/AutoCompleteText';
import './Home.css';
import carData from '../data/carData';
import Nav from '../components/Nav';

function About() {

    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [miles, setMiles] = useState('0');
    const [models, setModels] = useState([]);
    const [years, setYears] = useState([]);

    // Get unique make names
    const makeSet = new Set();

    // Add makes
    for (const year in carData){
      for (const car in carData[year]){
        makeSet.add(carData[year][car]['Represented Test Veh Make']);
      }
    }
    const makes = Array.from(makeSet);

    const setMake = (make) => {
      const newModels = new Set();
      setBrand(make);
      for (const year in carData){
        for (const car in carData[year]){
          if (carData[year][car]['Represented Test Veh Make'] === make){
            newModels.add(carData[year][car]['Represented Test Veh Model'])
          }
        }
      }
      setModels(Array.from(newModels));
    }

    // Years
    const setCarYears = (newYear) => {
      const newYears = new Set();
      setYear(newYear);
      for (const year in carData){
        for (const car in carData[year]){
          if (carData[year][car]['Represented Test Veh Make'] === brand){
            if (carData[year][car]['Represented Test Veh Model'] === model){
              newYears.add(carData[year][car]['Model Year']);
            }
          }
        }
      }
      setYears(Array.from(newYears));
    }

    return (
      <div className="Home">
      <Nav/>
      <h1>Emissions Calculator</h1>
      <div className="Home-Component">
        <AutoCompleteText className="AutoCompleteText" changeText={setMake} items={makes} hint="Car Make"/>
        <AutoCompleteText className="AutoCompleteText" changeText={setModel} items={models} hint="Car Model"/>
        <AutoCompleteText className="AutoCompleteText" changeText={setCarYears} items={years} hint="Car Year (2010-2021)"/>
        <AutoCompleteText className="AutoCompleteText" changeText={setMiles} items={[]} hint="Daily Commute (miles)"/>
        <div className="CalculateButtonContainer">
          <Link to={`/results/${brand}/${model}/${year}/${miles}`} className="CalculateButtonText">
            <button type="button" className="btn btn-primary CalculateButton">Calculate!</button>
          </Link>
        </div>
      </div>
      </div>
    );
}

export default About;