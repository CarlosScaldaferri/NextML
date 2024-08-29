import { useEffect, useRef, useState } from "react";
import PainelMultLevel from "../painelMultLevel/PainelMultLevel";
import Image from "next/image";

const SubMenu = ({ subMenu, level = 0, top = 0, left = 0, width = 0 }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [newLeft, setSetNewLeft] = useState(left);
  const liRef = useRef({});
  const ulRef = useRef(null);

  const calcLeft = () => {
    if (!ulRef.current) return left;
    const parentRect = ulRef.current.getBoundingClientRect();
    if (parentRect.right + 1 >= window.innerWidth) {
      if (level === 1) {
        return (
          ulRef.current.parentNode.parentNode.getBoundingClientRect().right -
          parentRect.width
        );
      } else {
        return -ulRef.current.offsetWidth;
      }
    }
    return left;
  };

  useEffect(() => {
    setSetNewLeft(calcLeft());
  }, [activeMenu]);
  useEffect(() => {
    setSetNewLeft(calcLeft());
  }, []);

  const getPosition = () => {
    return { top: `${top}px`, left: `${newLeft}px`, minWidth: `${width}px` };
  };

  return (
    <ul
      ref={ulRef}
      style={getPosition()}
      className="
      bg-nav-background 
      text-nav-text
      border border-nav-border
      absolute whitespace-nowrap items-start justify-start cursor-pointer "
    >
      {subMenu?.map((item, index) => (
        <li
          ref={(el) => {
            liRef.current[item.id] = el;
          }}
          key={item.id}
          className="
          hover:bg-nav-backgroundHover
          hover:text-nav-textHover
          flex items-center h-8 pl-3 pr-4 hover:text-white-0 hover:bg-blue-6"
          onMouseEnter={() => {
            setActiveMenu(item.id);
            setSetNewLeft(calcLeft());
          }}
          onMouseLeave={() => {
            setActiveMenu(null);
          }}
        >
          <div className="min-w-[24px] pr-2 ">
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
          <span className="flex-grow mr-4">{item.title}</span>
          {activeMenu === item.id && item.submenus && (
            <div className="hidden sm:block">
              <SubMenu
                subMenu={item.submenus}
                level={level + 1}
                left={liRef.current[activeMenu]?.getBoundingClientRect().width}
                top={
                  index *
                  (liRef.current[activeMenu]?.getBoundingClientRect().height ||
                    0)
                }
              />
            </div>
          )}
          {activeMenu === item.id && item.submenus && (
            <div className="block sm:hidden">
              <PainelMultLevel
                menu={item.submenus}
                left={newLeft}
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
  );
};

export default SubMenu;
