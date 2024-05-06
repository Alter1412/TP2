import React from "react";
import style from "./Header.modules.css";

const Header = () => {

    return (
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
             <img  className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            <span className="font-semibold text-xl tracking-tight">Mi Sitio</span>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a href="#responsive-header" className=" mr-4">
                Active
              </a>
              <a href="#responsive-header" className="mr-4">
                Link
              </a>
              <a href="#responsive-header" className="mr-4 ">
                Link
              </a>
            </div>
          </div>
        </nav>
    );
}

export default Header;
