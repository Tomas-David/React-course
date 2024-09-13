import './App.css'
import { useState } from 'react'
import text from './data'

function App() {

  const [paragraphCount, SetParagraphCount] = useState("")
  const [paragraphOutput, SetParagraphOutput] = useState<Array<string>>([])

  const SubmitHandler = (event: { preventDefault: () => void }) =>{
      event.preventDefault()
      if(paragraphCount){
        if(Number(paragraphCount) < 0){
          SetParagraphOutput(text.slice(0,1))
        }else if(Number(paragraphCount) > 5){
          SetParagraphOutput(text.slice(0,text.length))
        }else{
          SetParagraphOutput(text.slice(0,Number(paragraphCount)))
        }
      }else{
        alert("Zadejte počet")
      }
  }

  return (
    <>
      <section>
        <form onSubmit={SubmitHandler}>
          <input 
          type="number" 
          placeholder='Počet odstavců'
          onChange={(event) => {SetParagraphCount(event.target.value)}}
          />

          <input 
          type="submit" 
          value="Odeslat"
          />
        </form>
        {paragraphOutput.map((oneParagraph) => {
          return <p>{oneParagraph}</p>
        })}
      </section>
    </>
  )
}

export default App
