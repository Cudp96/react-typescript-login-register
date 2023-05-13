import './App.css'
import { Routes, Route } from 'react-router-dom';
import Index from './Pages/home';
import Login from './Pages/Login';
import Register from './Pages/Register'
import { ToastContainer } from "react-toastify";
import Dashboard from './Pages/dashboard';
// import Counter from './components/counter/counter';
import Cart from './Pages/cart';



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        {/* <Route path='/counter' element={<Counter />} /> */}
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
