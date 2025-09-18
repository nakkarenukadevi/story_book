import React ,{useState,useEffect}from "react";


import Api from "./Api";

const Home=()=>{
    let [product ,setProduct]=useState([]);
   
 

      return <>
     <div className='flex flex-wrap mx-10'><Api apidata='https://fakestoreapi.com/products'/></div>

      </>


    
}
export default Home;
