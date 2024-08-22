import { useRef, useState } from "react";
import SubMenu from "../subMenu/SubMenu";
import PainelMultLevel from "../painelMultLevel/PainelMultLevel";

const SideMenu = ({
  menu,
  level = 0,
  top = 0,
  left = 0,
  width = 0,
  visible = null,
}) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const ulRef = useRef(null);
  const liRef = useRef({});
  return (
    <ul
      ref={ulRef}
      style={{ top: `${top}px`, left: `${left}px`, width: `${width}px` }}
      className="absolute text-black bg-blue-weak items-start justify-start cursor-pointer border border-white"
    >
      {menu?.map((item, index) => (
        <li
          ref={(el) => {
            liRef.current[item.id] = el;
          }}
          key={item.id}
          className="flex whitespace-nowrap flex-grow items-center h-8 pl-3 pr-10 hover:text-white hover:bg-blue-strong"
          onMouseEnter={() => {
            visible(true);
            setActiveMenu(item.id);
          }}
          onMouseLeave={() => {
            visible(false);
            setActiveMenu(null);
          }}
        >
          {item.title}
          {activeMenu === item.id &&
            item.submenus &&
            item.submenus.length > 0 && (
              <div className="hidden sm:block">
                <SubMenu
                  subMenu={item.submenus}
                  level={level + 1}
                  left={liRef.current[activeMenu].getBoundingClientRect().width}
                  top={
                    liRef.current[activeMenu].getBoundingClientRect().height *
                    index
                  }
                />
              </div>
            )}

          {activeMenu === item.id && (
            <div className="block sm:hidden">
              <PainelMultLevel
                menu={item.submenus}
                left={0}
                top={ulRef.current.getBoundingClientRect().height}
                width={ulRef.current.getBoundingClientRect().width}
              />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};
export default SideMenu;
