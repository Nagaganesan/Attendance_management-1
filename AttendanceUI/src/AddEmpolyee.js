import React, { Component } from 'react'
 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 

import FormValidator from './FormValidator';
import './App.css';
class App extends Component{
constructor(){
super();
this.validator = new FormValidator([{
field: 'Emp_id',
method: 'isEmpty',
validWhen: false,
message: 'Enter Emp Id.'
}, {
field: 'Name',
method: 'isEmpty',
validWhen: false,
message: 'Enter your Name.'
}, {
field: 'Address',
method: 'isAddress',
validWhen: true,
message: 'Enter valid address.'
},  {
field: 'phone',
method: 'matches',
args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/],
validWhen: true,
message: 'Enter valid phone number.'
},  {
field: 'Designation',
method: 'isEmpty',
validWhen: false,
message: 'Enter your Designation.'
}, 
]);
this.state = {
Emp_Id: '',
Name: '',
Address:'',
phone: '',
Designation: '',

validation: this.validator.valid(),
}
this.submitted = false;
}
passwordMatch = (confirmation, state) => (state.password === confirmation)
handleInputChange = event => {
event.preventDefault();
this.setState({
[event.target.Emp_Id]: event.target.value,
});
}
handleFormSubmit = event => {
event.preventDefault();
const validation = this.validator.validate(this.state);
this.setState({
validation
});
this.submitted = true;
if(validation.isValid) {
//reaches here if form validates successfully...
}
}
render() {
let validation = this.submitted ?this.validator.validate(this.state) : this.state.validation
return (
<div className="container">
<div className="row">
<div className="col-md-4 col-md-offset-4">
<form className="EmpolyeeForm">
<h2>Add EmpolyeeForm</h2>

<div className={validation.Emp_Id.isInvalid && 'has-error'}>
<label htmlFor="Emp_Id">EmpolyeeId</label>
<input type="string" className="form-control" name="Emp_Id" placeholder="EmpolyeeID" onChange={this.handleInputChange} /> <span className="help-block">{validation.Emp_Id.message}</span> </div>

<div className={validation.Name.isInvalid && 'has-error'}>
<label htmlFor="Name">Name</label>


<label htmlFor="phone">Phone(enter only 10 digit number)</label>
<input type="phone" className="form-control" name="phone" placeholder="Phone Number" onChange={this.handleInputChange} /> <span className="help-block">{validation.phone.message}</span> </div>
<div className={validation.password.isInvalid && 'has-error'}>

<label htmlFor="Designation">Designation</label>
<input type="text" className="form-control" placeholder="Designation" name="Designation" onChange={this.handleInputChange} /> <span className="help-block">{validation.password.message}</span> </div>
<div className={validation.Designation.isInvalid && 'has-error'}>


</div>

<button onClick={this.handleFormSubmit} className="btn btn-primary"> save </button>
</form>

</div>
</div>
</div>
)
}
}
export default App;