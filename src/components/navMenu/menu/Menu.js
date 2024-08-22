"use client";

import useResizeObserver from "@/hooks/useResizeObserver/useResizeObserver";
import { useState, useRef, useEffect } from "react";
import NavMenu from "../NavMenu";
import Image from "next/image";
import PainelMultLevel from "../painelMultLevel/PainelMultLevel";

const Menu = ({
  menu,
  level = 0,
  left = 0,
  top = 0,
  width = 0,
  isSideMenu = false,
}) => {
  const [hiddenItemsCount, setHiddenItemsCount] = useState(null);
  const [activeMenu, setActiveMenu] = useState(-1);
  const [submenuPosition, setSubmenuPosition] = useState({});
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [positionStyle, setPositionStyle] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const liRef = useRef({});
  const ulRef = useRef(null);
  const sideRef = useRef(null);

  useEffect(() => {
    if (activeMenu !== null && liRef.current[activeMenu]) {
      const li = liRef.current[activeMenu].getBoundingClientRect();

      const activeIndex = menu.findIndex((item) => item.id === activeMenu);

      switch (level) {
        case 0: {
          setSubmenuPosition({
            left: isSideMenu ? li.left - li.width : li.left,
            top: isSideMenu ? activeIndex * li.height : li.bottom,
          });
          break;
        }
        default: {
          setSubmenuPosition({
            left: isSideMenu ? li.left + li.width : li.width,
            top: activeIndex * li.height,
            width: li.width,
          });
          break;
        }
      }
    }
    setPositionStyle(getPositionStyle());
  }, [activeMenu, left, top, width]);

  const getPositionStyle = () => {
    let position = {};
    if (width > 0 && !isMobile) {
      position = {
        left: `${left}px`,
        top: `${top}px`,
        width: `${width}px`,
      };
    } else {
      position = {
        left: `${left}px`,
        top: `${top}px`,
      };
    }
    return position;
  };

  const getElementTop = (element) => {
    if (!element) return false;
    return element.offsetTop;
  };

  const updateHiddenItemsCount = () => {
    if (liRef.current) {
      const level0Items = Array.from(ulRef.current.children).filter((child) =>
        menu.some(
          (item) =>
            item.title === child.querySelector("a").textContent &&
            !item.parentId
        )
      );

      const hiddenCount = level0Items.filter(
        (item) => getElementTop(item) > 57
      ).length;
      setHiddenItemsCount(hiddenCount);
    }
  };

  useResizeObserver(() => {
    updateHiddenItemsCount();
    setIsMobile(menu.length / 2 >= hiddenItemsCount);
  });

  return (
    <div className={"flex"}>
      <div
        ref={sideRef}
        className={` ${
          hiddenItemsCount > 0 && !isSideMenu
            ? "flex-none w-[60px] h-[32px] items-center pl-2 pr-2 text-xs uppercase border-l border-t border-b border-white text-black bg-blue-weak hover:bg-blue-strong hover:text-white"
            : "hidden h-0 w-0"
        }`}
        onMouseEnter={() => {
          setShowSideMenu(true);
        }}
      >
        <Image
          src="/img/sideExtraMenu.png"
          alt="Logo"
          width={80}
          height={80}
          className="w-[60px] h-[30px] p-2"
        />
      </div>
      <ul
        ref={ulRef}
        className={
          !isSideMenu
            ? level === 0
              ? "flex flex-wrap overflow-hidden h-8 text-xs uppercase border"
              : "absolute flex flex-col text-xs uppercase border"
            : level === 0
            ? "absolute flex flex-col h-auto border"
            : "absolute flex flex-col h-auto border"
        }
        style={positionStyle}
      >
        {menu &&
          menu.map((item) => (
            <li
              key={item.id}
              ref={(el) => {
                liRef.current[item.id] = el;
              }}
              onMouseEnter={() => {
                setShowSideMenu(false);
                setActiveMenu(item.id);
              }}
              onMouseLeave={() => {
                setActiveMenu(null);
              }}
              className={
                !isSideMenu
                  ? level === 0
                    ? "h-full whitespace-nowrapborder-white text-black bg-blue-weak hover:bg-blue-strong hover:text-white flex flex-grow pl-3 pr-3 items-center justify-center flex-shrink-0 border-r"
                    : "h-full whitespace-nowrap border-white text-black bg-blue-weak hover:bg-blue-strong hover:text-white flex flex-col items-start justify-start pl-3 pr-10 pt-3 pb-3"
                  : "whitespace-nowrap border-white text-black bg-blue-weak hover:bg-blue-strong hover:text-white flex flex-col items-start justify-start pl-3 pr-10 pt-3 pb-3"
              }
            >
              <a>{item.title}</a>
              {activeMenu === item.id &&
                isMobile &&
                item.submenus &&
                item.submenus.length > 0 && (
                  <NavMenu
                    menu={item.submenus}
                    level={level + 1}
                    left={submenuPosition.left}
                    top={submenuPosition.top}
                    width={submenuPosition.width}
                    isSideMenu={isSideMenu}
                  />
                )}
              {activeMenu === item.id && !isMobile && (
                <PainelMultLevel
                  menu={item.submenus}
                  left={ulRef.current.getBoundingClientRect().left}
                  top={
                    ulRef.current.getBoundingClientRect().top +
                    ulRef.current.getBoundingClientRect().height
                  }
                  width={ulRef.current.getBoundingClientRect().width}
                />
              )}
            </li>
          ))}
      </ul>

      {showSideMenu && (
        <NavMenu
          menu={menu.filter(
            (_, index) => index > menu.length - 1 - hiddenItemsCount
          )}
          level={0}
          left={sideRef.current.getBoundingClientRect().left}
          top={ulRef.current.getBoundingClientRect().bottom - 1}
          width={ulRef.current.getBoundingClientRect().width + 60}
          isSideMenu={true}
        />
      )}
    </div>
  );
};

export default Menu;
