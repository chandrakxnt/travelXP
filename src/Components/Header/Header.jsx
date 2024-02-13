import React from "react";
import { Link,NavLink } from "react-router-dom";
//we use Link in place of a-tag coz a-tag always refreshes the whole page while Link re-renders a particular component


export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0 ">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            
            <h1 className="text-2xl p-1.5 rounded-md font-sans font-bold">TravelXP.com</h1>
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none hover:scale-105"
            >
              Get started
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                to=""
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 
                    ${isActive?"text-orange-700":"text-gray-700"}`
                  }
                  //isActive helps to know if the current Navlink is Selected or not...we use it to give different props depending upon its Activeness
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                to="about"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 
                    ${isActive?"text-orange-700":"text-gray-700"}`
                  }
                  //isActive helps to know if the current Navlink is Selected or not...we use it to give different props depending upon its Activeness
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                to="contact"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 
                    ${isActive?"text-orange-700":"text-gray-700"}`
                  }
                  //isActive helps to know if the current Navlink is Selected or not...we use it to give different props depending upon its Activeness
                >
                  Contact Us
                </NavLink>
              </li>

           

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
