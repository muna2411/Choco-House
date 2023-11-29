import { useState, useEffect } from "react";
import UseList from "./UseList";
import { Link } from "react-router-dom";

const SalesColection = () => {
  const [list, , refetch] = UseList();
  const [searchInput, setSearchInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (searchInput === '') {
      setFilteredData(list);
    } else {
      const filteredList = list.filter(item => item._id.toLowerCase() === searchInput.toLowerCase());
      setFilteredData(filteredList);
    }
  }, [list, searchInput]);

  const handleSearch = () => {
    const filteredList = list.filter(item => item._id.toLowerCase() === searchInput.toLowerCase());
    setFilteredData(filteredList);
  };

  const resetSearch = () => {
    setSearchInput('');
    refetch();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type Product ID"
        className="input input-bordered input-md w-full max-w-xs"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <Link className='mx-auto'>
        <button
          className="btn-outline border-[2px] text-[#411900] w-[140px] h-[50px] text-[18px]"
          onClick={handleSearch}
        >
          Search
        </button>
      </Link>
      <button
        className="btn-outline border-[2px] text-[#411900] w-[140px] h-[50px] text-[18px]"
        onClick={resetSearch}
      >
        Reset
      </button>

      <div className="overflow-x-auto mt-[100px] ">
        <table className="table ">
          <thead>
            <tr className="font-a text-[20px] text-orange-500">
              <th>No.</th>
              <th>ID</th>
              <th>Name</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Discount</th>
              <th>SellingPrice</th>
              <th>Sold to Customer</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td className="text-[18px] text-orange-500">{item._id}</td>
                <td className="text-[17px]">{item.productname}</td>
                <td className="flex items-center avatar w-[100px] h-[80px]">
                  <img src={item.image} alt={item.productname} />
                </td>
                <td className="text-[18px]">{item.quantity}</td>
                <td className="text-[18px] ">{item.discount}%</td>
                <td className="text-[18px] ">{item.sellingPrice}$</td>
                <th>
                  <Link to={`/dashboard/checkOut?id=${item._id}`}>
                    <button className=" btn-ghost btn-lg">
                      <p className="text-green-700">Sold</p>
                    </button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesColection;