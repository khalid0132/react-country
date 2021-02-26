import React from 'react';
import './Country.css';

const Country = (props) => {
    console.log(props)
    const {name, capital, flag, alpha3Code, population} = props.country;
   const handleAddCountry = props.handleAddCountry;
    return (
        <div className = "country-display">
                    <div className ="countryStyle">
            <img style={{width: '100px'}} src={props.country.flag} alt=""/>
            <h3>Name: {name}</h3>
            <h4>Capital: {props.country.capital}</h4>
            <p>Population: {props.country.population}</p>
            <p>Country Code: {alpha3Code}</p>
            <button onClick= {()=>handleAddCountry(props.country)}>Add Country</button>
        </div>
        </div>
    );
};

export default Country;