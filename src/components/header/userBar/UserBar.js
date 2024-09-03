"use client";
import Image from "next/image";
import Link from "next/link";

const UserBar = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 text-xs gap-x-[0.40rem] items-center justify-center">
      <Image
        src="/img/user.png"
        width={30}
        height={30}
        className="col-start-1 col-end-1 row-start-1 row-end-3 w-10 h-10"
        alt="User Icon"
      />
      <Link href="/auth/signin">
        <Image
          src="/img/login.png"
          width={30}
          height={30}
          className="col-start-2 col-end-2 row-start-1 row-end-1 w-4 h-4 cursor-pointer"
          alt="Login Icon"
        />
      </Link>
      <Link href="/auth/register">
        <Image
          src="/img/register.png"
          width={30}
          height={30}
          className="col-start-2 col-end-2 row-start-2 row-end-2 w-4 h-4 cursor-pointer"
          alt="Register Icon"
        />
      </Link>
      {/* <div className="hidden sm:flex row-start-1 row-end-1 col-start-2 pb-[0.05rem]">
        <a
          className="flex items-center text-link-default w-20 bg-text-terciaria pl-[0.4rem] cursor-pointer"
          
        >
          LOGIN
        </a>
      </div>
      <div className="hidden sm:flex row-start-2 row-end-2 col-start-2">
        <a
          className="flex items-center text-link-default w-20 bg-text-terciaria pl-[0.4rem] cursor-pointer"
          
        >
          CADASTRO
        </a>
      </div> */}
    </div>
  );
};

export default UserBar;
