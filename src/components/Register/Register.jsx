import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";

export default function Register() {
  const [registerError, setRegisterError] = useState([]);
  const [success, setSuccess] = useState("");

  const handleFormSubmit = (e) => {
    // Prevent form default behavior
    e.preventDefault();

    // Reset error and success message
    setRegisterError("");
    setSuccess("");

    // Get input from the form
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Password validation
    if (password.length < 6) {
      setRegisterError("Password should be 6 character or long");
      return;
    }

    // Create user using Firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setSuccess("User Created Successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setRegisterError(errorMessage);
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="my-20">
      <div className="mx-auto flex w-full flex-col justify-center items-center">
        <h2 className="text-4xl font-semibold">Please Register</h2>
        <form className="my-5" onSubmit={handleFormSubmit}>
          <input
            className="border w-96 px-4 py-2 mb-3 rounded-lg"
            type="email"
            name="email"
            id=""
            placeholder="Email Address"
            required
          />
          <br />
          <input
            className="border w-96 px-4 py-2 mb-3 rounded-lg"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <br />
          <input
            className="btn btn-secondary w-full"
            type="submit"
            value="Register"
          />
        </form>
        {success && <p className="text-green-500">{success}</p>}
        {registerError && <p className="text-red-500">{registerError}</p>}
      </div>
    </div>
  );
}
