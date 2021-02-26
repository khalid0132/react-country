import React from "react";

const Count = (props) => {
//   console.log(props);
const count = props.count;
  let totalPopulation = 0;
  for (let i = 0; i < count.length; i++) {
      const country = count[i];
      totalPopulation = totalPopulation + country.population;
      
  }
  return (
    <div>
      <p>Total Population:{totalPopulation}</p>
    </div>
  );
};

export default Count;
