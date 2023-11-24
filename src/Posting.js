import React, { useState } from 'react'


const Posting = () => {
    const [title,setTitle]=useState('')
    const [price,setPrice]=useState('')
    function submitting(){
        let data={title,price}
    fetch("http://localhost:3000/products",{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
    }).then(res=>res.json())
    .then(info=>console.log("info",info))
    setTitle('')
    setPrice('')
    }
  return (
    <div>
        
        <input type="text"  placeholder='enter name' onChange={(e)=>setTitle(e.target.value)} value={title}/> <br></br>
        <input type="number"  placeholder='enter price' onChange={(e)=>setPrice(e.target.value)} value={price}/> <br></br>
        <button onClick={submitting}>submit</button>


    </div>
  )
}

export default Posting