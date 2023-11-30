import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import UseMenu from "./UseMenu";
import UseList from "./UseList";
import UseAxiosSecure from "./UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const AdminHome = () => {
    const {user} = useContext(AuthContext);
    const [menu] = UseMenu();
    const [list] = UseList();

    const axiosSecure = UseAxiosSecure();
    const { data: users = [] } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        const res = await axiosSecure.get("/users");
        return res.data;
      },
    });

    return (
        <div className="bg-[#e3c099] p-[50px] h-[800px]">
            <div className="flex justify-between items-center">
                <div>
                <p className="text-[25px] font-a">Welcome Back To Your Page , <span className="text-orange-500">{user.displayName}</span></p>
                </div>
                <div>
                    <img className="w-[100px] h-[100px]" src={user.photoURL}></img>
                    <p>{user.displayName}</p>
                    <p>{user.email}</p>

                </div>
            </div>
            <div className="divider"></div>
            <div className="flex justify-around items-center">
                <div className="flex bg-white">
                   <div className="card shadow-xl">
                      <div className="card-body">
                        <figure><img className="w-[450px]" src="https://i.ibb.co/DM6bhnc/s1.jpg"></img></figure>
                          <p className="text-[22px] font-a">Total Users : {users.length}</p>
                      </div>
                   </div>
                   <div className="card shadow-xl">
                      <div className="card-body">
                      <figure><img className="w-[450px]" src="https://i.ibb.co/84YjPLN/s2.jpg"></img></figure>
                         <p className="text-[22px] font-a"> Total Shop : {menu.length}</p>
                      </div>
                   </div>
                   <div className="card shadow-xl">
                      <div className="card-body">
                      <figure><img className="w-[450px]" src="https://i.ibb.co/Fbp5Jkc/s4.jpg"></img></figure>
                         <p className="text-[22px] font-a">Total Added Product : {list.length}</p>
                      </div>
                   </div>
                </div>
                {/* <div className="vertical-divider" style={{ borderLeft: '2px solid #411900', height: '500px' }}></div>
                <div>
                    <img className="w-[200px]" src={user.photoURL}></img>
                    <p>{user.displayName}</p>
                    <p>{user.email}</p>
                </div> */}
            </div>
           
        </div>
    );
};

export default AdminHome;