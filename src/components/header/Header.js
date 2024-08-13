import Logo from "./logo/Logo";
import MainMenu from "./mainMenu/MainMenu";
import SearchBar from "./searchBar/SearchBar";
import UserBar from "./userBar/UserBar";
import UtilitiesBar from "./utilitiesBar/UtilitiesBar";

const Header = () => {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] grid-rows-2">
      <div className="flex justify-end row-start-1 row-end-3 col-start-1 col-end-1 pt-2 pr-7 pl-7">
        <Logo className="w-full" />
      </div>
      <div className="row-1 col-2 pt-2">
        <SearchBar />
      </div>
      <div className="flex justify-end items-end row-2 col-2 pb-2">
        <MainMenu />
      </div>
      <div className="row-start-1 row-end-1 col-start-3 flex justify-start items-center pt-2 pl-7 min-w-max">
        <UserBar />
      </div>
      <div className="row-start-2 col-start-3 flex justify-start items-end pl-7 pr-7 pb-2 min-w-max">
        <UtilitiesBar />
      </div>
    </div>
  );
};
export default Header;
