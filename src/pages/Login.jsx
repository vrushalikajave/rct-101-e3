import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";


  const Remove=()=>{
    
  }

  const Count=()=>{
    const[c, setc]=useState(0)
  return (
    

    <div style={{display:"flex"}}>
    <button>+</button>
    <p> {0}</p>
    <button onClick={Remove}>-</button>
    </div>
    
  )
}


const Login = () => {
  const[Islogin , setIslogin] = useState(false)

  const handleOnClick=()=>{
    setIslogin(true)
   
  }



  return (
    <div style={{margin:"50px"}}>
      <input data-cy="login-email" type="emial" placeholder="eve.holt@reqres.in"/>
      <input data-cy="login-password" type="password" placeholder="********"/>
      <button data-cy="login-submit" type="submit" onClick={handleOnClick}>Login</button>
      
    </div>
  );
};

export default Login;
export{ Count }


