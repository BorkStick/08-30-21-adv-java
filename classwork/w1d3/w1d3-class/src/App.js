import './App.css';
import PetStore from './PetStore.jsx';
import IncrButton from './IncrButton';
import ViewCount from './ViewCount';
import Activity from './Activity.jsx';
import React, { useState } from 'react';

function App() {

  const[count, setCount] = useState(0);
	
  let dataArr = [{
    name:"John Snow", 
    location:"Winterfell"
  }, {
    name:"Tyrion Lannister", 
    location:"Casterly Rock"
  }];

  let dataElementArr = dataArr.map((person, index)=>{
    return <li key={index}>Name: {person.name} Location: {person.location}</li>
  })

  const handleIncrButton = () => {
    setCount(count + 1)
  }

  return(
    <div>
    <ul>
      {dataElementArr}
    </ul>
    <br></br>
    <PetStore />
    <br></br>
    <ViewCount count={count} />
    <IncrButton handleIncrButton={handleIncrButton} />
    <hr></hr>
    <Activity />
    </div>
  )
  
}


export default App;
