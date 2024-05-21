
import './App.css'
import {icon} from 'react'
import ContactCard from './components/contactCard';
import { Route, Routes,Link } from 'react-router-dom'
import Calculator from './components/calculator';
import  { useState } from "react";
import About from './components/nav-links/About';
import  header from "./components/nav-links/side-bar/header"

function App() {
  const arr = [1,2,3,4,5,6,7,8,9]
  const[result, setReult] = useState("");
  const handleClick = (e) => {
setReult(result.concat(e.target.name));
  }
const clear = () =>{
setReult("")
}
const backSpace = () =>{
  setReult(result.slice(0, result.length -1)) // or -1;
}
const calculate = () =>{
  try{
    setReult(eval(result).toString());
  }
     catch (err){
    setReult(" Syntax Error")}
}
  return(
    <div className='App'>
      arr.map(function(num){
        num * 2
      })
    <>
    <div className="container">
      <form>
<input type="text"  value={result}/>
      </form>
<div className="keypad">
 <button   className="highlight" onClick={clear} id='clear'>Clear  </button>
 <button   className="highlight"  onClick={backSpace} id='backspace'> C </button>
 <button  className="highlight"  name='/' onClick={handleClick}>&divide;</button>
 <button name='7'onClick={handleClick}>7</button>
 <button name='8' onClick={handleClick}>8</button>
 <button name='9' onClick={handleClick}>9</button>
 <button  className="highlight" name='*' onClick={handleClick}>&times;</button>
 <button name='4' onClick={handleClick}>4</button>
 <button name='5' onClick={handleClick}>5</button>
 <button name='6' onClick={handleClick}>6</button>
 <button  className="highlight" name='-' onClick={handleClick}>&ndash;</button>
 <button name='1' onClick={handleClick}>1</button>
 <button name='2' onClick={handleClick}>2</button>
 <button name='3' onClick={handleClick}>3</button>
 <button   className="highlight" name='+' onClick={handleClick}>+</button>
 <button name='0' onClick={handleClick}>0</button>
 <button name='.' onClick={handleClick}>.</button>
 <button id='result' className="highlight" onClick={calculate}>=</button>
 </div>
    </div>
    </>

<div>
<About answer="Ibrahim"/>
<About question="what is my name" answer="Ibrahim"/>
<About question="what is my name" answer="Ibrahim"/>
</div>
</div>
  /* <Link  style={{textDecoration: "none", padding:"7px" }} id='home'
   to="/">Homepage</Link>
  <Link id='about' style={{textDecoration: "none", padding:"7px"}} to="/about">About</Link>
  <Link  id='projects' style={{textDecoration: "none", padding:"7px"}} to="/projects">Projects </Link>
  <Link id='blog' style={{textDecoration: "none", padding:"7px"}} to="/blog">Blog</Link>
  <Link id='contact' style={{textDecoration: "none", padding:"7px"}} to="/contact">Contact</Link>
  <Link id='portfolio'  style={{textDecoration: "none", padding:"7px"}} to="/portfolio">Resume</Link>


<Routes>

  <Route path="/" element={ <Homepage/> }></Route>
  <Route path="/about" element={ <About/> }></Route>
  <Route path="/projects" element={ <Projects/> }></Route>
  <Route path="/blog" element={ <Blog/> }></Route>
  <Route path="/contact" element={ <Contact/> }></Route>
  <Route path="/portfolio" element={ <Portfolio/> }></Route>
</Routes>

 */
)
}
 
export default App;