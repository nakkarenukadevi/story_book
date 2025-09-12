import React from "react";
import {Link} from "react-router-dom";
const Header=()=>{
    return <>
<div className="flex justify-center items-center h-10 shadow-lg bg-white text-black font-bold">
<div className="links flex gap-10 justfiy-">
    <div>
        <Link to='/'>Home</Link>
    </div>
    <div>
        <Link to="/about">About</Link>
    </div>
    <div><Link to="/contact">Contact</Link></div>


</div>
<div className="cart absolute right-0 mr-10">
    <Link to="/cart">Cart</Link>

</div>
</div>
    </>
}
export  default  Header;