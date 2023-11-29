import { Link } from "react-router-dom";
import UseList from "./UseList";


const Payment = () => {
    const [list] = UseList();

    return (
        <div>
<p className="text-center font-a text-[40px]">Payment & Subscribe</p>
<div className="divider"></div>

            <div className="flex justify-around items-center bg-slate-300 h-[700px]">
      <div className="mx-auto mt-[100px] ">
            <div className='w-[300px] m-[20px] shadow-lg bg-white h-[500px] '>
            <figure><img className="h-[280px]" src="https://i.ibb.co/wSKYMGD/113.jpg"></img></figure>
                    
                  <h2 className="text-center text-[25px]">Pay <span className="text-orange-500">{parseInt("10", 10)}</span>$ to increase the limit to <span className="text-orange-500">200</span> </h2>
                  <Link to='/dashboard/doPayment?amount=10'><button className="btn-outline border-[2px] text-[#411900] w-[140px] h-[50px] text-[18px] ml-[80px] mt-[15px]">Buy</button></Link>
            </div>
        </div>

        <div className="mx-auto mt-[100px] ">
            <div className='w-[300px] m-[20px] shadow-lg bg-white h-[500px] '>
            <figure><img className="h-[280px]" src="https://i.ibb.co/6YgkFNQ/112.jpg"></img></figure>
                    
                  <h2 className="text-center text-[25px]">Pay <span className="text-orange-500">{parseInt("20", 10)}</span>$ to increase the limit to <span className="text-orange-500">450</span> </h2>
                  <Link to='/dashboard/doPayment?amount=20'>
          <button className="btn-outline border-[2px] text-[#411900] w-[140px] h-[50px] text-[18px] ml-[80px] mt-[15px]">Buy</button></Link>
            </div>
        </div>

        <div className="mx-auto mt-[100px] ">
            <div className='w-[300px] m-[20px] shadow-lg bg-white h-[500px] '>
            <figure><img className="h-[280px]" src="https://i.ibb.co/FgmMxB7/111.jpg"></img></figure>
                    
                  <h2 className="text-center text-[25px]">Pay <span className="text-orange-500">{parseInt("50", 10)}</span>$ to increase the limit to <span className="text-orange-500">1500</span> </h2>
                  <Link to='/dashboard/doPayment?amount=50'><button className="btn-outline border-[2px] text-[#411900] w-[140px] h-[50px] text-[18px] ml-[80px] mt-[15px]">Buy</button></Link>
            </div>
        </div>


        </div>
        </div>
    );
};

export default Payment;