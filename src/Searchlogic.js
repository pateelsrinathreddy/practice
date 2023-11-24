import React, { useState } from 'react'

const Searchlogic = () => {
    const [city,setCity]=useState(["Hyderabad","Delhi","Mumbai","Kolkata","kerala"])
    const [search,setSearch]=useState('')
  
    

                    

    
    
        
   
    

   
    function handlechange(e){
      
     setSearch(e.target.value)
     
     
     if(search.length <= 1){  
      setCity(["Hyderabad","Delhi","Mumbai","Kolkata","kerala"])
     }
     else {
      const b=city.filter((values)=>{            
        if ( values.toLowerCase().includes(search.toLowerCase())){
          return values;
        }
        
       })
       setCity(b)    
       

     }

     
    

}
   



  return (
    <div>
        
        
        
        {city.map((values)=>{
          
                return (
                    <ul>
                    <li>{values}</li>
                    </ul>
                )
           
        })}
        <input type="text" placeholder='search by listitems' onChange={handlechange}/>
       

       
        
    </div>
  )
}

export default Searchlogic
// {city.filter(values=>values.toLowerCase().includes(search.toLowerCase())).map((values)=>{


