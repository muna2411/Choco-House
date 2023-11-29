import { Link } from "react-router-dom";
import UseMenu from "./UseMenu";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import UseList from "./UseList";


const ManagerHome = () => {
    const [menu] = UseMenu();
    const [list] = UseList();
    const {user} = useContext(AuthContext);
    return (
        <div>
          <div className="flex justify-center items-center gap-[50px]">
          <p className=" font-a text-[30px]">Total <span className="text-orange-500 ">{list.length}</span> Product Added</p>
           <Link to='/dashboard/listform'><button className="btn-outline border-[2px] text-[#411900] w-[140px] h-[50px] text-[18px]">Add Product</button></Link>
          </div>
          <p className=" font-a text-[30px] text-center py-[50px]">Welcome Back ,{user.displayName}</p>
        
       <div className="hero w-full  h-[700px] " style={{backgroundImage: 'url(https://i.ibb.co/YRBkFth/Chocolate-Simple-Flower-Phone-Wallpaper.png)'}}>
       
       <div className="flex justify-around items-center   h-[600px] ">
            <div className="hero w-[500px]  h-[500px] mx-[150px] " style={{backgroundImage: 'url(https://i.ibb.co/RNhbXgD/000-removebg-preview-1.png)' }}>
            <div className="text-[22px] font-a text-white ">
               <p>Total Shop : {menu.length}</p>
               <p>Total Product : {list.length}</p>
            </div>
            </div>
            <div className="vertical-divider" style={{ borderLeft: '2px solid #411900', height: '500px' }}></div>
          <div>
       
             <div className="flex-col  items-end  mx-[150px]">
               <div> <img className="w-[260px] h-[270px] "  style={{borderRadius: '50%' }} src={user.photoURL}></img> </div>
               <div> <p className="text-[20px] text-black my-[10px] text-center"> Name : {user.displayName}</p></div>
               <div> <p className="text-[20px] text-black my-[10px] text-center"> Email: {user.email}</p></div>
            </div>
          </div>
      
          </div>
       </div>
        </div>
    );
};

export default ManagerHome;