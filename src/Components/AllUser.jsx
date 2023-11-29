import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxiosSecure from "./useAxiosSecure";
import ReactPaginate from "react-paginate";

const AllUser = () => {
  const axiosSecure = UseAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const [currentPage, setCurrentPage] = useState(0);
  const usersPerPage = 3;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * usersPerPage;
  const currentPageData = users.slice(offset, offset + usersPerPage);

  const handleMakeAdmin = (user) => {
    axiosSecure
      .patch(`/users/admin/${user._id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} created successfully.`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Error making user admin:", error);
      });
  };

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/users/${user._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting user:", error);
          });
      }
    });
  };

  return (
    <div className="mx-[50px]">
      <p className="text-center text-[40px] my-[80px] divider font-b">Manage All Users</p>
      <div>
        <p className="uppercase font-a text-[30px]">Total Users : {users.length}</p>
      </div>

      <div className="overflow-x-auto mt-[50px]">
        <table className="table">
          <thead>
            <tr className="font-a text-[22px]">
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentPageData.map((user, index) => (
              <tr key={user._id}>
                <th>{offset + index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <th>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost btn-lg bg-orange-400"
                    >
                      <FaUser className="text-white "></FaUser>
                    </button>
                  )}
                </th>
                <th>
                  <button onClick={() => handleDelete(user)} className="btn btn-ghost btn-lg">
                    <FaTrashAlt className="text-red-500"></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ReactPaginate
      className="flex text-[30px] gap-11 text-center my-[100px] text-orange-500"
        previousLabel={"Previous -> "}
        nextLabel={" <- Next"}
        breakLabel={"...."}
        breakClassName={"break-me"}
        pageCount={Math.ceil(users.length / usersPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default AllUser;
