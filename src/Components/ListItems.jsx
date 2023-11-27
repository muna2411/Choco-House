import { Link } from "react-router-dom";


const ListItems = ({p}) => {
    const { productname ,shopname, price,profit ,image,sellingPrice} = p;
    return (
        <div>

<div className="mx-auto mt-[100px]">
            <div className='w-[300px] m-[20px]'>
  <figure><img className='h-[400px] w-[300px]'  src={image} /></figure>
  {/* <p className='absolute right-0 w-[60px] h-[30px] mt-[10px]  mr-[10px] bg-black text-white text-center '>${price}</p>   */}
  <div className=" text-black mx-[20px] my-[20px]">   
  <p className=" font-a text-[20px]"><span className="text-orange-500">Shop :</span> {shopname}</p>  
    <h2 className="card-title font-a text-center mb-[20px]"><span className="text-orange-500">Product : </span> {productname} </h2>
    <p className=' text-[22px] mb-[20px] text-[#411900] font-semibold text-center'>{sellingPrice}$</p> 
    <div className="card-actions justify-end">
   
    <Link className='mx-auto'><button className="btn-outline border-[2px] text-[#411900] w-[140px] h-[50px] text-[18px]">Add to Cart</button></Link>
    </div>
   
  </div>
 
</div>
        </div>
         
        </div>
    );
};

export default ListItems;