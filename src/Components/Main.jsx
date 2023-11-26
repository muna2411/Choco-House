
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const Main = () => {
    const location = useLocation();
    const noFooter = location.pathname.includes('login' , 'signup')
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {noFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;