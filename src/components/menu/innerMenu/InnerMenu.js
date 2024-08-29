"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SubMenu from "../subMenu/SubMenu";
import useResizeObserver from "@/hooks/useResizeObserver/useResizeObserver";
import SideMenu from "../sideMenu/SideMenu";
import PainelMultLevel from "../painelMultLevel/PainelMultLevel";

const InnerMenu = ({ menu, level = 0 }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [hiddenItemsCount, setHiddenItemsCount] = useState(null);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const sideMenuRef = useRef({});
  const liRef = useRef({});
  const ulRef = useRef(null);

  const getElementTop = (element) => {
    if (!element) return false;
    return element.offsetTop;
  };

  const updateHiddenItemsCount = () => {
    const level0Items = Array.from(ulRef.current.children).filter((child) =>
      menu.some(
        (item) =>
          item.title === child.querySelector("a")?.textContent && !item.parentId
      )
    );

    const hiddenCount = level0Items.filter(
      (item) => getElementTop(item) > 57
    ).length;
    setHiddenItemsCount(hiddenCount);
  };

  useEffect(() => {
    setActiveMenu(null);
    updateHiddenItemsCount();
  }, []);

  useResizeObserver(() => {
    setActiveMenu(null);
    updateHiddenItemsCount();
  });

  const [imageSrc, setImageSrc] = useState("/img/sideExtraMenu.png");

  const getMultLevelWidth = () => {
    let width = 0;
    if (ulRef.current && ulRef.current.getBoundingClientRect) {
      width = ulRef.current.getBoundingClientRect().width;
      if (sideMenuRef.current && sideMenuRef.current.getBoundingClientRect) {
        width += sideMenuRef.current.getBoundingClientRect().width;
      }
    }
    return width;
  };

  return (
    <div className="flex items-center justify-center flex-grow border-t border-b border-nav-border">
      <ul
        ref={ulRef}
        className="flex flex-wrap items-center justify-center overflow-hidden h-8 text-xs uppercase border-l border-nav-border"
      >
        {menu.map((item) => (
          <li
            ref={(el) => {
              liRef.current[item.id] = el;
            }}
            key={item.id}
            className="
            hover:bg-nav-backgroundHover
            hover:text-nav-textHover
             border-nav-border
            h-full pr-2 pl-3 whitespace-nowrap flex flex-grow items-center justify-center border-r cursor-pointer"
            onMouseEnter={() => {
              setActiveMenu(item.id);
            }}
            onMouseLeave={() => {
              setActiveMenu(null);
            }}
          >
            <div className="flex gap-2">
              {item.img && (
                <Image
                  src={item.img}
                  width={16}
                  height={16}
                  alt={item.title}
                  style={{
                    filter: activeMenu === item.id ? "invert(1)" : "none",
                  }}
                />
              )}
              <a>{item.title}</a>
            </div>
            {activeMenu === item.id &&
              item.submenus &&
              item.submenus.length > 0 && (
                <div className="hidden sm:block">
                  <SubMenu
                    subMenu={item.submenus}
                    level={level + 1}
                    left={
                      liRef.current[activeMenu].getBoundingClientRect().left
                    }
                    top={
                      liRef.current[activeMenu].getBoundingClientRect().bottom
                    }
                    width={
                      liRef.current[activeMenu].getBoundingClientRect().width
                    }
                  />
                </div>
              )}
            {activeMenu === item.id && (
              <div className="block sm:hidden">
                <PainelMultLevel
                  menu={item.submenus}
                  left={ulRef.current.getBoundingClientRect().left}
                  top={
                    ulRef.current.getBoundingClientRect().top +
                    ulRef.current.getBoundingClientRect().height
                  }
                  width={getMultLevelWidth()}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
      {showSideMenu && (
        <SideMenu
          menu={menu.filter(
            (_, index) => index > menu.length - 1 - hiddenItemsCount
          )}
          right={0}
          top={ulRef.current.getBoundingClientRect().bottom + 1}
          setShowSideMenu={setShowSideMenu}
          width={
            ulRef.current.getBoundingClientRect().width +
            sideMenuRef.current.getBoundingClientRect().width
          }
        />
      )}
      {hiddenItemsCount > 0 && (
        <div
          ref={sideMenuRef}
          className="flex items-center justify-center w-[60px] h-[32px] min-w-[3.5rem] text-xs uppercase border-r border-nav-border text-nav-text cursor-pointer"
          onMouseEnter={() => {
            setShowSideMenu(true);
            setImageSrc("/img/sideExtraMenuWhite.png");
          }}
          onMouseLeave={() => {
            setShowSideMenu(false);
            setImageSrc("/img/sideExtraMenu.png");
          }}
        >
          <Image
            src={imageSrc}
            alt="Logo"
            width={50}
            height={30}
            className="w-[30px] h-[20px]"
          />
        </div>
      )}
    </div>
  );
};

export default InnerMenu;
