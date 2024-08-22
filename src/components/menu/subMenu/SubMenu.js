import { useEffect, useRef, useState } from "react";
import PainelMultLevel from "../painelMultLevel/PainelMultLevel";

const SubMenu = ({ subMenu, level = 0, top = 0, left = 0 }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [newLeft, setSetNewLeft] = useState(left);
  const liRef = useRef({});
  const ulRef = useRef(null);

  useEffect(() => {
    const calcLeft = () => {
      if (!ulRef.current) return left;

      const parentRect = ulRef.current.getBoundingClientRect();
      // Se estiver ultrapassando, inverte o lado do submenu
      if (parentRect.right > window.innerWidth) {
        return -ulRef.current.offsetWidth;
      }
      // Caso contrário, posiciona normalmente à direita do item pai
      return left;
    };

    setSetNewLeft(calcLeft());
  }, []); // Array de dependências vazio garante que o efeito rode apenas na primeira renderização

  return (
    <ul
      ref={ulRef}
      style={{ top: `${top}px`, left: `${newLeft}px` }}
      className="absolute text-black bg-blue-weak items-start justify-start cursor-pointer border border-white"
    >
      {subMenu?.map((item, index) => (
        <li
          ref={(el) => {
            liRef.current[item.id] = el;
          }}
          key={item.id}
          className="flex whitespace-nowrap flex-grow items-center h-8 pl-3 pr-10 hover:text-white hover:bg-blue-strong"
          onMouseEnter={() => {
            setActiveMenu(item.id);
          }}
          onMouseLeave={() => {
            setActiveMenu(null);
          }}
        >
          {item.title}

          {activeMenu === item.id && (
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
  );
};

export default SubMenu;
