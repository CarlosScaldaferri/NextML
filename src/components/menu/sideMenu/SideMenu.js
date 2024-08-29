import { useEffect, useRef, useState } from "react";
import SubMenu from "../subMenu/SubMenu";
import PainelMultLevel from "../painelMultLevel/PainelMultLevel";
import Image from "next/image";

const SideMenu = ({
  menu,
  level = 0,
  top = 0,
  right = 0,
  width = 0,
  setShowSideMenu = null,
}) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const ulRef = useRef(null);
  const liRef = useRef({});
  const calcStyle = () => {
    if (windowWidth < 640) {
      return { top: `${top}px`, right: `${right}px`, width: `${width}px` };
    } else {
      return { top: `${top}px`, right: `${right}px` };
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ul
      ref={ulRef}
      style={calcStyle()}
      className={`
        bg-nav-background
        text-nav-text
        absolute bg-blue-9 items-start justify-start cursor-pointer`}
    >
      {menu?.map((item, index) => (
        <li
          ref={(el) => {
            liRef.current[item.id] = el;
          }}
          key={item.id}
          className="
          hover:bg-nav-backgroundHover
          hover:text-nav-textHover 
          flex whitespace-nowrap flex-grow items-center h-8 pl-3 pr-10 hover:text-white-0 hover:bg-blue-6"
          onMouseEnter={() => {
            setActiveMenu(item.id);
            setShowSideMenu(true);
          }}
          onMouseLeave={() => {
            setActiveMenu(null);
            setShowSideMenu(false);
          }}
        >
          {
            <div className="flex min-w-[24px] w-4 pr-2">
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
            </div>
          }
          {item.title}

          {activeMenu === item.id && (
            <div className="hidden sm:block">
              <SubMenu
                subMenu={item.submenus}
                level={level + 1}
                left={
                  liRef.current[activeMenu]?.getBoundingClientRect().width || 0
                }
                top={
                  (liRef.current[activeMenu]?.getBoundingClientRect().height ||
                    0) * index
                }
              />
            </div>
          )}

          {/* PainelMultLevel para dispositivos móveis */}
          {activeMenu === item.id && (
            <div className="block sm:hidden">
              <PainelMultLevel
                menu={item.submenus}
                left={0}
                top={ulRef.current?.getBoundingClientRect().height || 0}
                width={ulRef.current?.getBoundingClientRect().width || 0}
              />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SideMenu;
