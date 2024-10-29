import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const handleGoogleSignIn = () => {
        signInWithGoogle().then((result) => {
          console.log(result.user);
          const userInfo = {
            email: result.user?.email,
            name: result.user?.displayName,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            console.log(res.data);
            navigate(from, { replace: true });
          });
        });
      };


    return (
        <div className="">
        <div className="divider"></div>
        <div>
            <button onClick={handleGoogleSignIn} className="flex items-center gap-1 btn bg-[#FAF4E4] text-lg text-green-800">
                <FaGoogle className="mr-2"></FaGoogle>
                Google
            </button>
        </div>
    </div>
    );
};

export default SocialLogin;