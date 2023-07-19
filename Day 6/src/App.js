
import './App.css';


import Login from './Components/login';

import About from './Components/pages/about';

import Signup from './Components/signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from './Components/pages/menu';

import KitchenDisplay from './Components/pages/nav';

import Contact from './Components/pages/contact';
import Nav from './Components/Dashboard/dash';
import TermsAndConditions from './Components/pages/terms';
import Nav1 from './Components/Dashboard/dash1';
import Nav2 from './Components/Dashboard/dash3';





function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<KitchenDisplay/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        
        <Route path='/about' element={<About/>}></Route>
         <Route path='/menu' element={<Menu/>}></Route>
    
         <Route path='/dash' element={<Nav/>}></Route>
         <Route path='/dash1' element={<Nav1/>}></Route>
         <Route path='/dash2' element={<Nav2/>}></Route>
         <Route path='/contact' element={<Contact/>}></Route>
         <Route path='/terms' element={<TermsAndConditions/>}></Route>
      
         
       </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
