import { useLocation } from "react-router-dom";
import UseList from "./UseList";
import { useEffect, useState } from "react";
import jsPDF from "jspdf";

const CheckOut = () => {
  const [list] = UseList();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const shopName = queryParams.get('id');

  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const filteredItems = list.filter(item => item._id === shopName);
    setFilteredList(filteredItems);
  }, [list, shopName]);

  const handleGetPaid = () => {
    const pdfDoc = new jsPDF();

    filteredList.forEach((item, index) => {
      pdfDoc.text(`Product ID: ${item._id}`, 10, index * 20 + 10);
      pdfDoc.text(`Product: ${item.productname}`, 10, index * 20 + 20);
      pdfDoc.text(`Shop: ${item.shopname}`, 10, index * 20 + 30);
      pdfDoc.text(`Discount: ${item.discount}%`, 10, index * 20 + 40);
      pdfDoc.text(`Selling Price: ${item.sellingPrice}$`, 10, index * 20 + 50);

    });

    pdfDoc.save("receipt.pdf");
  };

  return (
    <div>
      {filteredList.map((item, index) => (
        <div key={index}>
          <div className="hero lg:w-[1300px] sm:w-[630px] h-[800px] " style={{backgroundImage: 'url(https://i.ibb.co/BPb88fr/6.png)'}}>
            <div className="flex justify-around items-center gap-10">
              <div className="w-[400px] h-[500px] border-[2px] p-[50px] border-black ">
                <img className="w-[200px] h-[250px] mx-auto" src={item.image} alt={`Product ${index + 1}`}></img>
                <div className="mt-[20px]">
                  <p className="text-black text-[20px]">ID: {item._id}</p>
                  <p className="text-black text-[20px]">Product: {item.productname}</p>
                  <p className="text-black text-[20px]">Shop: {item.shopname}</p>
                  <p className="text-black text-[20px]">Discount: {item.discount}%</p>
                  <p className="text-black text-[20px]">Selling Price: {item.sellingPrice}$</p>
                </div>
              </div>
              <div>
                <button onClick={handleGetPaid} className="btn-outline border-[2px] text-[#411900] w-[140px] h-[50px] text-[18px] ">Get Paid</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckOut;
