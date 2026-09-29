import { useState } from "react";
import { FaCommentDots, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const[loginData,setLoginData]=useState({
    username:"",
    password:""
  })

  const handleInputChange = (e) => {
    setLoginData(prev=>({
      ...prev,
      [e.target.name]:e.target.value,
    }));
  };

  
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">

      <div className="card lg:card-side bg-base-100 shadow-2xl w-full max-w-4xl overflow-hidden">

        {/* Left Side */}
        <div className="bg-primary text-primary-content p-10 lg:w-1/2 flex flex-col justify-center items-center text-center">

          <FaCommentDots className="text-7xl mb-6" />

          <h1 className="text-4xl font-bold mb-4">
            Message-Mate
          </h1>

          <p className="text-lg opacity-90">
            Connect with your friends.
            <br />
            Chat, share and stay connected.
          </p>

        </div>

        {/* Right Side */}
        <div className="card-body lg:w-1/2 p-8 lg:p-12">

          <h2 className="text-3xl font-bold">
            Welcome Back 👋
          </h2>

          <p className="text-base-content/60 mb-6">
            Login to your Message-Mate account
          </p>

          {/* Email */}
          <label className="input input-bordered flex items-center gap-3 mb-4 w-full">
            <FaEnvelope className="text-base-content/50" />

            <input
              name="username"
              type="email"
              placeholder="Email address"
              className="grow"
              value={loginData.username}
        onChange={handleInputChange}
            />
          </label>

          {/* Password */}
          <label className="input input-bordered flex items-center gap-3 mb-2 w-full">
            <FaLock className="text-base-content/50" />

            <input
              type="password"
                name="password"
                 placeholder="Password"
                value={loginData.password}
              onChange={handleInputChange}
            />
          </label>

          {/* Forgot Password */}
          {/* <div className="text-right mb-5">
            <a className="link link-primary text-sm">
              Forgot password?
            </a>
          </div> */}

          {/* Login Button */}
          <button className="btn btn-primary w-full text-lg">
            Login
          </button>

          {/* Register */}
          <div className="divider">OR</div>

          <p className="text-center">
            Don't have an account?
            <Link
              to="/signup"
              className="link link-primary font-semibold ml-1"
            >
              Create Account
            </Link>
          </p>

        </div>

      </div>
    </div>
  );
};

export default Login;