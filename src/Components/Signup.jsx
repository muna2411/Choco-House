import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "./AuthProvider";
import UseAxiosPublic from "./UseAxiosPublic";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import SocialLogin from "./SocialLogin";

const Signup = () => {
    const {
        register,
        handleSubmit,
        reset, 
        formState: { errors },
      } = useForm();
      const {createUser, updateUserProfile} = useContext(AuthContext);
      const navigate = useNavigate();
      const axiosPublic = UseAxiosPublic();
    
      const onSubmit = (data) => {
        console.log(data);
        createUser(data.email , data.password)
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser);
          updateUserProfile(data.name , data.photoURL)
          .then(() =>{
            const userInfo = {
              name: data.name,
              email: data.email
            }
            axiosPublic.post('/users' , userInfo)
            .then(res =>{
              if(res.data.insertedId){
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "user created successfully.",
                  showConfirmButton: false,
                  timer: 1500
                });
                navigate('/');
              }
            })
            reset();
          })
          .catch(error => console.log(error))
        })
    }
   // console.log(watch("example")) 

    return (
        <div>
          <Helmet>
            <title>Choco House | Sign Up</title>
          </Helmet>
            <div >
  <div className="mb-[130px]">
    <div>
      <img className="w-[1100px]  mx-auto" src="https://i.ibb.co/mDpm1w2/13.png"></img>
    </div>
    <div className="w-[800px]  mx-auto mt-[-670px] ">
    {/* <p className="text-[#411900] text-[50px] font-b text-center">Choco House</p> */}
    <p className="text-[#411900] text-[50px] font-b  text-center mr-[80px] my-[20px]">Sign Up</p>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2">
      <div className="form-control w-[350px]">
          <label className="label">
            <span className="label-text text-[#411900]">Name</span>
          </label>
          <input type="text" {...register("name" , { required: true })} name="name" placeholder="name" className="input input-bordered" />
          {errors.name && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control  w-[350px]">
          <label className="label">
            <span className="label-text text-[#411900]">PhotoURL</span>
          </label>
          <input type="text" {...register("photoURL" , { required: true })}  placeholder="photoURL" className="input input-bordered" />
          {errors.photoURL && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control  w-[350px]">
          <label className="label">
            <span className="label-text text-[#411900]">Email</span>
          </label>
          <input type="email" {...register("email")} name="email" placeholder="email" className="input input-bordered" />
          {errors.email && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control  w-[350px]">
          <label className="label">
            <span className="label-text text-[#411900]">Password</span>
          </label>
          <input type="password" {...register("password" , {required:true ,
            minLength: 6 ,
            maxLength: 20 ,
            pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/,
            })} 
          name="password" placeholder="password" className="input input-bordered"  />
          {errors.password?.type === 'required' && <p className="text-red-600">This field is required</p>}
          {errors.password?.type === 'minLength' && <p className="text-red-600">password must be minimum 6 characters</p>}
          {errors.password?.type === 'maxLength' && <p className="text-red-600">password must be less than 20 characters</p>}
          {errors.password?.type === 'pattern' && (
           <p className="text-red-600">
           Password must contain at least one uppercase letter and one special character
          </p>
          )}
          
        </div>
        {/* <div className="form-control mt-6 "> */}
        <input type="submit" value="Sign Up" className=" btn-outline border-[2px]  text-[#411900] w-[130px] h-[50px] text-[18px] mt-[50px] ml-[300px]" />
          
        {/* </div> */}
      </form>
      <p className="px-4 ml-[230px] mt-[20px]">Already have an account ? <Link to="/login" className='text-blue-700 underline text-[18px]'>Login</Link></p>
      <p className="text-center mr-[80px] my-[20px]">OR</p>
      <SocialLogin></SocialLogin>
    </div>
  </div>
</div>
        </div>
    );
};

export default Signup;