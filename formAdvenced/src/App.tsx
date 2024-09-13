import './App.css'
import { useState } from 'react'

interface UserType{
  name: string
  email: string
  age: string
}


function App() {
  
  const [data, SetData] = useState({name: "", email: "" , age: "" })
  const [user, SetUser] = useState<Array<UserType>>([])

  const FormChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    SetData({...data, [name]: value})
  }

  const FormSubmitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault()

    if(data.name && data.age && data.email){
      const oneUser = {name: data.name, email: data.email, age: data.age}
      SetUser((user) => [...user, oneUser])

      SetData({name: "", email: "" , age: "" })
    }else{
      alert("Nevyplnili jste pole")
    }

    
  }
  return (
    <>
      <form onSubmit={FormSubmitHandler}>
        <input 
        type="text" 
        placeholder='Jmeno'
        value={data.name}
        onChange={FormChange}
        name='name'
        />
        <input 
        type="email"
        placeholder='email' 
        value={data.email}
        onChange={FormChange}
        name='email'
        />
        <input
        type="text"                        
        placeholder='věk' 
        value={data.age}
        onChange={FormChange}
        name='age'
        />
        <input type="submit" 
        value="Odeslat"
        />
      </form>
      {user.map((oneName, index) => {
        return <p key={index}>{oneName.name}, {oneName.email}, {oneName.age}</p>
      })}
    </>
  )
}

export default App
