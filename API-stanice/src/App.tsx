import './App.css'
import { useState, useEffect } from 'react'
interface DataType {
  message : string
  timestamp : string
  iss_position: {
    latitude  : string,
    longitude : string
  }
}

function App() {

  const apiUrl: string = "http://api.open-notify.org/iss-now.json"

  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [url, setUrl] = useState("")
  const getCoorinates = async(): Promise<void> => {
    const response: Response = await fetch(apiUrl)
    const data:DataType = await response.json()
    setLatitude(data["iss_position"]["latitude"])
    setLongitude(data["iss_position"]["longitude"])
    setUrl(`https://mapy.cz/zakladni?x=${longitude}&y=${latitude}z=8`)
  }

  useEffect(() => {
    getCoorinates()
  })
  

  return (
    <>
     <h1>API</h1>
     <h2>Zeměpisná šířka</h2>
     <p>{latitude}</p>
     <h2>Zeměpisná dělka</h2>
     <p>{longitude}</p>
     <a href={url}>ISS POZICE</a>
    </>
  )
}

export default App
