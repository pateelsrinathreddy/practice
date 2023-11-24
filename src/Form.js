import React, { useState } from 'react'


const Form = () => {
    const [err1,setErr1]=useState(false)
    const [len,setLen]=useState("")
    const [err2,setErr2]=useState(false)
    const [err3,setErr3]=useState(false)
    function handle(e){
        setErr2(false)
        setErr1(false)
        setErr3(false)
       setLen(e.target.value)
       if(len.length <3 ){
        setErr1(true)
       }
       else if(len.length>7){
        setErr3(true)
       }
    }
    function move(){
        if(len.length <=0){
            setErr2(true)
        }
    }
  return (
    <div>
        <input type="text" onChange={handle}/> <br/>
        {err1?<p>minimum 4 required</p>:null}
        {err2?<p>This cant be empty</p>:null}
        {err3?<p>maximum 8 characters allowed</p>:null}
        <button onClick={move}>click</button>
    </div>
  )
}

export default Form