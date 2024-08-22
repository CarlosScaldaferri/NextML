import Menu from "./menu/Menu";

const NavMenu = ({
  menu,
  level = 0,
  left = 0,
  top = 0,
  width = 0,
  isSideMenu = false,
}) => {
  return (
    <nav className="font-arial">
      <Menu
        menu={menu}
        level={level}
        left={left}
        top={top}
        width={width}
        isSideMenu={isSideMenu}
      />
    </nav>
  );
};

export default NavMenu;
