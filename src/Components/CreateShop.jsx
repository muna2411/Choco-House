import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from './AuthProvider';

const CreateShop = () => {

    const {user} = useContext(AuthContext)

    const handleAddBook = event =>{
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const ownerName = form.ownerName.value;
      const ownerEmail= form.ownerEmail.value;
      const location = form.location.value;
      const description = form.description.value;
      const image = form.image.value;
      const category = form.category.value;
      const price = form.price.value;
  
      const users = {name,ownerName,ownerEmail,location,description,image,category,price};
      console.log(user);
    
      fetch('http://localhost:5000/menu',{
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
            <div><img className='w-[500px] h-[750px]'  src='r15.jpg'></img></div>
   <div className="hero lg:w-[1300px] sm:w-[630px] h-[750px] " style={{backgroundImage: 'url(https://i.ibb.co/G75bsrG/Black-and-Chocolate-Simple-Chocolate-Day-Facebook-Post-1.png)'}}>
  {/* <div className="hero-overlay bg-opacity-30 "></div> */}
  <div >
    <div >
    <form onSubmit={handleAddBook} className="grid lg:grid-cols-2 sm:grid-cols-1 lg:m-[50px] sm:m-[10px]">
              <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#411900] font-semibold">Product Name</span>
                </label>
                <input type="text" placeholder="Type name" name="name" className="input input-bordered " style={{ border: "1px solid black" }} required />
              </div>

              <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#411900] font-semibold">Product Owner Name</span>
                </label>
                <input type="text" placeholder="Type Owner name" name="ownerName" defaultValue={user.name} className="input input-bordered"  style={{ border: "1px solid black" }} required />
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
                </label> */}
                {/* <Rating
                  emptySymbol={<FaStar color="gray" size={30} />}
                  fullSymbol={<FaStar color="gold" size={30} />}
                  initialRating={ratings}
                  onChange={(value) => setRatings(value)} 
                /> */}
                {/* <input type="hidden" name="ratings" value={ratings} />
              </div> */}

              <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#411900] font-semibold">Product Logo / Image</span>
                </label>
                <input type="text" placeholder="Import Logo" name="image" className="input input-bordered" style={{ border: "1px solid black" }} required />
              </div>

              <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
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
              </div>

              <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#411900] font-semibold">Price</span>
                </label>
                <input type="text" placeholder="Type Price" name="price" className="input input-bordered" style={{ border: "1px solid black" }} required />
              </div>

              <input type="submit" value="Create Shop" className="btn bg-[#A0522D] text-white form-control lg:mt-[50px] sm:mt-[30px] w-[150px] h-[60px]  ml-[500px]"  style={{ border: "3px solid white" }}/>
             
        </form> 
        {/* <img className='lg:ml-[1200px] lg:mt-[-450px] sm:ml-[200px] sm:mt-[-100px]' src='https://i.ibb.co/rG3KrNm/1.png'></img> */}
    </div>
  </div>
</div>
        </div>
    );
};

export default CreateShop;


