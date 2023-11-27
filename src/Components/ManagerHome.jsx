import { Link } from "react-router-dom";
import UseMenu from "./UseMenu";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const ManagerHome = () => {
    const [menu] = UseMenu();
    const {user} = useContext(AuthContext);
    return (
        <div>
          <div className="flex justify-center items-center gap-[50px]">
          <p className=" font-a text-[30px]">Total <span className="text-orange-500 ">{menu.length}</span> Product Added</p>
           <Link to='/dashboard/listform'><button className="btn-outline border-[2px] text-[#411900] w-[140px] h-[50px] text-[18px]">Add Product</button></Link>
          </div>
          
          <div className="flex justify-between items-center">
            <div>
               <p>mmmmmmmmmmmm</p>
            </div>
          <div>
             <div className="flex-col  items-end mx-[10px]  mt-[50px]">
               <div> <img className="w-[260px] h-[270px] " src={user.photoURL}></img> </div>
               <div> <p className="text-[22px] text-black my-[10px]"> Name : {user.displayName}</p></div>
               <div> <p className="text-[22px] text-black my-[10px]"> Email: {user.email}</p></div>
            </div>
          </div>
      
          </div>
        </div>
    );
};

export default ManagerHome;