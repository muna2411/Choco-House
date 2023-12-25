import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateItem = () => {
    const item = useLoaderData();
    console.log(item)

    const { _id, productname,quantity, location,  image ,description ,price,profit,discount} = item;
    
    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;
      const productname = form.productname.value;
      const quantity = form.quantity.value;
      const location = form.location.value;
      const description = form.description.value;
      const image = form.image.value;
      const price = form.price.value;
      const profit = form.profit.value;
      const discount = form.discount.value;


        const updated = { _id, productname,quantity, location,description,  image, price, profit,discount}

        console.log(updated);

  
        fetch(`https://returant-server.vercel.app/list/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updated)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Data Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
                form.reset();
            })
    }




    return (

        <div className='flex justify-between items-center'>
            {/* <div><img className='w-[500px] h-[750px]'  src='r15.jpg'></img></div> */}
   <div className="hero lg:w-[1300px] sm:w-[630px] h-[800px] mx-auto" style={{backgroundImage: 'url(https://i.ibb.co/YRBkFth/Chocolate-Simple-Flower-Phone-Wallpaper.png)'}}>
  {/* <div className="hero-overlay bg-opacity-30 "></div> */}
  <div >
    <div >
          <form onSubmit={handleUpdateProduct} className="grid lg:grid-cols-2 sm:grid-cols-1 lg:m-[50px] sm:m-[10px]">
    
          <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                         <label className="label">
                           <span className="label-text text-[20px] text-[#A0522D] font-semibold">Product Name</span>
                         </label>
                         <input type="text" placeholder="Type name" name="productname" defaultValue={productname} className="input input-bordered "  required />
            </div>
    
            <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                         <label className="label">
                           <span className="label-text text-[20px] text-[#A0522D] font-semibold">Quantity</span>
                         </label>
                         <input type="text" placeholder="Type quantity" name="quantity" defaultValue={quantity} className="input input-bordered"   required />
                       </div>
    
            <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                         <label className="label">
                           <span className="label-text text-[20px] text-[#A0522D] font-semibold">Location</span>
                         </label>
                         <input type="text" placeholder="Type location" name="location" defaultValue={location} className="input input-bordered"   required />
                       </div>

            <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                         <label className="label">
                           <span className="label-text text-[20px] text-[#A0522D] font-semibold">Description</span>
                         </label>
                         <input type="text" placeholder="Type description" name="description" defaultValue={description} className="input input-bordered"   required />
                       </div>


            <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                         <label className="label">
                           <span className="label-text text-[20px] text-[#A0522D] font-semibold">Price</span>
                         </label>
                         <input type="text" placeholder="Type price" name="price" defaultValue={price} className="input input-bordered"   required />
                       </div>

            <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                         <label className="label">
                           <span className="label-text text-[20px] text-[#A0522D] font-semibold">Profit</span>
                         </label>
                         <input type="text" placeholder="Type profit" name="profit" defaultValue={profit} className="input input-bordered"   required />
                       </div>

            <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                         <label className="label">
                           <span className="label-text text-[20px] text-[#A0522D] font-semibold">Discount</span>
                         </label>
                         <input type="text" placeholder="Type discount" name="discount" defaultValue={discount} className="input input-bordered"   required />
                       </div>
    
    
            <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                         <label className="label">
                           <span className="label-text text-[20px] text-[#A0522D]font-semibold">Image</span>
                         </label>
                         <input type="text" placeholder="Import Image" name="image" defaultValue={image} className="input input-bordered"  required />
            </div>
    
          
           
            <input type="submit" value="Submit" className="btn bg-[#A0522D] text-white form-control lg:mt-[50px] sm:mt-[30px] w-[150px] h-[60px]  ml-[500px]"  style={{ border: "3px solid white" }} />
                   

          </form>
        </div>
      </div>
    </div>
                 </div>
             );
         };

export default UpdateItem;