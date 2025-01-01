import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from "react";
import { Authcontext } from "../Components/Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  // captcha 
    const [disabled, setDisabled] = useState(true);
    const location = useLocation()
    const navigate = useNavigate()  
    const from = location.state?.from || { pathname: "/" };

    useEffect(() => {
        loadCaptchaEnginge(4); 
    }, []);

    const handleCptcha = (e) => {
        const captchaValue  = e.target.value
        if (validateCaptcha(captchaValue )) {
            setDisabled(false);
        }else{
            setDisabled(true);
        }
    }

  const { loginGoogle, googleLogin } = useContext(Authcontext);

  const handleLoginEmail =async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await loginGoogle(email, password)
    Swal.fire("Good job!", "You login succesfuly", "success"); 
    navigate(from, { replace: true }); 
  };

// popup google login
  const handleloginGoogle = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        Swal.fire("Good job!", "You logged in successfully", "success");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.message);
        Swal.fire("Error", "Google login failed", "error");
      });
  };
  

  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content flex-col w-full ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold !text-black">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLoginEmail} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt !text-black link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {/* captcha */}
            <div className="form-control">
              <label className="label">
              <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                placeholder="captha"
                onBlur={handleCptcha}
                name="captcha"
                className="input input-bordered"
                required
              />
            </div>


            <div className="form-control mt-6">
              <button disabled={disabled}  className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="">
            <p className="flex justify-center font-sans !text-black text-sm font-light leading-normal text-inherit antialiased">
              Don't have an account?
              <Link to="/register">
                <p className="text-red-600 ml-2 font-bold">Sing up</p>
              </Link>
            </p>
          </div>
          <div className="flex justify-center p-5">
            <button
              onClick={handleloginGoogle}
              className="btn"
            >
              <FcGoogle className="text-3xl"></FcGoogle>
              Continue with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
