import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import getBaseUrl from "../utils/baseURL";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const Signup = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${getBaseUrl()}/api/auth/signup`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("Signup successful! Please Sign in.");
      navigate("/signin");
    } catch (error) {
      setMessage("Signup failed. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="flex bg-white border-gray-800 border-2  shadow-md rounded-lg overflow-hidden w-full max-w-4xl">
        <div className="w-1/2 p-6 flex flex-col justify-center items-center bg-gray-300 text-green-700">
          <h2 className="text-2xl font-bold my-5">WELCOME TO</h2>
          <img src={logo} alt="Volunteer" className="w-3/4 py-10" />
        </div>
        <div className="w-1/2 p-8">
          <h2 className="text-xl font-semibold mb-4 text-center">SIGN UP</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                id="name"
                placeholder="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                id="email"
                placeholder="Email Address"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                id="password"
                placeholder="Password"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
              />
            </div>

            {message && <p className="text-red-500 text-xs italic mb-3">{message}</p>}

            <div className="w-full flex justify-center">
              <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-8 rounded focus:outline-none">
                SIGN UP
              </button>
            </div>
          </form>

          <p className="text-center text-sm mt-4">
            Already have an account? {" "}
            <Link to="/signin" className="text-green-700 font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
