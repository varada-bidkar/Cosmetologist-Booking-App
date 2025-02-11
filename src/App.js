import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import Booking from './pages/Booking';
import Login from './pages/Login';
import NotFoundComp from './pages/NotFoundComp'
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import About from './pages/About';

function App() {
  return (
  <>
  <div className='offer'>
    <p>LAST DAY! Happy Coffee Day! Free Full Size Coffee Bean Eye Cream with $35+ USE CODE:COFFEE24</p>
  </div>

    <div className='box'>
            
           
           <div className='links'>
            <NavLink to='/'>Home</NavLink>
           <NavLink to='/about'>About</NavLink>
            <NavLink to ='/products'>Products</NavLink>
            <NavLink to='/booking'>Booking</NavLink>
            
           </div>
           <Link to="/login">
        <button>Login</button>
      </Link>
          
      </div>
        


<Routes>
  <Route path='/' Component={Home}/>
  <Route path='/about' Component={About}/>
  <Route path="/login" Component={Login } />
  <Route path='/products' Component={Products}/>
  <Route path='/booking' Component={Booking}/>
  <Route path='*' Component={NotFoundComp}/>
</Routes>
    </>
  );
}

export default App;
