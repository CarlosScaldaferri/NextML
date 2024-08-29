import Image from "next/image";
import Input from "@/components/form/input/Input";

const SearchBar = () => {
  return (
    <div
      className="flex justify-between items-center h-10
      bg-input-background
      text-input-text
      border-input-border"
    >
      <div
        className="
        bg-button-background 
        text-button-text border 
        border-button-border 
        hover:bg-button-hoverBackground
        hover:text-button-hoverText
      hidden sm:flex items-center p-[0.7rem] text-xs text-nowrap"
      >
        TODOS ▾
      </div>
      <div
        className="
        bg-button-background 
        text-button-text   
        border-button-border 
        hover:bg-button-hoverBackground
        hover:text-button-hoverText
      flex sm:hidden items-center p-[0.7rem] text-xs bg-blue-9 border text-nowrap"
      >
        ▾
      </div>
      <div className="flex flex-grow w-max min-w-[35px]">
        <input
          type="text"
          className="flex flex-grow w-full p-2 focus:outline-none"
        />
      </div>

      <Image
        src="/img/search.png"
        alt="search"
        width="40"
        height="32"
        className="
        bg-button-background 
        text-button-text 
        border-button-border 
        hover:bg-button-hoverBackground
        hover:text-button-hoverText
        p-2 bg-blue-9 border"
      />
    </div>
  );
};

export default SearchBar;
