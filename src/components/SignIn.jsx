import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can handle the sign-in logic.
    // For example, checking if the user exists and providing the appropriate message.
    const userExists = true; // This should be replaced with actual logic to check if the user exists.
    
    if (!userExists) {
      setErrorMessage("User does not exist. Please sign up.");
    } else {
      setErrorMessage(""); 
      console.log("Form submitted successfully", formData);

      setFormData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-400">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-5 text-center">Sign In</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type={passwordVisible ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="button"
            onClick={() => setPasswordVisible(!passwordVisible)}
            className="absolute inset-y-6 right-0 px-3 py-2 text-gray-600"
          >
            <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
          </button>
        </div>

        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
        >
          Sign In
        </button>

        <p className="text-center text-gray-700 mt-4">
          Don't have an account?{" "}
          <Link to="/" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>

        <div className="flex items-center my-4">
          <hr className="w-full border-gray-300" />
          <p className="px-3 text-gray-500">or</p>
          <hr className="w-full border-gray-300" />
        </div>

        <div className="flex flex-col space-y-3">
          <button
            type="button"
            className="flex items-center justify-center w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faFacebook} className="mr-2" />
            Login with Facebook
          </button>
          <button
            type="button"
            className="flex items-center justify-center w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faGoogle} className="mr-2" />
            Login with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
