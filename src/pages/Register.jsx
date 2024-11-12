import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../components/Shared/SocialLogin";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";
import img from "../assets/img2.jpg";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("image", data.image[0]);
      const imageRes = await axiosPublic.post(image_hosting_api, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      const imageUrl = imageRes.data.data.url;

      const result = await createUser(data.email, data.password);
      const loggedUser = result.user;
      console.log(loggedUser);

      await updateUserProfile(data.name, imageUrl);

      const userInfo = {
        name: data.name,
        email: data.email,
        photo: imageUrl,
        role: data.role,
        coin: data.role === "Worker" ? 10 : 50,
      };

      const userRes = await axiosPublic.post("/users", userInfo);
      if (userRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User created successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  console.log(watch("example"));
  return (
    <div>
      <Helmet>
        <title>PicoWorkers | Signup</title>
      </Helmet>
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-[#F1F8E9] rounded-lg shadow-lg lg:max-w-4xl ">
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <p className="mt-3 text-xl text-[#063840] font-bold text-center">
            Sign Up!
          </p>

          <div className="flex items-center justify-center mt-6">
            <Link
              to="/login"
              className="w-1/3 pb-4 font-medium text-center text-[#063840] border-b border-[#063840]"
            >
              sign in
            </Link>

            <Link
              to="/register"
              className="w-1/3 pb-4 font-medium text-center text-[#2E7D32] border-b-2 border-[#2E7D32]"
            >
              sign up
            </Link>
          </div>

          <div className="flex justify-center items-center">
            <SocialLogin />
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="w-1/5 border-b border-gray-600 lg:w-1/4"></span>
            <p className="text-xs text-center text-[#063840] hover:underline">
              or signup with email
            </p>
            <span className="w-1/5 border-b border-gray-600 lg:w-1/4"></span>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
  <div className="form-control">
    <input
      type="text"
      {...register("name", { required: true })}
      placeholder="Name"
      className="input input-bordered"
    />
    {errors.name && <span className="text-[#E53935]">Name is required</span>}
  </div>
  
  <div className="form-control">
    <input
      type="email"
      {...register("email", { required: true })}
      placeholder="Email"
      className="input input-bordered"
    />
    {errors.email && <span className="text-[#E53935]">Email is required</span>}
  </div>
  
  <div className="form-control">
    <input
      type="password"
      {...register("password", {
        required: true,
        minLength: 6,
        maxLength: 20,
        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
      })}
      placeholder="Password"
      className="input input-bordered"
    />
    {errors.password && <span className="text-[#E53935]">{errors.password.message}</span>}
  </div>
  
  <div className="form-control">
    <select
      {...register("role", { required: true })}
      className="select select-bordered"
    >
      <option value="">Select your role</option>
      <option value="Worker">Worker</option>
      <option value="TaskCreator">TaskCreator</option>
    </select>
    {errors.role && <span className="text-[#E53935]">Role is required</span>}
  </div>
  
  <div className="form-control w-full">
    <label className="label">
      <span className="label-text">Upload Profile Picture</span>
    </label>
    <input
      {...register("image", { required: true })}
      type="file"
      className="file-input w-full max-w-xs"
    />
    {errors.image && <span className="text-[#E53935]">Image is required</span>}
  </div>
  
  <div className="form-control mt-2">
    <input
      className="btn bg-[#2E7D32] text-[#FFFFFF]"
      type="submit"
      value="Sign Up"
    />
  </div>
</form>

        </div>

        <div
          className="hidden bg-cover lg:block lg:w-1/2"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>
    </div>
  );
};

export default Register;
