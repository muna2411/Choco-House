import {  FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "./UseAdmin";
import UseManager from "./UseManager";
import { Helmet } from "react-helmet";



const Dashboard = () => {
    //const [cart] = UseCart();

    // TODO: get isAdmin value from the database
    const [isAdmin] =UseAdmin();
    const [isManager] = UseManager();

    return (
        <div className="flex">
             <Helmet>
                <title>Choco House | DashBoard</title>
            </Helmet>
            {/* dashboard side bar */}
            <div className="w-[300px] min-h-screen  text-[#411900] " style={{backgroundImage: 'url(https://i.ibb.co/gFFcGJh/Brown-Vintage-Aesthetic-Scrapbook-Background-Instagram-Story.png)'}}>
                <ul className=" menu p-4">
                    {/* {
                        isAdmin ? <>
                            <li  className="text-[16px] my-[10px]">
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li  className="text-[16px] my-[10px]">
                                <NavLink to="/dashboard/addItems">
                                    <FaUtensils></FaUtensils>
                                    Add Items</NavLink>
                            </li>
                            <li  className="text-[16px] my-[10px]">
                                <NavLink to="/dashboard/manageItems">
                                    <FaList></FaList>
                                    Manage Items</NavLink>
                            </li>
                            <li  className="text-[16px] my-[10px]">
                                <NavLink to="/dashboard/bookings">
                                    <FaBook></FaBook>
                                    Manage Bookings</NavLink>
                            </li>
                            <li  className="text-[16px] my-[10px]">
                                <NavLink to="/dashboard/allUsers">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li  className="text-[16px] my-[10px]">
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome></FaHome>
                                        User Home</NavLink>
                                </li>
                                <li  className="text-[16px] my-[10px]">
                                    <NavLink to="/dashboard/reservation">
                                        <FaCalendar></FaCalendar>
                                        Reservation</NavLink>
                                </li>
                                <li  className="text-[16px] my-[10px]">
                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart </NavLink>
                                </li>
                                <li  className="text-[16px] my-[10px]">
                                    <NavLink to="/dashboard/review">
                                        <FaAd></FaAd>
                                        Add a Review</NavLink>
                                </li>
                                <li  className="text-[16px] my-[10px]">
                                    <NavLink to="/dashboard/bookings">
                                        <FaList></FaList>
                                        My Bookings</NavLink>
                                </li>
                            </>
                    } */}


{
    isAdmin && (
        <>
         <img className="h-[100px]" src="https://i.ibb.co/52x7MwJ/r13.png"></img>
                            <li  className="text-[20px] my-[10px] font-semibold">
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li  className="text-[20px] my-[10px] font-semibold">
                                <NavLink to="/dashboard/addItems">
                                    <FaUtensils></FaUtensils>
                                    Add Items</NavLink>
                            </li>
                            <li  className="text-[20px] my-[10px] font-semibold">
                                <NavLink to="/dashboard/manageItems">
                                    <FaList></FaList>
                                    Manage Items</NavLink>
                            </li>
                            <li  className="text-[20px] my-[10px] font-semibold">
                                <NavLink to="/dashboard/bookings">
                                    <FaBook></FaBook>
                                    Manage Bookings</NavLink>
                            </li>
                            <li  className="text-[20px] my-[10px] font-semibold">
                                <NavLink to="/dashboard/allUsers">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                        </>
    )
}


{
    isManager && (
        <>
        <img className="h-[100px]" src="https://i.ibb.co/52x7MwJ/r13.png"></img>
        <li  className="text-[20px] my-[10px] font-semibold">
            <NavLink to="/dashboard/managerHome">
                <FaHome></FaHome>
                Manager Home</NavLink>
        </li>
        <li  className="text-[20px] my-[10px] font-semibold">
            <NavLink to="/dashboard/listform">
                <FaUtensils></FaUtensils>
                Add Product</NavLink>
        </li>
        <li  className="text-[20px] my-[10px] font-semibold">
            <NavLink to="/dashboard/manageProduct">
                <FaList></FaList>
                Manage Product</NavLink>
        </li>
       
        <li  className="text-[20px] my-[10px] font-semibold">
            <NavLink to="/dashboard/allUserForManager">
                <FaUsers></FaUsers>
                All Users</NavLink>
        </li>
    </>
    )
}

{
    !isAdmin && !isManager && (
        <>

<img className="h-[100px]" src="https://i.ibb.co/52x7MwJ/r13.png"></img>
                                <li  className="text-[20px] my-[10px] font-semibold">
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome></FaHome>
                                        User Home</NavLink>
                                </li>
                                
                                <li  className="text-[20px] my-[10px] font-semibold">
                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart </NavLink>
                                </li>
                                <li  className="text-[20px] my-[10px] font-semibold">
                                    <NavLink to="/dashboard/addProductList">
                                        <FaShoppingCart></FaShoppingCart>
                                        Add Product List </NavLink>
                                </li>
                                <li  className="text-[20px] my-[10px] font-semibold">
                                    <NavLink to="/dashboard/payment">
                                        <FaCalendar></FaCalendar>
                                        Payment</NavLink>
                                </li>
                             
                            </>
    )
}

                   
                    <div className="divider bg-[#DAA06D] h-[2px]"></div>

                    <li  className="text-[20px] my-[10px] font-semibold">
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li  className="text-[20px] my-[10px] font-semibold">
                        <NavLink to="/order/salad">
                            <FaSearch></FaSearch>
                            Menu</NavLink>
                    </li>
                    <li  className="text-[20px] my-[10px] font-semibold">
                        <NavLink to="/order/contact">
                            <FaEnvelope></FaEnvelope>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
           
            <div className="flex-1 p-8">
                <Outlet></Outlet>
                
            </div>
            
        </div>
    
    );
};

export default Dashboard;