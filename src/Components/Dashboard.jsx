import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "./UseAdmin";



const Dashboard = () => {
    //const [cart] = UseCart();

    // TODO: get isAdmin value from the database
    const [isAdmin] =UseAdmin();

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-[#411900] text-white ">
                <ul className="menu p-4">
                    {
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
                    }
                   
                    <div className="divider bg-[#DAA06D] h-[2px]"></div>

                    <li  className="text-[16px] my-[10px]">
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li  className="text-[16px] my-[10px]">
                        <NavLink to="/order/salad">
                            <FaSearch></FaSearch>
                            Menu</NavLink>
                    </li>
                    <li  className="text-[16px] my-[10px]">
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