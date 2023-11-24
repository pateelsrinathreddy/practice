import {React,useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    const [correct,setCorrect]=useState("")
    const [pass1,setPass1]=useState("")
    const [email,setEmail]=useState("")
    
    // function perform(){
        
    //     if (correct == 12345) {
    //         localStorage.setItem("pass","12345")
    //     }
    //     let login1=localStorage.getItem("pass")
    //     if(login1 === correct){
    //         navigate('/contact')
    //     } 
    // }
    function handlesubmit(e){
        e.preventDefault()
        const userdetails={Email:email,password:pass1}
        console.log(userdetails)
        fetch("http://localhost:3001/login",{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(userdetails)
        })
        .then(res=>res.json())
        .then(res => {
           const token = res.token;
           if(token){
            localStorage.setItem("token", token)

           }
          
        })
    }
  return (
    <div>
        {/* <p>Login page</p>
        <input type="text" placeholder='enter password' onChange={(e)=>setCorrect(e.target.value)}/> <br/>
        
        <button onClick={perform}>Log in</button> */}
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder='enter email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='enter password' onChange={(e)=>setPass1(e.target.value)}/>
        <button type="submit">submit</button>
        
      </form>
    </div>
  )
}

export default Login