import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from './AuthProvider';
// import { Rating } from '@smastrom/react-rating';
// import { FaStar } from 'react-icons/fa';

const ListForm = () => {
    const {user} = useContext(AuthContext)

    const handleAddBook = event =>{
      event.preventDefault();
      const form = event.target;
      const shopname = form.shopname.value;
      const productname = form.productname.value;
      const quantity = form.quantity.value;
      const ownerEmail= form.ownerEmail.value;
      const location = form.location.value;
      const description = form.description.value;
      const image = form.image.value;
     // const category = form.category.value;
      const price = form.price.value;
      const profit = form.profit.value;
      const discount = form.discount.value;

      //price counting
      const buyingPrice = parseFloat(price);
      const tax = buyingPrice * 0.075; // 7.5% tax
      const profitPercentage = parseFloat(profit);
      const sellingPrice = buyingPrice + tax + profitPercentage;
  
      const users = {shopname,productname,quantity,ownerEmail,location,description,image,
        price : buyingPrice,
        profit : profitPercentage,
        discount,
        sellingPrice,
        shopId:user.shopId,
        saleCount:0,
      };

      console.log(users);
    
      fetch('http://localhost:5000/list',{
        method: 'POST',
        headers:{
          'content-type' : 'application/json'
        },
        body:JSON.stringify(users)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            title: 'Done!',
            text: 'Information added successfully',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        }
        form.reset();
      });
   }
  

    return (
        <div className='flex justify-between items-center'>
            {/* <div><img className='w-[500px] h-[750px]'  src='r15.jpg'></img></div> */}
   <div className="hero lg:w-[1300px] sm:w-[630px] h-[950px] mx-auto" style={{backgroundImage: 'url(https://i.ibb.co/KwHynh5/Beige-Floral-Minimalist-Linktree-Background-1.png)'}}>
  {/* <div className="hero-overlay bg-opacity-30 "></div> */}
  <div >
    <div >
    <form onSubmit={handleAddBook} className="grid lg:grid-cols-2 sm:grid-cols-1 lg:m-[50px] sm:m-[10px]">

             <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#411900] font-semibold">Shop Name</span>
                </label>
                <input type="text" placeholder="Type shop name" name="shopname" className="input input-bordered" style={{ border: "1px solid black" }} required />
              </div>

              <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#411900] font-semibold">Product Name</span>
                </label>
                <input type="text" placeholder="Type name" name="productname" className="input input-bordered " style={{ border: "1px solid black" }} required />
              </div>

              <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#411900] font-semibold">Product Quantity</span>
                </label>
                <input type="text" placeholder="Type quantity" name="quantity" className="input input-bordered " style={{ border: "1px solid black" }} required />
              </div>

              <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#411900] font-semibold">Product Owner Email</span>
                </label>
                <input type="email" placeholder="Type Owner Email" name="ownerEmail" defaultValue={user.email} className="input input-bordered" style={{ border: "1px solid black" }} required />
              </div> 

              <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#411900] font-semibold">Products Shop Location</span>
                </label>
                <input type="text" placeholder="Type Shop Location" name="location" className="input input-bordered" style={{ border: "1px solid black" }} required />
              </div> 

              <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#411900] font-semibold">Product Info</span>
                </label>
                <input type="text" placeholder="Type description" name="description" className="input input-bordered" style={{ border: "1px solid black" }} required />
              </div>

              {/* <div className="form-control m-[50px]">
                <label className="label">
                  <span className="label-text text-[20px] text-white font-semibold">Ratings</span>
                </label> 
             <Rating
                  emptySymbol={<FaStar color="gray" size={30} />}
                  fullSymbol={<FaStar color="gold" size={30} />}
                  initialRating={ratings}
                  onChange={(value) => setRatings(value)} 
                /> 
                 <input type="hidden" name="ratings" value={ratings} />
              </div> */}

              <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#411900] font-semibold">Product Logo / Image</span>
                </label>
                <input type="text" placeholder="Import Logo" name="image" className="input input-bordered" style={{ border: "1px solid black" }} required />
              </div>

              {/* <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#411900] font-semibold">Category</span>
                </label>
              <select type="text" name="category" className="select select-bordered w-full " style={{ border: "1px solid black" }} required>
                       <option disabled selected>Select Category</option>
                       <option>Donut</option>
                       <option>Cookies</option>
                       <option>Cake</option>
                       <option>Cup_Cakes</option>
                       <option>Choco_Drinks</option>
                    
              </select>
            </div> */}


              <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#411900] font-semibold">Price</span>
                </label>
                <input type="text" placeholder="Type Price" name="price" className="input input-bordered" style={{ border: "1px solid black" }} required />
              </div>

              <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#411900] font-semibold">Profit %</span>
                </label>
                <input type="text" placeholder="Type profit" name="profit" className="input input-bordered" style={{ border: "1px solid black" }} required />
              </div>

              <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#411900] font-semibold">Discount %</span>
                </label>
                <input type="text" placeholder="Type discount" name="discount" className="input input-bordered" style={{ border: "1px solid black" }} required />
              </div>


              <input type="submit" value="Add Product" className="btn bg-[#A0522D] text-white form-control lg:mt-[50px] sm:mt-[30px] w-[150px] h-[60px]  ml-[500px]"  style={{ border: "3px solid white" }}/>
             
        </form> 
        {/* <img className='lg:ml-[1200px] lg:mt-[-450px] sm:ml-[200px] sm:mt-[-100px]' src='https://i.ibb.co/rG3KrNm/1.png'></img> */}
    </div>
  </div>
</div>
        </div>
    );
};


export default ListForm;