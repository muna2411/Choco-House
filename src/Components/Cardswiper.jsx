
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useEffect, useRef } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Cardswiper = () => {
  useEffect(() =>{
    Aos.init();
},[])

  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };
  useEffect(() => {
      attemptPlay();
    }, []);

// https://i.ibb.co/WHTx34Q/2.png
    return (
        <div >
         <div className='divider my-[500px] bg-[#411900] h-[2px]' data-aos="fade-down"> <img className=' mx-auto  w-[500px] h-[500px] ' src='1.png'></img></div>
           <div className=' max-w-screen-l mx-auto '>
            
           {/* <div className=' items-center justify-around flex my-[80px]'>
                <p className='text-center text-[40px] mb-[50px] border-b-4 border-[#411900] font-b text-[#411900]'>WEEKLY BEST SELLERS</p>
            </div> */}
             <Swiper 
           
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-[60px]"
      >
        <SwiperSlide><img className='h-[650px]' src='card1.jpg'/>
        <h3 className='text-center text-[40px] text-[white] mt-[-90px] font-b'>Pastry</h3>
        </SwiperSlide>
        <SwiperSlide><img className='h-[650px]' src='card3.jpeg'/>
        <h3 className='text-center text-[40px] text-[white] mt-[-90px] font-b'>Cup Cakes</h3>
        </SwiperSlide>
        <SwiperSlide><img className='h-[650px]' src='c8.jpg'/>
        <h3 className='text-center text-[40px] text-[white] mt-[-90px] font-b'>Cookies</h3>
        </SwiperSlide>
        <SwiperSlide><img className='h-[650px]' src='c10.jpg'/>
        <h3 className='text-center text-[40px] text-[white] mt-[-90px] font-b'>Choco Bar</h3>
        </SwiperSlide>
        <SwiperSlide><img className='h-[650px]' src='c9.jpg'/>
        <h3 className='text-center text-[40px] text-[white] mt-[-90px] font-b'>Choco Drinks</h3>
        </SwiperSlide>
        <SwiperSlide><img className='h-[650px]' src='c-5.jpg'/>
        <h3 className='text-center text-[40px] text-[white] mt-[-90px] font-b'>Chocolate Roll</h3>
        </SwiperSlide>
        <SwiperSlide><img className='h-[650px]' src='card2.jpeg'/>
        <h3 className='text-center text-[40px] text-[white] mt-[-90px] font-b'>Donate</h3>
        </SwiperSlide>
      </Swiper>
           </div>
      <div className='grid lg:grid-cols-2 justify-around items-center my-[150px] sm:grid-cols-1 mx-[50px]'>
      <div className="relative " data-aos="fade-right">
  <img className='mb-[-150px] relative z-20 h-[300px]' src='https://i.ibb.co/T1XBcQm/4-removebg-preview.png' alt="Image 1" />
  <img className="relative z-10 h-[650px]  " src='https://i.ibb.co/sKcpq95/1.jpg' alt="Image 2" />
  {/* <img className="relative z-10 h-[700px]" src='https://i.ibb.co/J2BSt1S/5.jpg' alt="Image 2" /> */}
</div>


<div >
<video
data-aos="fade-left"
          style={{ Width: "100%",  height:"900px", margin: "0 auto" }}
          playsInline
          loop
          muted
          // controls
          alt="All the devices"
          
          src="/v2.mp4"
        
          ref={videoEl}
        />
       
</div>
        
      </div>
        </div>
    );
};

export default Cardswiper;