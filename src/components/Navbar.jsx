import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-4 fixed top-0 z-20 ${
        scrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      } transition-colors duration-300`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            MADHAVARAJ R &nbsp;
            <span className="sm:block hidden">| FULL STACK DEVELOPER</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-8'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white underline" : "text-gray-300"
              } hover:text-white text-lg font-medium cursor-pointer transition-colors duration-300`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-8 h-8 object-contain cursor-pointer transition-transform duration-300 hover:scale-110'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-gray-800 absolute top-16 right-0 mx-4 my-2 min-w-[180px] z-10 rounded-lg shadow-md transition-transform duration-300`}
          >
            <ul className='list-none flex flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium text-lg ${
                    active === nav.title ? "text-white underline" : "text-gray-300"
                  } cursor-pointer transition-colors duration-300`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
