import React from "react";
import logo from "../assets/logo/devmafra-logo-white.png";
import UserButtons from "./UserButtons";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();

  const completeHeader = (
    <header className="flex text-xl sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-8 py-4 items-end justify-between text-xl z-10">
      <Link to="/">
        <img className="h-12 px-2" src={logo} alt="Logo da Hashtag" />
      </Link>
      <UserButtons />
    </header>
  );

  const simpleHeader = (
    <header className="flex text-xl sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-8 py-4 items-end justify-between text-xl z-10">
      <Link to="/">
        <img className="h-10 px-2" src={logo} alt="Logo da Hashtag" />
      </Link>
    </header>
  );
  return <>{pathname === "/" ? completeHeader : simpleHeader}</>;
}
export default Header;
