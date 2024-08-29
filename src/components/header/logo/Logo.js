import Image from "next/image";

const Logo = () => {
  return (
    <aside className="flex justify-center items-center">
      <div className="w-[150] h-[150] hidden lg:flex">
        <Image
          src="/img/logo.png"
          alt="Logo"
          width={150}
          height={150}
          className="w-full"
        />
      </div>
      <div className="w-[150] h-[150] flex lg:hidden">
        <Image
          src="/img/logo_.png"
          alt="Logo"
          width={150}
          height={150}
          className="w-full"
        />
      </div>
    </aside>
  );
};

export default Logo;
