import { useState } from 'react';
import './App.css';

 function App() {
  const [formFields, setFormFields] = useState([
    { id:'', name: '', Address: '',Mobileno:'' },
  ])

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    data[index][event.target.Address] = event.target.value;
    data[index][event.target.Mobileno] = event.target.value;
    
    setFormFields(data);
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields)
  }

  const addFields = () => {
    let object = {
      id:'',
      name: '',
      Address: '',
      Mobileno:''
    }

    setFormFields([...formFields, object])
  }

  function saveData()
{
  let data={id,name,Address,Mobileno}
// console.warn(data);
  fetch("http://127.0.0.1:8000/ad/add", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  }).then((resp)=>{
    // console.warn("resp",resp);;
    resp.json().then((result)=>{
      console.warn("result",result)
    })
  })
}

  return (
    <div className="App">
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          
          return (
           
            <div key={index}>
              <input
                name='id'
                placeholder='id'
                onChange={event => handleFormChange(event, index)}
                value={form.id}
              />
           <br/>
              <input
                name='name'
                placeholder='Name'
                onChange={event => handleFormChange(event, index)}
                value={form.name}
              />
              <br/>
              <input
                name='Address'
                placeholder='Address'
                onChange={event => handleFormChange(event, index)}
                value={form.Address}
              />
              <br/>
              <input
                name='mobileno'
                placeholder='MobileNo'
                onChange={event => handleFormChange(event, index)}
                value={form.Mobileno}
              />
              <br/>
              
            </div>
          )
        })}
      </form>
     
      <button onClick={submit}>Save</button>
      <button type="button" onClick={saveData} >Save New User</button>
    </div>
  );
      
      
export default App;