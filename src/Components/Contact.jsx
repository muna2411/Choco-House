import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaYoutube } from "react-icons/fa";

const Contact = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className="hero lg:w-full sm:w-[630px] h-[750px] " style={{backgroundImage: 'url(https://i.ibb.co/G75bsrG/Black-and-Chocolate-Simple-Chocolate-Day-Facebook-Post-1.png)'}}>
                    <div className="flex justify-around items-center ">
                        <div className="mx-[200px] text-[#411900]">
                            <img className="w-[500px] h-[400px]" src="https://i.ibb.co/dfvPC7W/pexels-fawzi-5163948.jpg"></img>
                            <p className="text-center text-[40px] font-a">Contact Us :</p>
                            <p className="flex justify-center items-center text-[25px]"><FaPhone></FaPhone> +01239845255</p>
                            <p className="flex justify-center items-center text-[25px]"><FaEnvelope></FaEnvelope> chocohouse@gmail.com</p>
                            <p className="text-center text-[30px] divider text-orange-500">Follow Us On : </p>
                           <div className="flex justify-around items-center">
                           <p className="flex justify-center items-center text-[25px]"><FaInstagram></FaInstagram> choco_house</p>
                           <p className="flex justify-center items-center text-[25px]"><FaYoutube></FaYoutube> Choco House</p>
        
                           </div>
                           <p className="flex justify-center items-center text-[25px]"><FaFacebook></FaFacebook> Choco House Bakery</p>
                        </div>
                        <div className="vertical-divider" style={{ borderLeft: '2px solid #411900', height: '600px' }}></div>

                       
                        <div className="mx-[200px]">
                       
                            <img src="https://i.ibb.co/52x7MwJ/r13.png"></img>
                            <img className="w-[500px] h-[400px]" src="https://i.ibb.co/GdKLjj3/pexels-jana-ohajdova-10594796.jpg"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
