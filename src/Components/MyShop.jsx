import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxiosSecure from "./UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import UseMenu from "./UseMenu";


const  MyShop = () => {
    const [menu, refetch] = UseMenu();
  const {user} = useContext(AuthContext)

    const axiosSecure = UseAxiosSecure();

    const handleDelete = id => {
       

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

                axiosSecure.delete(`/menu/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
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

    const filteredMenu = menu.filter((item) => item.ownerEmail === user.email);

    return (
        <div>
            <div className="flex justify-evenly mb-8">
               
            <h2 className="text-[30px] font-a mb-[50px]">Total Shop: {filteredMenu.length}</h2>
           

            </div>
            <div className="overflow-x-auto">
                <table className="table  w-full">
                    {/* head */}
                    <thead>
                        <tr className="font-a text-[20px] text-orange-500">
                            <th>
                                No
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu 
                            .filter(item => item.ownerEmail === user.email)
                            .map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="w-[150px] h-[150px]" >
                                                <img src={item.image}  />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.ownerEmail}
                                </td>
                                <td>${item.price}</td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
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

export default MyShop;