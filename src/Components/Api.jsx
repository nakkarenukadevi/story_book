import React ,{useEffect,useState}from 'react';
import Card from '../stories/Card';

const Api=(props)=>{
    
  let [product,setProduct]=useState([])
    useEffect(()=>{
        getProductsData()
    },[])
    const getProductsData=async()=>{
        let res=await fetch(props.apidata);
        let data=await res.json();
      setProduct(data);
    
    }
    return <>

    {product.map((item)=><div key={item.id} className='m-5 flex'>
         <div className='flex flex-wrap'><Card img={item.image}
       title={item.title}  /> </div>
    </div>)}
    </>
};
export default Api;