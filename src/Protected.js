import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const Protected = (props) => {
    const {Component}=props;
    const token=localStorage.getItem("token")
    const decode=jwt_decode(token)
    console.log( "test")
    
    const navigate=useNavigate();
    // useEffect(()=>{
    //     let login=localStorage.getItem('pass')
        
    //     if(login !== "12345"){
    //         navigate('/login')
    //     }
        
    // },[]);
    useEffect(()=>{
      if(decode.role == 'admin'){
        return
      }
    })
  return (
    <div>
        <Component/> 
        
    </div>
  )
}

export default Protected