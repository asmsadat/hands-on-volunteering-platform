import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import getBaseUrl from "../utils/baseURL";
import logo from "../assets/logo.png"

const Signin = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data)
    try {
      const response = await axios.post(
        `${getBaseUrl()}/api/auth/signin`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const auth = response.data;
      if (auth.token) {
        localStorage.setItem("token", auth.token);
        setTimeout(() => {
          localStorage.removeItem("token");
          alert("Token has been expired!, Please Sign in again.");
          navigate("/");
        }, 3600 * 1000);
      }
      alert("Sign in successful!");
      navigate("/dashboard");
    } catch (error) {
      setMessage("Please provide a valid username and password");
      console.error(error);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100 ">
      <div className="flex bg-white border-gray-800 border-2  shadow-md rounded-lg overflow-hidden w-full max-w-4xl">
        <div className="w-1/2 p-6 flex flex-col justify-center items-center bg-gray-300 text-green-700">
          <h2 className="text-2xl font-bold my-5">
            WELCOME TO
          </h2>
          <img
            src={logo}
            alt="Volunteer"
            className="w-3/4 py-10"
          />
        </div>
        <div className="w-1/2 p-8">
          <h2 className="text-xl font-semibold mb-4 text-center">SIGN IN</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                {...register("email", { required: true })}
                type="text"
                name="email"
                id="email"
                placeholder="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
              />
            </div>

            {message && (
              <p className="text-red-500 text-xs italic mb-3">{message}</p>
            )}

            <div className="w-full flex justify-center">
              <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-8 rounded focus:outline-none">
                SIGN IN{" "}
              </button>
            </div>
          </form>

          <p className="text-center text-sm mt-4">
            Don't have any account? {" "}
            <Link to="/signup" className="text-green-700 font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
