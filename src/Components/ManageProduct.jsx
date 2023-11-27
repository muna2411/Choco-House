
import Swal from "sweetalert2";
import UseList from "./UseList";
import UseAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const ManageProduct = () => {
    const [list] = UseList();
    // const axiosSecure = UseAxiosSecure();
    // const {data: user = [] , refetch} = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/users')
    //         return res.data;
    //     }
    // })
    // const handleDelete = user =>{
    //   Swal.fire({
    //     title: "Are you sure?",
    //     text: "You won't be able to revert this!",
    //     icon: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#3085d6",
    //     cancelButtonColor: "#d33",
    //     confirmButtonText: "Yes, delete it!"
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    
    //       axiosSecure.delete(`/users/${user._id}`)
    //       .then(res =>{
    //         if(res.data.deletedCount > 0){
    //           refetch();
    //            Swal.fire({
    //            title: "Deleted!",
    //            text: "Your file has been deleted.",
    //            icon: "success"
    //       });
    //         }
    //       })
    //     }
    //   });
    // }


    return (
        // <div>
        //     {
        //         list.map(item => <ManageProductItem key={item._id} item={item}></ManageProductItem>)
        //     }   

<div>
  <p className="text-center text-[30px] font-a">Total Added Product is <span className="text-orange-500">{list.length}</span></p>
<div className="overflow-x-auto mt-[100px] ">
  <table className="table ">

    <thead >
      <tr className=" font-a text-[20px] ">
        <th>
         No.
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Shop Name</th>
        <th>Delete</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
    {
        list.map((item ,index)=> <tr key={item._id}>
            <th>
            { index + 1}
            </th>

            <td className="flex items-center avatar w-[180px] h-[150px]">
             <img src={item.image}/>
            </td>

            <td className="text-[18px]">
            {item.productname}
            </td>

            <td className="text-[18px]">
                {item.quantity} 
            </td>

            <td className="text-[18px] text-orange-500">
                {item.shopname} 
            </td>

            <th >
            {/* <button onClick={() => handleDelete(item)} className=" btn-ghost btn-lg"> */}
              <button className=" btn-ghost btn-lg">
                <p className="text-red-500">X</p>
              </button>
            </th>
            <th>
            <button  className=" btn-ghost btn-lg">
                <p className="text-blue-500">Update</p>
              </button>
            </th>
          </tr>)
    }

    </tbody>
    
  </table>
</div>
</div>


        // </div>
    );
};

export default ManageProduct;