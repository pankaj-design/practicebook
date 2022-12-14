import {React, useState} from 'react'

function Home() {
  const [userData, setuserData] = useState({
    word : ""
  });
  const [search, setSearch] = useState({
    word : ""
  });
  const myData = async (e) => {
    e.preventDefault();
  
    const {word} = search;
    // try{
    const res = await fetch('/api/auth/getdata', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      // credentials: "include"
      body: JSON.stringify({
        word,
      }),
    });
    const data = await res.json();
    // setuserData(data);
  if (!res.status === 200 ){
    window.alert("Invalid credentials")
  }else{
    console.log(data);
   
  }
  setuserData(data);
  //  }
  //  catch (err){
  //   console.log(err);
  // }
  }

  let name , value; 
  const handleInputs = (e) => {
// console.log(e);
name = e.target.name;
value = e.target.value;

setSearch({...search, [name]: value});
  }

  return (
    <>
    <div className='P1'>
      <h1>One word substitution</h1>
      {/* <h1>For Practice</h1> */}
      <div className='row B1'>
      <div className='col-sm-6 M1'>
    <form className="P2 d-flex" method='POST' role="search">
        <input className="form-control me-2" type="search" name='word' id='search' placeholder="Search" aria-label="Search"
        value={search.word} 
        onChange ={handleInputs}/>
        <button className="btn btn-outline-success bg-warning" type="submit" onClick={myData}>Search</button>
      </form>
      <div>
      <div className='cout'>Word - {userData.word}</div>
      <div className='cout'>Meaning - {userData.meaning}</div>
      <div className='cout1'> Example - {userData.example}</div>
      </div>
      </div>
      <div className='P3 row'> 
      <div  className='B2 col-sm -4'>
<ul>
  <li><h3>More to Learn</h3></li>
  <li>CGL</li>
  <li>Synonyms</li>
  <li>Reasoning</li>
  <li>GS</li>
</ul>
</div>
<div className='B3 col-sm -4'>
<ul >
  <li><h3>Pankaj Yadav</h3></li>
  <li>Website</li>
  <li>www.pankaj@gmail.com</li>
  <li>Noida</li>

</ul>
</div>
</div>
</div>
      </div>
    </>
  )
}

export default Home

/* <div className='col-sm -4'>
<ul className='B2'>
  <li>CGL</li>
  <li>Synonyms</li>
  <li>Reasoning</li>
  <li>GS</li>
</ul>
</div> */