import React, { useEffect, useState } from 'react'

function Timer() {
  const [time, setTime] = useState(new Date());
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


  return <h2>{beautifyTimes(time.getHours())}:{beautifyTimes(time.getMinutes())}:{beautifyTimes(time.getSeconds())}</h2>
}


function App() {

  const [timerSwitch, setTimerSwitch] = useState(true);
  return (
    <div>

      <h1>Hello World</h1>
      <button onClick={() => setTimerSwitch(!timerSwitch)}>Timer {timerSwitch ? "OFF" : "ON"}</button>
      {
        timerSwitch && <Timer />
      }
      <div>
        <input type="text" placeholder="Test Hot Reload" />
      </div>

    </div>
  )
}




export default App
