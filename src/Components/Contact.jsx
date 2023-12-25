import { useRef } from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaYoutube } from "react-icons/fa";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';

const Contact = () => {


    const emailAddress = 'nurnahar.muna.2411@gmail.com';
    const linkedIn = 'https://www.linkedin.com/in/nur-nahar-muna-0084142a4/';
    const location = 'https://www.google.com/maps/place/17+No.+West+Bakalia+Ward,+Chattogram/@22.3516772,91.8445535,15z/data=!4m6!3m5!1s0x30ad276c6e2b0f99:0x56129b01088360bd!8m2!3d22.35016!4d91.8440259!16s%2Fg%2F11dd_tdbv0?entry=ttu'


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_qeutjdp', 'template_kag4xnw', form.current, 'rPbZzwJKv6ivVb0F7')
        .then((result) => {
            console.log(result.text);
            Swal.fire({
              title: "Successfully Send",
              showClass: {
                popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `
              },
              hideClass: {
                popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `
              }
            });
        }, (error) => {
            console.log(error.text);
        });
    };
  



    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className="hero lg:w-full sm:w-[630px] h-[750px] " style={{backgroundImage: 'url(https://i.ibb.co/G75bsrG/Black-and-Chocolate-Simple-Chocolate-Day-Facebook-Post-1.png)'}}>
                    <div className="flex justify-around items-center ">
                        <div className="mx-[200px] text-[#411900]">
                            <img className="w-[500px] h-[400px]" src="https://i.ibb.co/dfvPC7W/pexels-fawzi-5163948.jpg"></img>
                            <p className="text-center text-[40px] font-a">Contact Us :</p>
                            
                            <a href={`mailto:${emailAddress}`} className=" text-[18px] flex items-center">
    <FaEnvelope size={40}   className=" w-[45px] " />
      {emailAddress}
    </a>
   
                            <p className="text-center text-[30px] divider text-orange-500">Follow Us On : </p>
                           <div className="flex justify-around items-center">
                           <a href={linkedIn} className="ml-[10px] text-[18px] flex items-center">
    <FaLinkedin size={40}className=" w-[45px]"/>
      Nur Nahar Muna
    </a>
                         
        
                           </div>
                           <a href={location} target="_blank" rel="noopener noreferrer" className="ml-[10px] text-[18px] flex items-center">
    <FaMapMarkerAlt size={40}  className=" w-[45px]"/>
      West Bakolia, Chittagong, Bangladesh.
    </a>
                        </div>
                        

                        
                        <div className="vertical-divider" style={{ borderLeft: '2px solid #411900', height: '600px' }}></div>

                       
                        <div className="mx-[200px]">
                             
                             <p className="text-[40px] font-a text-orange-500">Send Message : </p>

                        <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 ">
      <label className="">Name</label>
      <input className="lg:w-[400px] md:w-[400px] sm:w-[300px] h-[50px] my-[20px]" style={{border: '2px solid black'}} type="text" name="user_name" required/>
      <label>Email</label>
      <input className="lg:w-[400px] md:w-[400px] sm:w-[300px] h-[50px] my-[20px]" style={{border: '2px solid black'}} type="email" name="user_email" required/>
      <label>Message</label>
      <textarea className="lg:w-[400px] md:w-[400px] sm:w-[300px] h-[100px] my-[20px]" style={{border: '2px solid black'}} name="message" required/>
      <input className="w-[130px] h-[50px] bg-[#411900] text-white lg:ml-[270px] md:ml-[270px] sm:ml-[160px]" style={{border: '2px solid black'}} type="submit" value="Send" />
    </form>
                       
                            {/* <img src="https://i.ibb.co/52x7MwJ/r13.png"></img> */}
                            {/* <img className="w-[500px] h-[400px]" src="https://i.ibb.co/GdKLjj3/pexels-jana-ohajdova-10594796.jpg"></img> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
