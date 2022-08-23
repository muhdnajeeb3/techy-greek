import React, { useState } from "react";


function Form() {

    const [name,setName] = useState("")
    const [date,setDate] = useState("")
    const [tel,setTel] = useState("")

    const handle=()=>{
        localStorage.setItem("name",name);
        localStorage.setItem("date",date);
        localStorage.setItem("tel",tel);
        
    }
  return (
    <div className="form">
        
            
                
            <input type='name' placeholder="name" onChange={(e)=>setName(e.target.value)}/><br />
            <input type='date' placeholder=""  onChange={(e)=>setDate(e.target.value)}/><br />
            <input type='tel'  placeholder="mobile" onChange={(e)=>setTel(e.target.value)}/>
            <button type="submit" onClick={handle} className="btn btn-primary btn-block">Submit</button>
            <div>
                <div>{localStorage.getItem('name')}</div>
                <div>{localStorage.getItem('date')}</div>
                <div>{localStorage.getItem('tel')}</div>
            </div>
        
     
     

      
      </div>
  );
}

export default Form;
