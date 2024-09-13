import { useState } from 'react'

interface QuestionsProps{
    title: string
    info: string
}

export const Questions = ({title, info}: QuestionsProps) => {
    const [show, setShow] = useState(false)
    return<section>
        <div>
        <h2>{title}</h2>
        <button onClick={() => setShow(!show)}>Odpověď</button>
        </div>
       {show && <p>{info}</p>}
    </section>
}