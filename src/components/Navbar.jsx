import React, { useState } from "react";
import house from "../../public/assets/house.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });
  return (
    <div className="sticky	top-0 bg-white">
      <div className=" m-6 text-orange-500 relative ">
        <div className=" flex justify-between items-center px-8 ">
          <p className="curser-pointer ">
            <img src={house} className="md:hidden w-[50px]" />
          </p>
          <p
            className="curser-pointer md:hidden block  text-[50px]"
            onClick={toggleMenu}
          >
            <ion-icon name={menuOpen ? "close" : "menu"}></ion-icon>
          </p>
        </div>

        <ul
          className={`  md:flex md:items-center  absolute      z-auto  md:static top-[100px]  left-0 pl-4 font-semibold  ${
            menuOpen ? "block  bg-white shadow-2xl  " : "hidden"
          }  `}
        >
          <li className="lg:mx-3  my-8 px-4">
            <NavLink to="/">SHOP</NavLink>
          </li>
          <li className="lg:mx-3 my-8 px-4">
            <NavLink to="/gifting">GIFTING</NavLink>
          </li>
          <li className="lg:mx-3 my-8 px-4">
            <NavLink to="/celebration">CELEBRATION</NavLink>
          </li>

          <li className="2xl:mx-[200px] hidden md:block ">
            <NavLink to="/homepage">
              <img className="w-[100px]" src={house} alt="image" />
            </NavLink>
          </li>

          <li className="lg:mx-3 my-8 px-4">
            <NavLink to="/card">GIFTING CARD</NavLink>
          </li>
          <li className="lg:mx-3 my-8 px-4">
            <NavLink to="/about">ABOUT US</NavLink>
          </li>
          <li className="lg:mx-3 my-8 px-4">
            <NavLink to="/contact">CONTACT US</NavLink>
          </li>
          <li className="text-2xl lg:mx-3 my-8 px-4 ">
            <NavLink to="/cart" className={"flex items-center gap-2"}>
              <ion-icon name="cart-outline"></ion-icon>
              <span>{cartItems.length}</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
