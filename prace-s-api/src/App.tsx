import './App.css'
import { useState, useEffect } from 'react'
function App() {
  const apiUrl: string = "http://api.open-notify.org/iss-now.json"
  const [loading, setLoading] = useState(false)
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  
  useEffect(() =>{
    fetch(apiUrl)
    .then((data) => data.json())
    .then((position) => position["iss_position"])
    .then((coord) => {
      setLatitude(coord['latitude'])
      setLongitude(coord['longitude'])
    })
    .then(() => setLoading(false))
  })

  if(loading){
   return<h1>Stránka se načítá...</h1>
  }
  return<>
    <h2>Zemská šířka</h2>
    <p>{latitude}</p>
    <h2>Zemská výška</h2>
    <p>{longitude}</p>
  </>

}

export default App
