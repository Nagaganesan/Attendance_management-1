import './App.css';
import profile  from "./images/smrft.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';

function App() {
  return (
    <div>
    <div className="main">
      <img src={profile} className="smrft_logo" alt="logo" /> 
  </div>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#"></a>
    </div>
  </div>
</nav>
      <NavbarComp/>
    </div> 
  );
}
export default App;
