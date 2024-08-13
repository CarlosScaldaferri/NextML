import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <aside className="flex justify-center items-center">
        <div className="w-[80px] h-[80px]">
          <Image
            src="/img/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="w-full h-full"
          />
        </div>
      </aside>
    </div>
  );
};

export default Logo;
