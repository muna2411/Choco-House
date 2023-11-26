import { Helmet } from "react-helmet";
import AddToCart from "./AddToCart";
import Banner from "./Banner";
import Card from "./Card";
import Cardswiper from "./Cardswiper";
import Testimonial from "./Testimonial";
import Gridd from "./Gridd";
import About from "./About";




const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Choco House | Home</title>
            </Helmet>
           <Banner></Banner>
           {/* <A></A> */}
           <Cardswiper></Cardswiper>
           <Card></Card>
           <AddToCart></AddToCart>
           {/* <Featured></Featured> */}
           <About></About>
           <Testimonial></Testimonial>
           <Gridd></Gridd>
        </div>
    );
};

export default Home;