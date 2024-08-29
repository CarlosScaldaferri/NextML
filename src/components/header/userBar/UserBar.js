"use client";
import Image from "next/image";

const UserBar = () => {
  return (
    <div className="grid grid-col-2 grid-row-2 text-xs gap-x-2">
      <Image
        src="/img/user.png"
        width={30}
        height={30}
        className="row-start-1 row-end-3 col-start-1 w-8 h-8"
      />
      <div className="hidden sm:flex row-start-1 row-end-1 col-start-2 gap-x-3">
        <div className="text-link-default cursor-pointer" href="/auth/signin">
          LOGIN
        </div>
        <div className="text-white-0">OU</div>
      </div>
      <div className="row-start-2 row-end-2 col-start-2 hidden sm:flex">
        <a className="text-link-default cursor-pointer" href="/auth/register">
          CADASTRO
        </a>
      </div>
    </div>
  );
};
export default UserBar;
