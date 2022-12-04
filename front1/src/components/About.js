import React , {useState}from 'react'
// import { post } from '../../../backend1/router/auth';

const About = () => {
const [playData, setplayData] = useState([]);

const [random , setRandom] =useState({
  // number1:Math.floor(Math.random() * 100) + 1,
  number1: Math.floor(Math.random() * 10) , number2: Math.floor(Math.random() * 10),
})
// setRandom({ number1: Math.floor(Math.random() * 10) , number2: Math.floor(Math.random() * 10)})

const sendData = async (e) => {
  e.preventDefault();

const {number1 , number2} = random;
const numb = await fetch("/api/auth/getnumber", 
{
  method:'post',
headers: {
  "content-Type" : "application/json"
},
body: JSON.stringify({
  number1, number2
})
});
const data = await numb.json({});
// if (data.status === 422 || !data){
//   console.log("Invalid ")
// }else{
//   console.log("Valid")
// }
if (!data.status === 200 ){
  window.alert("Invalid credentials")
}else{
  console.log(data);
}
setplayData(data);
}


  return (
    <>
    <div>About</div>
    <div>My email -- Pankaj0001@gmail.com</div>
    {/* <img className='I1' src="https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="dell"></img> */}
    
    <form method='POST'>
      <input type="number1" name="number1" id='number1' defaultValue= {random.number1} placeholder="random1" aria-label="number1"
       />
      {/* <input type="random2" name="random2" id='random2' value= {Math.floor(Math.random() * 100) + 1}  />
      <input type="random3" name="random3" id='random3' value= {Math.floor(Math.random() * 100) + 1}  />
      <input type="random4" name="random4" id='random4' value= {Math.floor(Math.random() * 100) + 1}  /> */}
      <input type="number2" name="number2" id='number2' defaultValue= {random.number2} placeholder="random2" aria-label="number2"
       />
      <button type='submit'
       onClick={sendData}
       >get random</button>
    </form>
    <div>
    <div key={"_id"}>{playData.map(getNumbe1 => <div><h3 className='N1'>{getNumbe1.word}</h3> - <div>{getNumbe1.meaning}</div></div>)}</div>
    <div key={"number"}>{playData.map(getNumber2 => <div>{getNumber2.meaning}</div>)}</div>
    </div>
    </>
  )
}

export default About

{/* <div key={"number"}>{playData.map(getNumber1 => <div>{getNumber1.word}</div>)}</div> */}