import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import Logo from "../assets/react.svg";
import clsx from "clsx";

const Navbar2 = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const navList = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "About",
    },
    {
      id: 3,
      title: "Blog",
    },
    {
      id: 4,
      title: "News",
    },
    {
      id: 5,
      title: "Contact",
    },
  ];

  return (
    <main>
      <nav className="flex justify-between py-4 px-5 items-center lg:px-20">
        {/* Left-End */}
        <div className="flex justify-center items-center gap-8">
          <div className="flex justify-center items-center gap-4">
            <GiHamburgerMenu
              className="text-3xl text-gray-900 cursor-pointer lg:hidden"
              onClick={() => setIsSideMenuOpen(true)}
            />
            <img src={Logo} alt="" className="w-8 h-8 cursor-pointer" />
          </div>
          {navList.map(({ id, title }) => {
            return (
              <h3
                key={id}
                className="cursor-pointer text-lg hover:text-red-700 hidden lg:block"
              >
                {title}
              </h3>
            );
          })}
        </div>

        {/* Sidebar */}
        <section
          className={clsx(
            "w-screen h-full fixed bg-black/50 top-0 right-0 backdrop-blur-sm lg:hidden -translate-x-full transition-all",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <div className="bg-white absolute top-0 left-0 h-screen w-56 flex flex-col p-8 gap-4 text-black z-50">
            <IoMdClose
              className="cursor-pointer text-4xl"
              onClick={() => setIsSideMenuOpen(false)}
            />
            {navList.map(({ id, title }) => {
              return (
                <h3 key={id} className="cursor-pointer text-2xl font-bold">
                  {title}
                </h3>
              );
            })}
          </div>
        </section>

        {/* Right-End */}
        <div className="flex justify-center items-center gap-4">
          <img
            className="w-8 h-8 rounded-full cursor-pointer"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <FaCartShopping className="cursor-pointer text-2xl text-gray-900" />
        </div>
      </nav>
      <hr className="mx-20" />
    </main>
  );
};

export default Navbar2;
