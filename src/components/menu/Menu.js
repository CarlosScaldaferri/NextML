"use client";
import React, { useEffect, useRef, useState } from "react";
import SideMenu from "./sideMenu/SideMenu";

const Menu = ({ menu, parentId = null }) => {
  const items = menu.filter((item) => item.parentId === parentId);
  const [activeMenu, setActiveMenu] = useState(null);
  const [hiddenItemsCount, setHiddenItemsCount] = useState(-1);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [initialTop, setInitialTop] = useState(null); // Estado para armazenar o top do primeiro filho
  const navRef = useRef(null);
  const divRef = useRef(null);

  const handleMouseEnter = (id) => {
    setShowSideMenu(false);
    setActiveMenu(id);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const getElementTop = (element) => {
    if (!element) return false;
    return element.offsetTop;
  };

  const updateHiddenItemsCount = () => {
    if (navRef.current) {
      const level0Items = Array.from(navRef.current.children).filter((child) =>
        items.some(
          (item) =>
            item.title === child.querySelector("a").textContent &&
            !item.parentId
        )
      );

      const hiddenCount = level0Items.filter(
        (item) => getElementTop(item) != initialTop // Comparação usando o top inicial
      ).length;

      if (hiddenCount !== hiddenItemsCount) {
        setHiddenItemsCount(hiddenCount);
      }
    }
  };

  useEffect(() => {
    if (navRef.current && navRef.current.firstChild) {
      setInitialTop(getElementTop(navRef.current.firstChild)); // Captura o top do primeiro filho ao abrir o componente
    }

    updateHiddenItemsCount();

    const handleResize = () => {
      updateHiddenItemsCount();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [hiddenItemsCount]);

  return (
    <>
      <nav className="relative flex items-end font-arial">
        <ul
          ref={navRef}
          className={`border-l border-t border-b ${
            parentId ? "border-r" : ""
          } border-white ${
            parentId
              ? "text-xs uppercase bg-blue-weak flex-wrap"
              : "flex justify-end h-8 text-xs uppercase bg-blue-weak overflow-hidden flex-wrap"
          }`}
        >
          {items.map((item, index) => (
            <li
              key={item.id}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
              className={`flex flex-grow whitespace-nowrap ${
                parentId ? "justify-start" : "justify-start border-r  pr-3"
              } h-full text-black hover:bg-blue-strong hover:text-white`}
            >
              <div
                className={`flex items-center ${
                  parentId ? "space-x-10 pr-3" : ""
                } w-full`}
              >
                <a className="py-2 px-4 flex-grow" href="#">
                  {item.title}
                </a>
                <div className="flex">
                  {menu.filter((q) => q.parentId === item.id).length > 0
                    ? "▾"
                    : ""}
                </div>
              </div>

              {menu.some((child) => child.parentId === item.id) && (
                <div
                  className={`absolute ${
                    parentId ? `left-full top-${index * 8}` : "top-[2.1rem] "
                  } ${activeMenu === item.id ? "block" : "hidden"}`}
                >
                  <Menu menu={menu} parentId={item.id} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div
        ref={divRef}
        className={` ${
          hiddenItemsCount > 0
            ? "flex items-center h-8 pl-2 pr-2 text-xs uppercase border-r border-t border-b border-white bg-blue-weak hover:bg-blue-strong hover:text-white"
            : "hidden h-0 w-0"
        }`}
        onMouseEnter={() => setShowSideMenu(true)}
      >
        ▾
      </div>
      {showSideMenu && (
        <SideMenu
          setShowSideMenu={setShowSideMenu}
          menu={menu}
          hiddenMenu={items.filter(
            (_, index) => index > items.length - 1 - hiddenItemsCount
          )}
        />
      )}
    </>
  );
};

export default Menu;
