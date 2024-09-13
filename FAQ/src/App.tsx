import './App.css'
import questions from './data'
import { Questions } from './components/Questions'

function App() {
 

  return (
    <>
      {questions.map((oneQuestion) => 
        <Questions key={oneQuestion.id} {...oneQuestion}/>
      )}
    </>
  )
}

export default App
