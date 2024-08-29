import InnerMenu from "./innerMenu/InnerMenu";

const Menu = ({ menu, level = 0, breackLevel = 0 }) => {
  return (
    <nav
      className="
      bg-nav-background
      text-nav-text
      flex flex-grow min-w-[35px]"
    >
      <InnerMenu menu={menu} level={level} breackLevel={breackLevel} />
    </nav>
  );
};

export default Menu;
