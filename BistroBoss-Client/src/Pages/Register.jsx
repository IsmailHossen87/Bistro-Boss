import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Authcontext } from "../Components/Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  // const navigate = useNavigate();
  const {loginByemail, googleLogin, updateUser } = useContext(Authcontext);
  const navigate = useNavigate();
// for from validation start
  const {register, handleSubmit,reset, formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('hello')
    loginByemail(data.email, data.password)
    .then((response)=>{
     console.log("User created successfully")
    })
// for validation end


    updateUser(data.name, data.photo)
    .then((response)=>{ 
      console.log("User updated successfully")
      reset()
      Swal.fire({
        title: "Success!",
        text: "User registered successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
      navigate("/")
    })
  };
  const handleGoogle = () => {  
    googleLogin()
    .then((res) => {
      Swal.fire("Good job!", "You logged in successfully", "success");
      navigate("/");
    })
    .catch((error) => {
      Swal.fire("Error", "Google login failed", "error");
    });
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col w-full ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl !text-black font-bold ">Register now!</h1>
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
                  required
                />
                {errors.name && (
                  <span className="text-red-500">Name field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  {...register("photo", { required: true })}
                  placeholder="Photo "
                  className="input input-bordered"
                  required
                />
                {errors.photo && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    maxLength: {
                      value: 9,
                      message: "Password must not exceed 9 characters",
                    },
                    pattern: {
                      value:
                        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,9}$/,
                      message:
                        "Password must include 1 uppercase, 1 lowercase, 1 digit, and 1 special character",
                    },
                  })}
                  name="password"
                  className="input input-bordered"
                  required
                />
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Sing Up</button>
              </div>
            </form>
            <div className="">
              <p className="flex justify-center !text-black font-sans text-sm font-light leading-normal text-inherit antialiased">
                You have an account?
                <Link to="/login">
                  <p className="text-red-600 ml-2 font-bold">Login</p>
                </Link>
              </p>
            </div>
            <div className="flex justify-center p-5">
              <button onClick={()=>handleGoogle()} className="btn">
                <FaGoogle className="text-3xl"></FaGoogle>
                Continue with google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
