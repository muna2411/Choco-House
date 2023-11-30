import { useContext } from "react";

import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";


const UserHome = () => {
    const {user} = useContext(AuthContext);
   
   // const [list] = UseList();
   
   

    return (
        <div className=" p-[50px] h-[800px]">
            <div className="flex justify-between items-center">
                <div>
                <p className="text-[25px] font-a">Welcome To Your Page , <span className="text-orange-500">{user.displayName}</span></p>
                </div>
                
            </div>
            <div className="divider"></div>
            <div className="hero flex justify-around items-center " style={{backgroundImage: 'url(https://i.ibb.co/tcSXZX8/25.png)'}}>
                <div className="flex items-center gap-[50px]">
                   <div className="card shadow-xl bg-white">
                      <div className="card-body">
                        <figure><img className="w-[300px]" src="https://i.ibb.co/3dS5nwb/s3.jpg"></img></figure>
                          <Link className="mx-auto mt-[30px]" to='/dashboard/myShop'><button className="btn-outline border-[2px] text-[#411900] w-[160px] h-[50px] text-[18px]"> See My Shop List</button></Link>
                   </div>
                   </div>
                   <div className="vertical-divider" style={{ borderLeft: '2px solid #411900', height: '600px' }}></div>
                   <div>
                    <img className="w-[300px] h-[350px]" src={user.photoURL}></img>
                    <p>{user.displayName}</p>
                    <p>{user.email}</p>

                </div>
               
                 
                </div>
        
            </div>
           
        </div>
    );
};
export default UserHome;