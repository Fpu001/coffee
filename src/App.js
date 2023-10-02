import React,{ useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
const API_URL = "https://random-data-api.com/api/coffee/random_coffee"

function Coffee() {
  const [blend_name, setBlendName] = useState('')
  const [origin, setOrigin] = useState('')
  const [intensifier, setIntensifier] = useState('')
  useEffect(() => {
  axios.get(API_URL)
  .then((response)=> {
    setBlendName(response.data.blend_name)
    setOrigin(response.data.origin)
    setIntensifier(response.data.intensifier)
  }).catch((error)=> {
    alert(error)
  }) 
}, [])
  return (
<div>
<h2>Coffee flavours</h2>
<p>Name: {blend_name}</p>
<p>Origin: {origin} </p>
<p>intensifier: {intensifier}</p>
</div> 
  );
}
export default Coffee; 