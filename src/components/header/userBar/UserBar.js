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
      <div className="hidden lg:flex row-start-1 row-end-1 col-start-2 gap-x-3">
        <div className="text-blue-weak font-bold">LOGIN</div>
        <div className="text-white">OU</div>
      </div>
      <div className="row-start-2 row-end-2 col-start-2 hidden lg:flex">
        <div className="text-blue-weak font-bold">CADASTRO</div>
      </div>
    </div>
  );
};
export default UserBar;
