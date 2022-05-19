import { useState } from 'react';
//import React, { useEffect, useState } from "react";

import './App.css';

 function App() {
  const [formFields, setFormFields] = useState([
    { name : '',address: '', mobile:'' ,designation:'',},
  ])
  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
   
    
    setFormFields(data);
    
  }
  const submit = (e) => {
    e.preventDefault();
    console.log(formFields)
  }

  const addFields = () => {
    let object = {  
      name: '', 
      address: '',     
      mobile:'',
      designation:''
    }

    setFormFields([...formFields, object])
  }
  function saveData()
{
  
 let data = {...formFields};
 
console.log("save fn"+JSON.stringify(data));
console.log("hi")
fetch("http://localhost:8000/attendance/addemp", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  }).then((resp)=>{
     console.warn("resp",resp);;
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
              name='name'
              placeholder='Name'
              onChange={event => handleFormChange(event, index)}
              value={form.name}
            />
         <br/>
            <input
              name='mobile'
              placeholder='MobileNo'
              onChange={event => handleFormChange(event, index)}
              value={form.mobile}
            />
            <br/>
            <input
              name='address'
              placeholder='address'
              onChange={event => handleFormChange(event, index)}
              value={form.address}
            />
            <br/>
            <input 
              name='designation'
              placeholder='designation'
              onChange={event => handleFormChange(event, index)}
              value={form.designation}
            />
            <br/>
            
          </div>
        )
      })}
    </form>
   
    <button onClick={saveData}>save</button>
    
  </div>
);
}//app
  export default App;