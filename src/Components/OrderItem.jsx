
import { Link} from 'react-router-dom';


const OrderItem = ({item}) => {
    const {name,image,price,recipe , _id} =item;
 
    
    // const handleAddToCart = food => {
    //   //console.log(food , user.email)
    //   if(user && user.email){
    //         const cartItem ={
    //           menuId: _id,
    //           email: user.email,
    //           name,
    //           image,
    //           price
    //         }
    //         axiosSecure.post('/carts' , cartItem)
    //         .then(res => {
    //           console.log(res.data)
    //           if(res.data.insertedId){
    //             Swal.fire({
    //               position: "top-end",
    //               icon: "success",
    //               title: `${name} added to your cart .`,
    //               showConfirmButton: false,
    //               timer: 1500
    //             });
    //             refetch();
    //           }
    //         })
    //   }
    //   else{
    //     Swal.fire({
    //       title: "Do you want to login?",
    //       text: "You are not login yet!",
    //       icon: "warning",
    //       showCancelButton: true,
    //       confirmButtonColor: "#3085d6",
    //       cancelButtonColor: "#d33",
    //       confirmButtonText: "Yes, login!"
    //     }).then((result) => {
    //       if (result.isConfirmed) {
    //        navigate('/login' , {state: {from: location}})
    //       }
    //     });
    //   }
    // }
    return (
        <div className="mx-auto mt-[100px]">
            <div className='w-[300px] m-[20px]'>
  <figure><img className='h-[400px] w-[300px]'  src={image} /></figure>
  {/* <p className='absolute right-0 w-[60px] h-[30px] mt-[10px]  mr-[10px] bg-black text-white text-center '>${price}</p>   */}
  <div className=" text-black mx-[20px] my-[20px]">     
    <h2 className="card-title font-a text-center mb-[20px]"><span className='text-orange-500'>Shop : </span> {name} </h2>
    {/* <p className='font-a mb-[20px]'>{price}$</p>  */}
    {/* <p>{recipe}</p> */}
    <div className="card-actions justify-end">
    {/* <button onClick={() => handleAddToCart(item)} className=" btn-outline border-[2px]  text-[#411900] w-[130px] h-[50px] text-[18px] mx-auto">Add to cart</button> */}
    <Link to={`/list?shop=${name}`} className='mx-auto'><button className="btn-outline border-[2px] text-[#411900] w-[140px] h-[50px] text-[18px]">Product List</button></Link>
    </div>
   
  </div>
 
</div>
        </div>
    );
};
export default OrderItem;