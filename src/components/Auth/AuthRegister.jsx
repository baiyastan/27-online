import React, { useState } from "react";
import "./Auth.scss";
import { Link } from "react-router-dom";
import authImage from "../../assets/image/phoneImage.png";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

function AuthRegister() {
  const [user, setUser] = useState({ email: "", password: "" });

  function handler(event) {
    const { value, name } = event.target;

    setUser({ ...user, [name]: value });
  }

  async function signUp() {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );

      if (res) {
        toast.success("email success created");
      }

      console.log(res);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  return (
    <div>
      <div className="name1">
        <img src={authImage} alt="" />
        <div className="name2">
          <h5>Create an account</h5>
          <h4>Enter your details below</h4>
          <div className="name3">
            <input type="text" placeholder="Name" />
            <input
              onChange={handler}
              value={user.email}
              name="email"
              type="email"
              placeholder="Email or Phone Number"
            />
            <input
              onChange={handler}
              value={user.password}
              name="password"
              type="password"
              placeholder="Password"
            />
            <button onClick={() => signUp()} className="create">
              Create Account
            </button>
            <div className="name4">
              <button className="sing">Sign up with Google</button>
              <h6>
                Already have account? <Link to="/login">Log in</Link>{" "}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthRegister;
