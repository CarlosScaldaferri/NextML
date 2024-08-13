"use client";
import React, { useRef, useState, useEffect } from "react";

const SideMenu = ({
  menu,
  hiddenMenu,
  parentId = null,
  setShowSideMenu = null,
}) => {
  const subNavRef = useRef(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuPositions, setMenuPositions] = useState({});

  useEffect(() => {
    const updatePositions = () => {
      if (subNavRef.current) {
        let positions = {};
        const rectParent = subNavRef.current.parentNode.getBoundingClientRect();
        const rect = subNavRef.current.getBoundingClientRect();
        positions = {
          left: rectParent.left,
          width: rect.width,
        };

        setMenuPositions(positions);
      }
    };
    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => {
      window.removeEventListener("resize", updatePositions);
    };
  }, [activeMenu]);

  const handleMouseEnter = (id) => {
    setActiveMenu(id);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const items = menu.filter((item) => {
    const isInSubMenu = hiddenMenu.some(
      (hiddenItem) => hiddenItem.id === item.id
    );
    return (
      (!parentId && item.parentId === parentId && isInSubMenu) ||
      (parentId && item.parentId === parentId)
    );
  });

  return (
    <>
      {items.length === 0 ? null : (
        <nav
          ref={subNavRef}
          className={`absolute flex flex-row ${
            parentId ? "" : "top-[5.6rem]"
          } font-arial border border-white bg-blue-weak`}
          onMouseLeave={() => setShowSideMenu && setShowSideMenu(false)}
        >
          <ul className="justify-end text-xs uppercase">
            {items.map((item) => (
              <li
                key={item.id}
                data-id={item.id}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
                className={`relative flex flex-grow whitespace-nowrap ${
                  parentId ? "justify-start" : "justify-center pr-3 pl-3"
                } h-8 w-auto text-black hover:bg-blue-strong hover:text-white`}
              >
                <div
                  className={`flex items-center ${
                    parentId ? "space-x-10 pr-3" : ""
                  }`}
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
                      activeMenu === item.id ? "block" : "hidden"
                    }`}
                    style={{
                      left: `-${
                        !item.parentId
                          ? menuPositions?.left
                          : menuPositions?.width
                      }px`,
                      top: -1,
                    }}
                  >
                    <SideMenu
                      menu={menu}
                      hiddenMenu={hiddenMenu}
                      parentId={item.id}
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default SideMenu;
