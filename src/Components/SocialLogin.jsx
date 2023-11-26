import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "./AuthProvider";
import UseAxiosPublic from "./UseAxiosPublic";


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const axiosPublic = UseAxiosPublic();

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users' , userInfo)
            .then(res => {
                console.log(res.data);
            })
        })
    }
    return (
        <div className=" ml-[250px] ">
            {/* <div className="divider"></div> */}
            <button onClick={handleGoogleSignIn} className="btn btn-ghost  ">
                <FaGoogle className="text-[20px] text-blue-600"></FaGoogle>
                <p>Sign In With Google</p>
            </button>
        </div>
    );
};

export default SocialLogin;