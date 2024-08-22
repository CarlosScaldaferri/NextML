import InnerMenu from "./innerMenu/InnerMenu";

const Menu = ({ menu, level = 0, breackLevel = 0 }) => {
  return (
    <nav className="w-full max-w-full min-w-[35px]">
      <InnerMenu menu={menu} level={level} breackLevel={breackLevel} />
    </nav>
  );
};

export default Menu;
