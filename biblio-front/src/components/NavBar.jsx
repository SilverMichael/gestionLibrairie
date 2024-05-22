import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import CustomButton from "./CustomButtons";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [isConnected, setIsConnected] = useState(false);
  const token = Cookies.get("user_token");

  useEffect(() => {
    if (token) {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, []);

  const logout =(e) => {
    e.preventDefault()
    Cookies.remove('user_token');
    navigate("/");
  }

  return (
    <header className="w-full shadow-md border-white border-b z-10">
      <nav className=" max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        {/* <Link href="/" className="flex justify-center items-center"> */}
        {/* <Image
            src="/logo.png"
            alt="eni logo"
            width={100}
            height={100}
            className="object-contain h-14"
          ></Image> */}
        {/* Logo */}
        <>Logo</>
        {/* </Link> */}
        {isConnected ? (
          <Link to="/signout">
            <CustomButton
              title="Se déconnecter"
              btnType="button"
              containerStyle="border mx-1 border-emerald-800 text-emerald-800 rounded-full min-w-[130px] bg-white"
              handleClick={logout}
            />
          </Link>
        ) : (
          <div className="flex">
            <Link to="/login">
              <CustomButton
                title="Se connecter"
                btnType="button"
                containerStyle="border mx-1 border-emerald-800 text-emerald-800 rounded-full min-w-[130px] bg-white"
              />
            </Link>
            <Link to="/register">
              <CustomButton
                title="S'inscrire"
                btnType="button"
                containerStyle="text-white mx-1 rounded-full min-w-[130px] bg-emerald-700"
              />
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
