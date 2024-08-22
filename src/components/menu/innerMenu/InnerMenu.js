"use client";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import SubMenu from "../subMenu/SubMenu";
import useResizeObserver from "@/hooks/useResizeObserver/useResizeObserver";
import SideMenu from "../sideMenu/SideMenu"; // Importando o SideMenu
import PainelMultLevel from "../painelMultLevel/PainelMultLevel";

const InnerMenu = ({ menu, level = 0 }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [hiddenItemsCount, setHiddenItemsCount] = useState(null);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null); // Estado para o item selecionado
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

  useResizeObserver(() => {
    setActiveMenu(null);
    updateHiddenItemsCount();
  });

  return (
    <>
      <ul
        ref={ulRef}
        className="flex flex-wrap overflow-hidden h-8 text-xs uppercase border-l border-t border-b"
      >
        {hiddenItemsCount > 0 && (
          <div
            className="flex-none w-[60px] h-[32px] items-center pl-2 pr-2 text-xs uppercase border-r border-white text-black bg-blue-weak hover:bg-blue-strong hover:text-white cursor-pointer "
            onMouseEnter={() => {
              setShowSideMenu(true);
              setSelectedMenuItem(activeMenu);
            }}
            onMouseLeave={() => {
              setShowSideMenu(false);
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
        )}
        {menu.map((item) => (
          <li
            ref={(el) => {
              liRef.current[item.id] = el;
            }}
            key={item.id}
            className="h-full whitespace-nowrapborder-white text-black bg-blue-weak hover:bg-blue-strong hover:text-white flex flex-grow pl-3 pr-3 items-center justify-center flex-shrink-0 border-r cursor-pointer"
            onMouseEnter={() => {
              setActiveMenu(item.id);
            }}
            onMouseLeave={() => {
              setActiveMenu(null);
            }}
          >
            <a>{item.title}</a>
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
                  width={ulRef.current.getBoundingClientRect().width}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
      {showSideMenu && selectedMenuItem && (
        <SideMenu
          menu={menu.filter(
            (_, index) => index > menu.length - 1 - hiddenItemsCount
          )}
          left={ulRef.current.getBoundingClientRect().left}
          top={ulRef.current.getBoundingClientRect().bottom - 1}
          visible={setShowSideMenu}
          width={ulRef.current.getBoundingClientRect().width}
        />
      )}
    </>
  );
};

export default InnerMenu;
