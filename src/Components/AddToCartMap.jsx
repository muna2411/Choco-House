import { Link } from "react-router-dom";


const AddToCartMap = ({item}) => {
    const {name,image,price,recipe} =item;
    return (
        <div className="mx-auto mt-[100px]">
            <div className="  h-[500px]  hero ">
  <figure><img className="h-[530px] w-96" src={image} /></figure>
  <div className=" text-white mt-[380px] hero-overlay bg-opacity-30 h-[150px] w-96">
    <h2 className="text-[30px] text-center text-white font-a">{name}</h2>
    {/* <p>{recipe}</p> */}
    <div className="card-actions justify-center my-[10px]">
   <Link to={`/order/Donut`}> <button className=" btn-outline border-[2px]  text-white w-[150px] h-[60px] text-[18px] hover:bg-[#411900]">See More</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default AddToCartMap;