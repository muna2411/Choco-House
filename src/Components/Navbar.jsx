import { useContext } from "react";
import Headroom from "react-headroom";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import UseCart from "./UseCart";

//import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Navbar = () => {
  const {user , logOut } = useContext(AuthContext);
  const [cart] = UseCart();


const handleLogOut = () => {
  logOut()
  .then(() => {})
  .catch(error => console.log(error));
}

    const navOptions = <>
     <li ><Link to='/' >Home</Link></li>
     {/* <li><Link to='/menu' >Menu</Link></li> */}
     <li><Link to='/order/Donut' >Items</Link></li>
     <li><Link to='/createShop'>Create Shop</Link></li>
     <li><Link to='/watchDemo'>Watch Demo</Link></li>
     
     {
      user ? <><li><Link to='/dashboard'>Dashboard</Link></li></>  
      : 
      <><li><Link to='/signup' >SignUp</Link></li></>
     }

    
    {
      user ? <><li><Link onClick={handleLogOut}>Log Out</Link></li></> 
      : 
      <><li><Link to='/login' >Login</Link></li></>
    }

  
    </>
    return (
 
          <Headroom>
        
          <div className="navbar bg-opacity-70  w-full  bg-[#DAA06D]  max-w-screen-l mx-auto">
  <div className="navbar-start " >
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black text-[20px] font-semibold" >
       {navOptions}
      </ul>
    </div>
    <img className="h-[100px]" src="https://i.ibb.co/52x7MwJ/r13.png"></img>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-black text-[20px] font-semibold">
     {navOptions}
    </ul>
  </div>

  <div className="navbar-end flex ">
    <div className="flex">
     <div className="dropdown dropdown-end">
      <Link to='/dashboard'>
      <button tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">{cart.length}</span>
        </div>
      </button>
      </Link>



     
     {/* {
       googleSignIn && <div className="flex justify-center items-center mx-[10px] ml-[200px] ">
       <div> <img className="w-[60px] h-[60px] mx-[10px]"style={{ borderRadius: "50%"}} src={googleSignIn.photoURL}></img> </div>
       <div> <p className="text-[18px] text-black">{googleSignIn.displayName}</p></div>
     </div>
     } */}


    </div>
    {
      user && <div className="flex justify-center items-center mx-[10px]  ">
            <div> <img className="w-[60px] h-[60px] mx-[10px]"style={{ borderRadius: "50%"}} src={user.photoURL}></img> </div>
            <div> <p className="text-[18px] text-black">{user.displayName}</p></div>
          </div>
      } 

    </div>

   
  </div>
</div> 
          
</Headroom>
        
    );
};

export default Navbar;