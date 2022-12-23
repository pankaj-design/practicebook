import React, {useEffect, useState } from 'react'
// import { post } from '../../../backend1/router/auth';
import Home from '../components/Home'

const About = () => {
  const [playData, setplayData] = useState([]);
  const [random, setRandom] = useState({
    // number1:Math.floor(Math.random() * 100) + 1,
    number1: Math.floor(Math.random() * 10), number2: Math.floor(Math.random() * 10),
  });
  

  useEffect(() => {
    //   counter.current += 1;
      const timer = setInterval(() => setRandom({  number1: Math.floor(Math.random() * 10), number2: Math.floor(Math.random() * 10), }), 10000);

      return () => clearTimeout(timer);
  }, []);
 
  useEffect(() => {
    // Button2()
    setInterval(function () {document.getElementById("Button").click();}, 5000);
    }, []);



  const sendData = async (e) => {
    e.preventDefault();

    const { number1, number2 } = random;
    const numb = await fetch("/api/auth/getnumber",
      {
        method: 'post',
        headers: {
          "content-Type": "application/json"
        },
        body: JSON.stringify({
          number1, number2
        })
      });
    const data = await numb.json({});
    if (!data.status === 200) {
      window.alert("Invalid credentials")
    } else {
      console.log(data);
    }
    setplayData(data);
  };
  


  return (
    <>

    <div className='F1'>      
      <form method='POST'>
        <input type="number1" name="number1" id='number1' defaultValue={random.number1} placeholder="random1" aria-label="number1"
        />
        <input type="number2" name="number2" id='number2' defaultValue={random.number2} placeholder="random2" aria-label="number2"
        />
        <button id='Button' type='submit'
          onClick={sendData}
        >get</button>
      </form>
      <div className='R1'>
        <h1>Practice Book</h1>
        <div key={"number"}>{playData.map((getNumber) => <div className='R2'><h2>{getNumber.word}</h2> - {getNumber.meaning}</div>)}</div>
        <div key={"number"}>{playData.map((getNumber) => <div><p> Eg -{getNumber.example}</p></div>)}</div>
      </div>
      </div>
    </>
  )
}

export default About
