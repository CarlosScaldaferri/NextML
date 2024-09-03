import Image from "next/image";

const Adress = () => {
  return (
    <aside className="flex text-white font-Arial justify-center items-center">
      <Image
        src="/img/Adress.png"
        alt="Adress"
        width={40}
        height={40}
        className="w-10 h-10"
      />
    </aside>
  );
};

export default Adress;
