import { useQuery } from "@tanstack/react-query";

import { FaTrashAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxiosSecure from "./useAxiosSecure";


const AllUser = () => {
    const axiosSecure = UseAxiosSecure();
    const {data: users = [] , refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })


    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} created successfully.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    const handleDelete = user =>{
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
      
            axiosSecure.delete(`/users/${user._id}`)
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
        <div className="mx-[50px]">
             <p className="text-center text-[40px] my-[80px] divider font-b">Manage All Users</p>
           <div>
            <p className="uppercase font-a text-[30px]">Total Users : {users.length}</p>
           </div>

           <div className="overflow-x-auto ">
  <table className="table">

    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>

{
    users.map((user , index) =>  <tr key={user._id}>
       <th>
            { index + 1}
            </th>
        <td>
         {user.name}
        </td>
        <td>
          {user.email}
        </td>
        <th>
            {
                user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-lg bg-orange-400">
                <FaUser className="text-white " ></FaUser>
                </button>
            }
        </th>
        <th>
            <button onClick={() => handleDelete(user)} className="btn btn-ghost btn-lg">
            <FaTrashAlt className="text-red-500"></FaTrashAlt>
            </button>
        </th>
      </tr>
)
}
    
     

    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default AllUser;