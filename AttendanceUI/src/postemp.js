import "./App.css";
import { useState } from "react";

function App() {
  const [name, setname] = useState("");
  const [ mobile, setmobile ] = useState("");
  const [designation, setdesignation] = useState("");
  const [address, setaddress] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("hi")
      let res = await fetch("http://localhost:8000/attendance/addemp", {
        method: "POST",
        body: JSON.stringify({  
        name:name,
        mobile: mobile,
        designation: designation,
        address: address,
        }),
      });
      //let resJson = await res.json();
      if (res.status === 200) {
        setname("");
        setmobile("");
        setdesignation("");
        setaddress("")
        setMessage("Emp Added successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) =>setname(e.target.value)}
        />
        <input
          type="text"
          value={mobile}
          placeholder="mobile"
          onChange={(e) => setmobile(e.target.value)}
        />
        <input
          type="text"
          value={designation}
          placeholder="designation"
          onChange={(e) => setdesignation(e.target.value)}
        />
        <input
          type="text"
          value={address}
          placeholder="address"
          onChange={(e) => setaddress(e.target.value)}
        />

        <button type="submit">save</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default App;