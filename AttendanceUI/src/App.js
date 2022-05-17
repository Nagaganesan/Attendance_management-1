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
    data[index][event.target.address] = event.target.value;
    data[index][event.target.mobile] = event.target.value;
    data[index][event.target.designation] = event.target.value;
    
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
  //let data={Designation,name,Address,Mobileno}
 let data = [...formFields];
 /*let data={
  "name":"gavin",
  "mobile":"8937443323",
  "designation":"Developer",
  "address":"no 12,near shanmuga hospitals,salem-632810"

}*/
fn[{"name":"test","address":"salem","mobile":"98765442424","designation":"software","undefined":"software"}]

console.log("save fn"+JSON.stringify(data));
console.log("hi")
fetch("http://127.0.0.1:8000/ad/add", {
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