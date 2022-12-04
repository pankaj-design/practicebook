import React , {useState} from 'react'


const Datastore = () => {

  const [saveData, setsaveData] = useState({ number: "", word: "", meaning: "", example: ""});

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setsaveData({...saveData, [name]: value});
  }
  const postData = async(e) => {
  e.preventDefault();
  const {number, word, meaning, example} = saveData;

  const res = await fetch('/api/auth/savedata', {
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      number, word, meaning, example
    })
  });
  const data = await res.json();
  if (data.status === 422 || !data) {
    console.log ("Invalid post");
  }else{
    window.alert("Data POSTED successfully")
    console.log("Data POSTED successfully");
  }

  }
  return (
    <>
    <form method='POST'>
    <div className="mb-3 ">
    <label htmlFor="InputNumber" className="form-label">Number</label>
    <input type="number" className="form-control" name='number' value={saveData.number} onChange={handleInputs} id="Inputnumber" aria-describedby="Number"/>
  </div>

  <div className="mb-3">
    <label htmlFor="InputWord" className="form-label">Word</label>
    <input type="text" className="form-control" name='word' value={saveData.word} onChange={handleInputs} id="InputWord" aria-describedby="word"/>
  </div>
  <div className="mb-3">
    <label htmlFor="InputMeaning" className="form-label">meaning</label>
    <input type="text" className="form-control" name='meaning' value={saveData.meaning} onChange={handleInputs} id="InputMeaning"/>
  </div>

  <div className="mb-3">
    <label htmlFor="InputExample" className="form-label">Example</label>
    <input type="text" className="form-control" name='example' value={saveData.example} onChange={handleInputs} id="InputExample"/>
  </div>
  
  <button type="submit" onClick={postData} className="btn btn-primary">Submit</button>
</form>
    
    </>
  )
}

export default Datastore