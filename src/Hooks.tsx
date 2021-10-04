import React, { useEffect, useRef, useState } from 'react'
import Ref from './components/Ref';
function Timer() {
  const [time, setTime] = useState(new Date());
  const quotes = [
    { quote: "babo1", name: "kms1" },
    { quote: "babo2", name: "kms2" },
    { quote: "babo3", name: "kms3" },
    { quote: "babo4", name: "kms4" },
    { quote: "babo5", name: "kms5" },
    { quote: "babo6", name: "kms6" },
    { quote: "babo7", name: "kms7" },
    { quote: "babo8", name: "kms8" },
    { quote: "babo9", name: "kms9" },
    { quote: "babo10", name: "kms10" },
  ]
  const randomNum = Math.floor(Math.random() * quotes.length)
  const [quote, setQuote] = useState(quotes[randomNum]);



  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      console.log("timer worked")
    }, 1000)
    console.log('timer mounted')
    return () => {
      clearInterval(timer);
      console.log("timer removed")
    }


  }, [])

  function beautifyTimes(time: number) {
    return String(time).padStart(2, '0');
  }


  return <>
    <h2>{beautifyTimes(time.getHours())}:{beautifyTimes(time.getMinutes())}:{beautifyTimes(time.getSeconds())}</h2>
    <p>"{quote.name} : {quote.quote}"</p>
  </>
}


function App() {


  const [timerSwitch, setTimerSwitch] = useState(true);
  const inputRef = useRef<HTMLInputElement>();
  return (
    <div className="container">

      <h1>Hello World</h1>
      <button onClick={() => setTimerSwitch(!timerSwitch)}>Timer {timerSwitch ? "OFF" : "ON"}</button>
      {
        timerSwitch && <Timer />
      }
      <div>
        <input ref={inputRef} type="text" placeholder="Test Hot Reload" />
      </div>
      <Ref inputRef={inputRef} />
    </div>
  )
}




export default App
