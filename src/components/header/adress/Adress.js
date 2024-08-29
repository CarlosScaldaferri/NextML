import Image from "next/image";

const Adress = () => {
  return (
    <aside className="text-white font-Arial gap-4 justify-center items-center">
      <div className="hidden lg:flex w-[16px] h-[16px]">
        <Image
          src="/img/Adress.png"
          alt="Adress"
          width={16}
          height={16}
          className="w-full"
        />
      </div>
      <div className="hidden lg:flex">Atualizar CEP</div>
    </aside>
  );
};

export default Adress;
