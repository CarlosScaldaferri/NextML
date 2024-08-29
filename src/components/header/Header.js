"use client";
import React, { useContext } from "react";
import Adress from "./adress/Adress";
import Logo from "./logo/Logo";
import MainMenu from "./mainMenu/MainMenu";
import SearchBar from "./searchBar/SearchBar";
import UserBar from "./userBar/UserBar";
import UtilitiesBar from "./utilitiesBar/UtilitiesBar";
import { HeaderContext } from "@/context";

const Header = () => {
  const { standBy } = useContext(HeaderContext);

  return (
    <header
      className={`bg-header-background sm:gap-x-5 grid grid-cols-[auto_auto_minmax(0,1fr)_auto_auto] grid-rows-2 pt-2 pb-1`}
    >
      <div
        className={`${
          standBy ? "block" : "hidden"
        } flex justify-center items-center row-start-1 row-end-3 col-start-1 col-end-5 pr-2 pl-2 sm:pl-7`}
      >
        <Logo />
      </div>

      <div
        className={`${
          standBy ? "hidden" : "block"
        } flex justify-end row-1 col-1 pr-2 pl-2 sm:pl-7`}
      >
        <Logo />
      </div>
      <div className={`${standBy ? "hidden" : "block"} row-1 col-2`}>
        <Adress />
      </div>
      <div className={`${standBy ? "hidden" : "block"} row-1 col-3`}>
        <SearchBar />
      </div>
      <div
        className={`${
          standBy ? "hidden" : "block"
        } row-1 col-4 flex justify-start items-end pl-2`}
      >
        <UserBar />
      </div>
      <div
        className={`${
          standBy ? "hidden" : "block"
        } row-1 col-5 flex justify-start items-end pl-2 pr-2 sm:pl-5 sm:pr-7`}
      >
        <UtilitiesBar />
      </div>
      <div
        className={`${
          standBy ? "hidden" : "block"
        } flex justify-end items-end row-2 col-start-1 col-end-6`}
      >
        <MainMenu />
      </div>
    </header>
  );
};

export default Header;
