import Image from "next/image";
import Imput from "@/components/form/imput/Imput";

const SearchBar = () => {
  return (
    <div className="flex bg-white h-10">
      <div className="flex items-center p-2 text-xs bg-blue-weak border text-nowrap">
        TODOS ▾
      </div>
      <div className="h-full w-1 border"></div>
      <Imput
        type="text"
        className="flex flex-grow m-3 w-max focus:outline-none"
        placeholder="Pesquisar..."
      />
      <div className="h-full w-1 border"></div>
      <Image
        src="/img/search.png"
        alt="search"
        width="40"
        height="32"
        className="p-2 bg-blue-weak border"
      />
    </div>
  );
};

export default SearchBar;
