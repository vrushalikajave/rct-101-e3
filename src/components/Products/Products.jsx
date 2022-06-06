import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Login from "../../pages/Login";
import { Count } from "../../pages/Login";

const Products = () => {
  const [prod, setProd]=useState([]);


  useEffect(()=>{
    const getProd =async ()=>{
      let r=await axios.get(`http://localhost:8080/products`);
      console.log(r.data);
      setProd(r.data)
     }
    getProd();
    },[])


  
  return <div style={{display:"grid" ,gridTemplateColumns: "1fr 1fr 1fr", margin:"100px 300px 50px 300px", gap:"20px"}} >
  
  {/* {prod.map((p)=>{
    <>
     <p>{p.id}</p>
     <p>hi</p>
     </>
   })} */}

{prod.map((p)=>(
         <div style={{ border:"1px solid red", borderRadius:"20px"}}  > 
        
        <div>
             <h5>{p.name}</h5>
              <p>{p.description}</p>
              <button>Add to cart</button>
              <Count/>
            
          </div>
        
      </div>
       )
      )}


  </div>;
};

export default Products;
