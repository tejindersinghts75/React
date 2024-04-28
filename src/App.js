import './App.css';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Navigation from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About'
import Services from './Pages/Service';
import News from './Pages/News';
import Shop from './Pages/Shop';
import Pages from './Pages/Page';
import Contact from './Pages/Contact';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Pages/Login';
import Logout from './Logout';
import ProtectedRoute from './  ProtectedRoute';

import { Navigate, Outlet, useNavigate } from "react-router-dom"
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import SocialMedia from './Pages/SocialMedia';
// import { addToCart } from './Features/AddtoCart/AddToCart';

function App(props) {

  const [data, showData] = useState([])
  const [products, setProducts] = useState()

  const renderData = (data) => {
    showData(data)
  }
  const { loginToken } = useSelector((store) => store.todoSlice)
  const token = loginToken.isLoggedIn;
  console.log(token)
  let { id } = useParams(token)
  return (
    <div className="App">

      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home/> </ProtectedRoute>}/>
          <Route path="/about" element={<ProtectedRoute><About/> </ProtectedRoute>}/>
          <Route path="/socialmedia" element={<ProtectedRoute><SocialMedia/> </ProtectedRoute>}/>
          <Route path="/pages" element={<ProtectedRoute><Pages title="I'm a disabled button" disabled={true} /> </ProtectedRoute>}/>
          <Route path="/news" element={<ProtectedRoute><News/> </ProtectedRoute>}/>
          <Route path="/shop" element={<ProtectedRoute><Shop showData={showData}/> </ProtectedRoute>}/>
          <Route path="/contact" element={<ProtectedRoute><Contact/> </ProtectedRoute>}/>
          <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/Signup' element={<SignUp />} />
         
        </Routes>

      </Router>

    </div>
  );
}

export default App;
