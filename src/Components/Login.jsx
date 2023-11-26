import { useContext, useEffect} from 'react';
//import { loadCaptchaEnginge} from 'react-simple-captcha';
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SocialLogin from './SocialLogin';
//import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
const Login = () => {
  const {signIn} = useContext(AuthContext);
  //const [disabled , setDisabled] =useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const from =location.state?.from?.pathname || "/";

// useEffect(() => {
//     loadCaptchaEnginge(6); 
// },[])

const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    signIn(email,password)
    .then(result => {
      const user = result.user;
      console.log(user)
      Swal.fire({
        title: "Successfully Login Done",
        width: 600,
        padding: "3em",
        color: "#716add",
        backdrop: `
          rgba(0,0,123,0.4)
        `
      });
      navigate(from, {replace: true});
    })
}

// const handleValidateCaptcha = (e) =>{
//    const user_captcha_value = e.target.value;
//    if (validateCaptcha(user_captcha_value)==true) {
//     setDisabled(false);
// }

//    console.log(user_captcha_value)
// }

    return (
        <div>
          <Helmet>
            <title>Choco House | Login</title>
          </Helmet>
            
  <div >
  <div>
      <img className="w-[1100px]  mx-auto" src="https://i.ibb.co/mDpm1w2/13.png"></img>
    </div>
    <div className="w-[800px]  mx-auto mt-[-670px] ">
    <p className="text-[#411900] text-[50px] font-b  text-center mr-[80px] my-[20px]">Login</p>
      <form onSubmit={handleLogin} className="grid grid-cols-2">
        <div className="form-control w-[350px]">
          <label className="label">
            <span className="label-text text-[#411900]">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control w-[350px]">
          <label className="label">
            <span className="label-text text-[#411900]">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
         
        </div>
        {/* <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input onBlur={handleValidateCaptcha} type="text" name="captcha"  placeholder="Type the text above" className="input input-bordered" required />
        
        </div> */}
       <input type="submit" value="Login" className=" btn-outline border-[2px]  text-[#411900] w-[130px] h-[50px] text-[18px] mt-[50px] ml-[300px]" />
      </form>
      <p className="px-4 ml-[250px] mt-[20px]">Create an account <Link to="/signup" className='text-blue-700 underline text-[18px]'>Sign Up</Link></p>
      <p className="text-center mr-[80px] my-[20px]">OR</p>
      <SocialLogin></SocialLogin>
    </div>
  </div>

</div>
        
    );
};

export default Login;