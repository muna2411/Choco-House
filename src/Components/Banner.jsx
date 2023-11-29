import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="text-center lg:mt-[0px] sm:mt-[150px]">
                <Swiper
     spaceBetween={30}
     centeredSlides={true}
     autoplay={{
       delay: 3000,
       disableOnInteraction: false,
     }}
     pagination={{
       clickable: true,
     }}
     navigation={true}
     modules={[Autoplay, Pagination, Navigation]}
     className="mySwiper"
    >
            <SwiperSlide>
            <div className="lg:h-[850px] sm:h-[750px] ">
                    <img className="lg:h-[850px] sm:h-[750px] lg:w-full"  src="r18.jpg" />
                    <div className="absolute left-[500px] top-[300px] transform -translate-x-1/2 -translate-y-1/2 text-left ">
                         <p className="text-white text-[50px] font-b">Choco House</p>
                         <p className="text-[#CD7F32] text-[70px] uppercase font-a">Cake & Roll</p>
                         <p className="text-white text-[20px] text-left  mt-[20px] font-medium">Indulge in the sweet symphony of flavors at Choco House Cake Shop,<br/> where every slice is a masterpiece crafted with love and passion</p>
                         <button className="w-[180px] h-[60px] hover:bg-[#7B3F00]  border-4 text-white  mt-[20px] text-[18px]"><Link to='/order/Donut'>Shop Now</Link></button>
                         {/* <Link to='/createShop'>Create Shop</Link> */}
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>  
                <div className="lg:h-[850px] sm:h-[750px] ">
                    <img className="lg:h-[850px] sm:h-[750px] lg:w-full" src="r11.jpg" />
                    <div className="absolute left-[500px] top-[300px] transform -translate-x-1/2 -translate-y-1/2 text-left ">
                         <p className="text-white text-[50px] font-b">Choco House</p>
                         <p className="text-[#CD7F32] text-[70px] uppercase font-a">Treat Cake</p>
                         <p className="text-white text-[20px] text-left  mt-[20px] font-medium">Indulge in the sweet symphony of flavors at Choco House Cake Shop,<br/> where every slice is a masterpiece crafted with love and passion</p>
                         <button className="w-[180px] h-[60px] hover:bg-[#7B3F00]  border-4 text-white  mt-[20px] text-[18px]"><Link to='/order/Donut'>Shop Now</Link></button>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="lg:h-[850px] sm:h-[750px] ">
                    <img className="lg:h-[850px] sm:h-[750px] lg:w-full" src="r10.jpg" />
                    <div className="absolute left-[500px] top-[300px] transform -translate-x-1/2 -translate-y-1/2 text-left ">
                         <p className="text-white text-[50px] font-b">Choco House</p>
                         <p className="text-[#CD7F32] text-[70px] uppercase font-a">The Finest</p>
                         <p className="text-white text-[20px] text-left  mt-[20px] font-medium">Indulge in the sweet symphony of flavors at Choco House Cake Shop,<br/> where every slice is a masterpiece crafted with love and passion</p>
                         <button className="w-[180px] h-[60px] hover:bg-[#7B3F00]  border-4 text-white  mt-[20px] text-[18px]"><Link to='/order/Donut'>Shop Now</Link></button>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="lg:h-[850px] sm:h-[750px] ">
                   <img className="lg:h-[850px] sm:h-[750px] lg:w-full" src="r12.jpg" /> 
                        <div className="absolute left-[500px] top-[300px] transform -translate-x-1/2 -translate-y-1/2 text-left ">
                         <p className="text-white text-[50px] font-b">Choco House</p>
                         <p className="text-[#CD7F32] text-[70px] uppercase font-a">Cake My Day</p>
                         <p className="text-white text-[20px] text-left  mt-[20px] font-medium">Indulge in the sweet symphony of flavors at Choco House Cake Shop,<br/> where every slice is a masterpiece crafted with love and passion</p>
                         <button className="w-[180px] h-[60px] hover:bg-[#7B3F00]  border-4 text-white  mt-[20px] text-[18px]"><Link to='/order/Donut'>Shop Now</Link></button>
                        </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="lg:h-[850px] sm:h-[750px] ">
                    <img className="lg:h-[850px] sm:h-[750px] lg:w-full" src="r19.jpg" />
                    <div className="absolute left-[500px] top-[300px] transform -translate-x-1/2 -translate-y-1/2 text-left ">
                         <p className="text-white text-[50px] font-b">Choco House</p>
                         <p className="text-[#CD7F32] text-[70px] uppercase font-a">Chocolate</p>
                         <p className="text-white text-[20px] text-left  mt-[20px] font-medium">Indulge in the sweet symphony of flavors at Choco House Cake Shop,<br/> where every slice is a masterpiece crafted with love and passion</p>
                         <button className="w-[180px] h-[60px]   border-4 text-white  mt-[20px] text-[18px] hover:bg-[#7B3F00]"><Link to='/order/Donut'>Shop Now</Link></button>
                    </div>
                </div>
                </SwiperSlide>
                
                </Swiper>
        </div>
    );
};

export default Banner;