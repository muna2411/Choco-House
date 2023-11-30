
//import Swal from "sweetalert2";
import UseMenu from "./UseMenu";
//import UseAxiosSecure from "./useAxiosSecure";
import { Link } from "react-router-dom";

const ManageShop = () => {
     
    const [menu] = UseMenu();
    //const [menu, , refetch] = useMenu();
       // const axiosSecure = UseAxiosSecure();
    
        // const handleDeleteItem = (item) => {
        //     Swal.fire({
        //         title: "Are you sure?",
        //         text: "You won't be able to revert this!",
        //         icon: "warning",
        //         showCancelButton: true,
        //         confirmButtonColor: "#3085d6",
        //         cancelButtonColor: "#d33",
        //         confirmButtonText: "Yes, delete it!"
        //     }).then(async (result) => {
        //         if (result.isConfirmed) {
        //             const res = await axiosSecure.delete(`/list/${item._id}`);
        //              console.log(res.data);
        //             if (res.data.deletedCount > 0) {     
        //                 refetch();
        //                 Swal.fire({
        //                     position: "top-end",
        //                     icon: "success",
        //                     title: `${item.productname} has been deleted`,
        //                     showConfirmButton: false,
        //                     timer: 1500
        //                 });
        //             }
        //         }
        //     });
        // }

    return (
        <div>
  <p className="text-center text-[30px] font-a">Total Added Product is <span className="text-orange-500">{menu.length}</span></p>
<div className="overflow-x-auto mt-[100px] ">
  <table className="table ">

    <thead >
      <tr className=" font-a text-[20px] text-orange-500">
        <th>
         No.
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Description</th>
        <th>Limit</th>
        <th>Send Notice</th>
      </tr>
    </thead>
    <tbody>
    {
        menu.map((item ,index)=> <tr key={item._id}>
            <th>
            { index + 1}
            </th>

            <td className="flex items-center avatar w-[180px] h-[150px]">
             <img src={item.image}/>
            </td>

            <td className="text-[18px]">
            {item.name}
            </td>

            <td className="text-[18px]">
                {item.description} 
            </td>

            <td className="text-[18px]">
               3 
            </td>

            
            <th>
           <Link >
              <button  className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Notice</button>
              </Link>
          
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button> */}
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <img className="w-[250px] mx-auto" src="https://i.ibb.co/z4GVqgn/22-removebg-preview-1.png"></img>

    <div className="modal-action">
      <form className="flex-col mx-auto">
       <div className="form-control  lg:w-[300px] sm:w-[500px]">
       <label className="label">
                  <span className="label-text text-[20px] text-[#411900] font-semibold">Notice</span>
        </label>
        <input type="text" placeholder="Type Notice" className="input input-bordered  w-full max-w-xs" />
       </div>
        <input type="submit" value="Send" className="btn-outline border-[2px] text-[#411900] w-full max-w-xs h-[45px] text-[18px]  mt-[30px]"/>
      </form>
    </div>
  </div>
</dialog>
           
            </th>
          </tr>)
    }

    </tbody>
    
  </table>
</div>
</div>
    );
};

export default ManageShop;