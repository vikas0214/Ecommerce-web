
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './components/Header';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import About from './components/pages/About';
import Update from './components/pages/Update';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Add from './components/pages/Add';
import Delete from './components/pages/Delete';
import AllProducts from './components/pages/AllProducts';
import Dev from './components/pages/Dev';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/update' element={<Update/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/delete' element={<Delete/>}/>
      <Route path='/admin' element={<Dev/>}/>
      <Route path='/products' element={<AllProducts/>}/>
      <Route path='/register' element={<Register/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
