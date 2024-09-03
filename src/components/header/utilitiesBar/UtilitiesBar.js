const { default: Image } = require("next/image");

const UtilitiesBar = () => {
  return (
    <div className="flex gap-x-2">
      <Image
        src="/img/cart.png"
        width={100}
        height={100}
        className="w-10 h-10"
      />
      <Image
        src="/img/favorites.png"
        width={30}
        height={30}
        className="w-10 h-10 hidden sm:flex"
      />
      <Image
        src="/img/sac.png"
        width={30}
        height={30}
        className="w-10 h-10 hidden sm:flex"
      />
    </div>
  );
};
export default UtilitiesBar;
