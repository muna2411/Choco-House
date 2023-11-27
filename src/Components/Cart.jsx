import Swal from "sweetalert2";
import UseCart from "./UseCart";
import {FaTrashAlt} from "react-icons/fa";
import UseAxiosSecure from "./useAxiosSecure";

const Cart = () => {
    const [cart , refetch] = UseCart();
    const totalPrice = cart.reduce( (total , item)=> total + parseInt(item.price) , 0);
    const axiosSecure = UseAxiosSecure(); 

const handleDelete = id =>{
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {

      axiosSecure.delete(`/carts/${id}`)
      .then(res =>{
        if(res.data.deletedCount > 0){
          refetch();
           Swal.fire({
           title: "Deleted!",
           text: "Your file has been deleted.",
           icon: "success"
      });
        }
      })
    }
  });
}

    return (
        <div>
        <div className="flex justify-around items-center">
            <p className="uppercase font-a text-[30px]">Total Orders : {cart.length}</p>
            <p className="uppercase font-a text-[30px]">Total Price : {totalPrice} $</p>
            <button className="btn">Pay</button>
        </div>
<div className="divider"></div>
        <div className="overflow-x-auto mt-[100px] mx-[50px]">
  <table className="table">

    <thead>
      <tr className=" font-a text-[25px]">
        <th>
         No.
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
        cart.map((item ,index)=> <tr key={item._id}>
            <th>
            { index + 1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className=" w-[200px] h-[180px]">
                    <img src={item.image}/>
                  </div>
                </div>
               
              </div>
            </td>
            <td className="text-[20px]">
            {item.name}
            </td>
            <td className="text-[20px]">{item.price} $</td>
            <th>
              <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg">
                <FaTrashAlt className="text-red-500"></FaTrashAlt>
              </button>
            </th>
          </tr>)
    }

    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default Cart;