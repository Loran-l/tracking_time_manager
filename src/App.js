import React from 'react'; 
import './App.css';
import { Button } from './components/classesLogginButtons/Button';
import { HealthBtn } from './components/classesLogginButtons/itemButtons/HealthBtn';
import { WorkBtn } from './components/classesLogginButtons/itemButtons/WorkBtn';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="page-container">
    <div className="content-wrap">
    <Navbar/>
    <WorkBtn>Work</WorkBtn>
    <HealthBtn class="healthbtn">Health</HealthBtn>
    <Button>Hobby</Button>
    <Button>Family</Button>
    <Button>Routine</Button>
    <Button>Friends</Button>
    <Button>Education</Button>
    <Button>Entertainment</Button>
    </div>
    <Footer/>
    </div>
    

  );
}

export default App;
