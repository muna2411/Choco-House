import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
// import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import Aos from 'aos'
import 'aos/dist/aos.css'



const Testimonial = () => {

  useEffect(() =>{
    Aos.init();
},[])

    const [reviews,setReviews] =useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data =>{
            setReviews(data)
        })
    },[])

    //navigation={true} modules={[Navigation]}
    return (
        <div className="max-w-screen-xl mx-auto">
             <div className=' items-center justify-around flex my-[80px]'>
                <p className='text-center text-[40px] mt-[50px] border-b-4 border-[#411900] font-b text-[#411900]' data-aos="fade-down">Our Reviews</p>
            </div>
              <Swiper  
              
              slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper ">
       {
        reviews.map(review => <SwiperSlide key={review._id}>
<div className="flex justify-center items-center ">

        <div className="bg-gradient-to-b from-[#DAA06D]  ... lg:mx-[50px] my-[100px] text-center flex flex-col items-center  w-[300px] lg:h-[350px] sm:h-[450px] glass">
        <img className="mt-[-60px]"
  style={{ borderRadius: "50%" , width:"120px", height:"130px" }}
  src={review.image}
  alt="Description"
/>


  <p className="text-[30px] text-[#411900]">{review.name}</p>
  <div className=" text-white">
  <Rating
  className="mx-auto my-[20px]"
      style={{ maxWidth: 120 }}
      value={review.rating}
      readOnly
    />
    <p className="text-[16px] text-black mx-[10px] text-left">{review.details}</p>
  </div>
        </div> 
</div>
        </SwiperSlide>)
       }
      </Swiper>
      <div className="m-[80px]">
      <p className="text-[#411900] text-[50px] font-b text-center" data-aos="fade-right">Choco House</p>
      <p className="text-[#CD7F32] text-[70px] uppercase font-a text-center" data-aos="fade-left">Cake & Bake Collection</p>
      </div>
        </div>
    );
};

export default Testimonial;