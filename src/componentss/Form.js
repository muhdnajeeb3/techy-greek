import React, { useState } from "react";
import './Form.css'


function Form() {

    const [user,setUser] = useState({
      name:"",
      date:"",
      tel:""
    })


    const handleForm=()=>{
      if(setUser.name!=="" && setUser.date!=="" && setUser.tel!==""){
      if(localStorage.getItem("user")){
        alert("user Already stored")
      }else{
        localStorage.setItem("user",JSON.stringify(user))
        
      }
      if(!user){
        localStorage.clear();
      }
    }else{
      alert("fill all data")
    }
    }
    console.log(user)
  return (
    <div className="form">
            Name:<input type='name' placeholder="name" onChange={(e)=>setUser({...user,name:e.target.value})}/><br />
            Date:<input type='date' placeholder=""  onChange={(e)=>setUser({...user,date:e.target.value})}/><br />
            Mobile:<input type='tel'  placeholder="mobile" onChange={(e)=>setUser({...user,tel:e.target.value})}/><br />
            <button type="submit" onClick={handleForm} className="btn btn-primary btn-block">Submit</button>
            <div>
                
            </div>
      </div>
  );
}

export default Form;