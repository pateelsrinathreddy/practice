import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Layout = () => {
    const navigate=useNavigate()
    function clear(){
        localStorage.clear()
        navigate('/login')
        console.log("hi")
        
    }
  return (
    <div>
        <ul className='modify'>
        <li>
            <Link to="/">home</Link>
        </li>
        <li>
        <Link to="/about">about</Link>
        </li>
        <li>
        <Link to="/contact">contact</Link>
        </li>
        <li>
        <Link to="/login">login</Link>
        </li>
        <li>
        <button onClick={clear}>logout</button>
        </li>
        

    </ul>
    <Outlet/>
    </div>
  )
}

export default Layout