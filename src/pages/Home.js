import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import AutoCompleteText from '../components/AutoCompleteText';
import './Home.css';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import carData from '../data/carData';



const BootstrapButton = withStyles({
  root: {
    width: '100%',
    textDecoration: 'none',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#149414',
    borderColor: '#149414',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#07bc0d',
      borderColor: '#07bc0d',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#149414',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

function Home() {

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
      <h1>Emissions Calculator</h1>
      <div className="Home-Component">
        <AutoCompleteText className="AutoCompleteText" changeText={setMake} items={makes} hint="Car Make"/>
        <AutoCompleteText className="AutoCompleteText" changeText={setModel} items={models} hint="Car Model"/>
        <AutoCompleteText className="AutoCompleteText" changeText={setCarYears} items={years} hint="Car Year (2010-2021)"/>
        <AutoCompleteText className="AutoCompleteText" changeText={setMiles} items={[]} hint="Daily Commute (miles)"/>
        <div className="CalculateButtonContainer">
          <Link to={`/results/${brand}/${model}/${year}/${miles}`} className="CalculateButtonText">
            <BootstrapButton variant="contained" color="primary" disableRipple>
              Calculate!
            </BootstrapButton>
          </Link>
        </div>
      </div>
      </div>
    );
}

export default Home;