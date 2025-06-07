import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   let[counter , setcounter] = useState(15);
 //let counter = 15;

 const addvalue = () =>{
  if(counter < 20){
    counter+= 1;
  }
  setcounter(counter);
  
 }

 const removevalue = () =>{
  if(counter > 0){
  setcounter(counter-1);
  }
 }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>
      <button 
       onClick={addvalue} 
       >Add value</button><br /><br />
      <button 
      onClick = {removevalue}>Remove value</button>
    </>
  )
}

export default App
