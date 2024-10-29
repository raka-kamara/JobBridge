import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import SocialLogin from "../components/Shared/SocialLogin";
import useAxiosPublic from "../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    // Image upload
    const formData = new FormData();
    formData.append("image", data.image[0]);

    const res = await axiosPublic.post(image_hosting_api, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const imgURL = res.data.data.display_url;

      createUser(data.email, data.password).then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        // Update user profile with name and image URL
        updateUserProfile(data.name, imgURL)
          .then(() => {
            // Save user data to the database
            const userInfo = {
              name: data.name,
              email: data.email,
              photoURL: imgURL, // Save the image URL
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                console.log("user added to the database");
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate(from, { replace: true });
              }
            });
          })
          .catch((error) => console.log(error));
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>JobBridge  | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            <p className="py-6">
              Join us today and explore the exciting features we offer!
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Upload Image</span>
                </label>
                <input
                  type="file"
                  {...register("image", { required: true })}
                  className="input input-bordered"
                />
                {errors.image && (
                  <span className="text-red-600">Image is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one uppercase, one lowercase, one number,
                    and one special character.
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <div className="flex justify-center ">
              <SocialLogin />
            </div>
            <p className="text-center mb-2">
              <small>
                Already have an account?{" "}
                <Link to="/login" className="link-hover">
                  Login
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
