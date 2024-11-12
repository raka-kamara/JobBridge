import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import img from "../assets/img2.jpg";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";
import SocialLogin from "../components/Shared/SocialLogin";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useContext(AuthContext);

  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: 'User Login Successful.',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.error("Error logging in:", error);
        Swal.fire({
          title: 'Login Failed',
          text: error.message,
          icon: 'error',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
      });
  };
  

  return (
    <div>
      <Helmet>
        <title>JobBridge | Login</title>
      </Helmet>
      <div className="flex w-full max-w-sm mx-auto overflow-hidden my-12 bg-[#F1F8E9] shadow-lg lg:max-w-4xl rounded-3xl">
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2 ">
          <form onSubmit={handleSignIn} className="w-full max-w-md">
            <div className="flex items-center justify-center mt-6">
              <Link
                to="/login"
                className="w-1/3 pb-4 font-medium text-center text-[#2E7D32] border-b-2 border-[#2E7D32]"
              >
                sign in
              </Link>
              <Link
                to="/register"
                className="w-1/3 pb-4 font-medium text-center text-[#063840] border-b dark:border-[#063840]"
              >
                sign up
              </Link>
            </div>

            <div className="relative flex items-center mt-6">
              <input
                type="email"
                name="email"
                className="block w-full py-3 text-[#063840] bg-white border rounded-lg px-11 focus:border-[#2E7D32] focus:ring-[#2E7D32] focus:outline-none focus:ring-opacity-40"
                placeholder="Email address"
              />
            </div>

            <div className="relative flex items-center mt-4">
              <input
                type="password"
                name="password"
                className="block w-full px-10 py-3 text-[#063840] bg-white border rounded-lg focus:border-[#2E7D32] focus:ring-[#2E7D32] focus:outline-none focus:ring-opacity-40"
                placeholder="Password"
              />
            </div>

            <div className="mt-6 text-center">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#2E7D32] rounded-lg hover:bg-[#43A047] focus:outline-none focus:ring focus:ring-[#43A047] focus:ring-opacity-50"
              >
                Sign In
              </button>
            </div>
          </form>
          <div>
            <h3 className="text-center py-5 text-lg text-[#063840]">Or Login With</h3>
            <div className="flex justify-center pb-5 items-center gap-5">
              <SocialLogin />
            </div>
          </div>
        </div>
        <div
          className="hidden bg-cover lg:block lg:w-1/2"
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
