import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country'
import Count from './components/Count/Count'



function App() {
  
  const [countries, setCountries] = useState([]);
  const [count, setCount] = useState([]);
  // const [count, setCount] = useState([]);


  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data =>{
      setCountries(data);
      console.log(data)
    })
    .catch(error => console.log(error))
  },[]);
  
  const handleAddCountry = (country) =>{
    console.log('Country added', country)
    const newCount = [...count, country];
    setCount(newCount);
    // const newCount = [...count, country];
    // setCount(newCount);

  } ;

  return (
    <div className="App">
      <h1>Country: {countries.length}</h1>
      <p>Country added: {count.length}</p>
      <p> <Count count={count}></Count> </p>
      {/* <h3>Country added: {count.length} </h3>
        <p>Country Population:<Count count={count}></Count> </p> */}

  
       {
          countries.map(country => <Country country = {country} key={country.alpha3Code} handleAddCountry={handleAddCountry}></Country>)
        }

     


      {/* // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header> */}
    </div>
  );
}

export default App;
