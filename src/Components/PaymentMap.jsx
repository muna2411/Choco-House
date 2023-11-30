import { Link } from "react-router-dom";


const PaymentMap = ({item}) => {
    const {price,limit,image,_id} =item;
    return (
        <div>
              <div className="mx-auto mt-[100px] ">
            <div className='w-[300px] m-[20px] shadow-lg bg-white h-[500px] '>
            <figure><img className="h-[280px]" src={image}></img></figure>
                    
                  <h2 className="text-center text-[25px]">Pay <span className="text-orange-500">{price}</span>$ to increase the limit to <span className="text-orange-500">{limit}</span> </h2>
                  <Link to={`/dashboard/doPayment?shop=${price}`}>
          <button className="btn-outline border-[2px] text-[#411900] w-[140px] h-[50px] text-[18px] ml-[80px] mt-[15px]">Buy</button></Link>
            </div>
        </div>
 
        </div>
    );
};

export default PaymentMap;