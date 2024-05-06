import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Header.modules.css";

const Header = () => {
  

    return (
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 bg-slate-900">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
           <img  className="h-24 w-auto" src="https://static.vecteezy.com/system/resources/previews/002/443/300/non_2x/games-logo-with-gamepad-vector.jpg" alt="" />
            <span className="font-semibold text-2xl tracking-tight">Game Zone</span>
          </div>
          
        </nav>
    );
}

export default Header;
