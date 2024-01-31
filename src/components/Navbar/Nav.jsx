import { useState } from "react";
import AirLogo from "../../assets/images/Airlogo.png";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import LoginSignupbtn from "./LoginSignupbtn";
import Home from "../pages/Home";
const Nav = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Transport", link: "/transport" },
    { name: "Hotel", link: "/hotel" },
    { name: "Meal", link: "/meals" },
    { name: "Accories", link: "/accessories" },
  ];

  const [isopen, setisopen] = useState(false);
  return (
    <>
      <div className="w-full shadow-md  fixed top-0 left-0 ">
        <div className="md:px-10 py-4 px-7 md:flex justify-between bg-white md:items-center ">
          {/* logo */}
          <div className="flex items-center text-xl cursor-pointer gap-2">
            <img src={AirLogo} className="w-12 object-cover" alt="" />
            <h1 className="font-bold text-[#0A1D56] text-2xl">
              Jounery Junction
            </h1>
          </div>

          {/* menu icon*/}
          <div
            onClick={() => {
              setisopen(!isopen);
            }}
            className="absolute right-8 top-6 cursor-pointer md:hidden"
          >
            {isopen ? (
              <AiOutlineClose size={20} />
            ) : (
              <AiOutlineMenu size={30} />
            )}
          </div>
          {/* links */}
          {
            <ul
              className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                isopen ? "top-12" : "top-[-490px]"
              }`}
            >
              {Links.map((link, ind) => (
                <li key={ind} className=" font-bold my-7 md:my-0 md:ml-8 ">
                  <a href={link.link}></a>
                  {link.name}
                </li>
              ))}
              <LoginSignupbtn />
            </ul>
          }
          {/* <div
          className={`md:flex pl-9 md:pl-0 absolute md:static md:items-center md:pb-0 pb-12 ${
            isopen ? "top-12" : "top-[490px]"
          }`}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink
            to="/accessories"
            className=" font-bold my-7 md:my-0 md:ml-8 "
          >
            accessories
          </NavLink>
          <NavLink
            to="/accessories"
            className=" font-bold my-7 md:my-0 md:ml-8 "
          >
            accessories
          </NavLink>
          <NavLink
            to="/accessories"
            className=" font-bold my-7 md:my-0 md:ml-8 "
          >
            accessories
          </NavLink>
          <NavLink
            to="/accessories"
            className=" font-bold my-7 md:my-0 md:ml-8 "
          >
            accessories
          </NavLink>
          <NavLink
            to="/accessories"
            className=" font-bold my-7 md:my-0 md:ml-8 "
          >
            accessories
          </NavLink>
        </div> */}
        </div>
      </div>
      <Home />
    </>
  );
};

export default Nav;
