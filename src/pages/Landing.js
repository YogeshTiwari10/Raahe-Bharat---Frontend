import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../components/Form/SearchInput";
import useCategory from "../hooks/useCategory";
import { Badge } from "antd";

const Landing = () => {
  const [auth, setAuth] = useAuth();
  const categories = useCategory();
  return (
   

    <div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Treak Heaven Front</title>
  <link rel="stylesheet" href="landing.css" />
  <div className="hero" />
  <nav className='nav'>
    <ul>
    <NavLink to="/home" className="navh " >Home</NavLink >
    <NavLink to="/categories" className="navh " >Destinations</NavLink >
    <NavLink to="/about" className="navh " >About Us</NavLink >
    <NavLink to="/register" className="navh " >Register</NavLink >
    <NavLink to="/login" className="navh " >Login</NavLink >
    </ul>
  </nav>
  <div className="content">
    <h1>Welcome to India</h1>
    <NavLink to="/home" className="exp-btn" >Explore</NavLink >
  </div>
  <video width="100%" height="100%" autoPlay muted loop plays-inline className="back-video">
    <source src="/images/vf.mp4" type="video/mp4" />
  </video>
  <div className="layer">
  </div>
</div>

    
//     <div>
//   <div className="content">
//     <h1>Welcome to India</h1>
//     <NavLink to="/home" className="navh " >Explore</NavLink >
//   </div>
//   <video width="100%" height="100%" autoPlay muted loop plays-inline className="back-video">
//     <source src="/images/vf.mp4" type="video/mp4" />
//   </video>
//   <div className="layer">
//   </div>
// </div>
  )
}

export default Landing