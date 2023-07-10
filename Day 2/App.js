
import './App.css';


import Login from './Components/login';

import Signup from './Components/signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Components/nav';



function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/nav' element={<Nav/>}></Route>
       </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
