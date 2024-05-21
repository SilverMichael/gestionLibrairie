import React, { useState } from "react";

import { CustomButton, CustomInput } from "../components/index";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorInput, setErrorInput] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-row-reverse w-full h-screen">
      <div className="login flex justify-center items-center flex-col w-full md:w-3/5 h-full bg-white">
        <h2 className="text-[30px] font-semibold">Login</h2>
        <div className="form-login-container card  h-fit mx-auto border-none md:shadow-2xl p-10 w-full md:w-3/5">
          <form action="" onSubmit={handleLogin}>
            <CustomInput
              name="mail-login"
              label="E-mail"
              type="text"
              variant="normal"
              dimension="medium"
              placeholder="your@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <CustomInput
              name="username-password"
              label="Password"
              type="password"
              containerStyle="mt-5"
              placeholder=""
              value={password}
              error={errorInput?.errorPassword}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* <Link href="" className="mt-3 text-start text-sm text-blue-700 active:text-violet-800">
              Mot de passe oublié ?
            </Link> */}

            <CustomButton
              title="Login"
              btnType="submit"
              containerStyle="bg-green-600 hover:bg-green-500 text-white mt-5 w-full rounded-md"
            />
            <p className="mt-4">
              Not registered yet ?{" "}
              <Link className="text-blue-700" to="/register">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>

      <div className="image-container md:block hidden md:w-2/5 h-[100%] bg-green-800 "></div>
    </div>
  );
};

export default Login;
