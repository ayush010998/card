import Card from './Card';
import {useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const[tours,setTours]=useState([])

  useEffect(()=>{
    axios.get('https://course-api.com/react-tours-project')
    .then((response)=>setTours(response.data))
  },[])
  return (
    <div className="App">
     <Card tours={tours}/>
    </div>
  );
}

export default App;
