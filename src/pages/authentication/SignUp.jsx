
import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaCommentDots,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [signupData, setSignUpData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    setSignUpData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSignUp = (e) => {
    e.preventDefault();

    // Check password
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Signup Data:", signupData);
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="card lg:card-side bg-base-100 shadow-2xl w-full max-w-4xl overflow-hidden">

        {/* Left Side */}
        <div className="bg-primary text-primary-content p-10 lg:w-1/2 flex flex-col justify-center items-center text-center">

          <FaCommentDots className="text-7xl mb-6" />

          <h1 className="text-4xl font-bold mb-4">
            Join Message-Mate
          </h1>

          <p className="text-lg opacity-90">
            Create your account and start
            <br />
            chatting with your friends.
          </p>

        </div>

        {/* Right Side */}
        <div className="card-body lg:w-1/2 p-8 lg:p-12">

          <h2 className="text-3xl font-bold mb-2">
            Create Account
          </h2>

          <p className="text-base-content/60 mb-6">
            Sign up to start using Message-Mate
          </p>

          {/* Signup Form */}
          <form onSubmit={handleSignUp}>

            {/* Username */}
            <label className="input input-bordered flex items-center gap-3 mb-4 w-full">
              <FaUser className="text-base-content/50" />

              <input
                name="fullname"
                type="text"
                placeholder="fullname"
                className="grow"
                value={signupData.username}
                onChange={handleInputChange}
                required
              />
            </label>

            {/* Email */}
            <label className="input input-bordered flex items-center gap-3 mb-4 w-full">
              <FaEnvelope className="text-base-content/50" />

              <input
                name="email"
                type="email"
                placeholder="Email address"
                className="grow"
                value={signupData.email}
                onChange={handleInputChange}
                required
              />
            </label>

            {/* Password */}
            <label className="input input-bordered flex items-center gap-3 mb-4 w-full">
              <FaLock className="text-base-content/50" />

              <input
                name="password"
                type="password"
                placeholder="Password"
                className="grow"
                value={signupData.password}
                onChange={handleInputChange}
                required
              />
            </label>

            {/* Confirm Password */}
            <label className="input input-bordered flex items-center gap-3 mb-5 w-full">
              <FaLock className="text-base-content/50" />

              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                className="grow"
                value={signupData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </label>

            {/* Signup Button */}
            <button
              type="submit"
              className="btn btn-primary w-full text-lg"
            >
              Create Account
            </button>

          </form>

          <div className="divider">OR</div>

          <p className="text-center">
            Already have an account?

            <Link
              to="/login"
              className="link link-primary font-semibold ml-1"
            >
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default SignUp;
