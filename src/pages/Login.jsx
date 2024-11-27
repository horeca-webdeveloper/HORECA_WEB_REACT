import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Wrapper } from "../shared/Wrapper";
import { Link, Navigate } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import { ButtonLoader } from "../shared/buttonLoader/ButtonLoader";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loader, setLoading] = useState(false);
  const navigate = useNavigate();
  // const history = useHistory();

  const validateForm = () => {
    if (!email) {
      setError("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email address");
      return false;
    }
    if (!password) {
      setError("Password is required");
      return false;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return false;
    }
    setError(""); // Clear any existing errors
    return true;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!validateForm()) return; // Validate form before submitting
    try {
      setLoading(true);
      const response = await axios.post(
        "https://testhssite.com/api/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("username", response.data.user.name);
      localStorage.setItem("userProfile", JSON.stringify(response.data.user));
      navigate("/home");
      setLoading(false);
    } catch (error) {
      setError("Login failed. Please check your credentials.");
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <Wrapper>
        <div className="flex items-center justify-center w-full h-[100vh]">
          <form
            className="bg-[#E2E8F04D] border-[#E2E8F0] rounded-[10px] border px-6 py-10 max-w-[550px]"
            onSubmit={handleFormSubmit}
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl text-[#030303] font-semibold">
                Returning Customers
              </h3>
              <p className="text-[#000000] text-sm">
                Sign in for faster checkout.
              </p>
            </div>
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full block mt-5 px-3 py-3 bg-[#FFFFFF66] text-[#212121] border ${
                error.includes("Email")
                  ? "border-red-500"
                  : "border-[#66666666]"
              } rounded-[4px]`}
            />
            {error.includes("Email") && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full block mt-5 px-3 py-3 bg-[#FFFFFF66] text-[#212121] border ${
                  error.includes("Password")
                    ? "border-red-500"
                    : "border-[#66666666]"
                } rounded-[4px] pr-12`}
              />
              <span
                className="absolute top-1/2 right-5 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <IoMdEye size="24px" />
                ) : (
                  <IoMdEyeOff size="24px" />
                )}
              </span>
            </div>
            {error.includes("Password") && (
              <p className="text-red-500 text-sm">{error}</p>
            )}
            {error.includes("Login") && (
              <p className="text-red-500 text-sm">{error}</p>
            )}
            <p
              onClick={() => navigate("/forgot-password")}
              className="text-[#64748B] cursor-pointer text-sm my-5 font-semibold"
            >
              Forgot Password?
            </p>
            <button
              type="submit"
              className="block w-full bg-primary text-white px-3 py-4 font-semibold text-base rounded-[4px] "
              disabled={loader}
              style={{ opacity: `${loader ? "0.5" : ""}` }}
            >
              {loader ? (
                <span className="flex items-center justify-center">
                  <ButtonLoader />
                </span>
              ) : (
                <span>Login</span>
              )}
            </button>

            <span className="relative block text-center text-[22px] text-black my-7 after:absolute after:left-0 after:w-[40%] after:h-[1px] after:bg-[#E2E8F0] after:top-1/2 after:translate-y-[-50%] before:absolute before:right-0 before:w-[40%] before:h-[1px] before:bg-[#E2E8F0] before:top-1/2 before:translate-y-[-50%]">
              Or
            </span>

            <button className="border rounded-[4px] bg-[#FFFFFF66] border-[#03030399] font-semibold text-sm w-full py-3 px-3 flex items-center justify-center">
              <img
                src={process.env.PUBLIC_URL + "/icons/apple.png"}
                className="mr-2"
                alt=""
              />
              Sign In with Apple
            </button>
            <button className="border rounded-[4px] bg-[#FFFFFF66] border-[#03030399] font-semibold text-sm w-full py-3 px-3 flex items-center justify-center mt-5">
              <img
                src={process.env.PUBLIC_URL + "/icons/google.png"}
                className="mr-2"
                alt=""
              />
              Sign In with Outlook
            </button>
            <p className="mt-4 text-[#212121] text-sm">
              By registering you agree to the user{" "}
              <span className="font-semibold">Terms & Condition</span> and{" "}
              <span className="font-semibold">Privacy Policy</span>
            </p>

            <p className="mt-4 text-sm">
              Don’t have an account?{" "}
              <Link to="/sign-up" className="text-primary font-semibold">
                Sign up now and join us!
              </Link>
            </p>
          </form>
        </div>
      </Wrapper>
    </React.Fragment>
  );
};
