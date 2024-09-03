import Image from "next/image";

const PainelMultLevel = ({ menu, width = 200, top = 0, left = 0 }) => {
  const renderMenu = (items, level = 0) => {
    const backgroundColorClass =
      level % 2 === 0 ? "bg-nav-background__" : "bg-nav-background_";
    const textColorClass = "text-black";

    return (
      <div className={`${backgroundColorClass} ${textColorClass} p-2`}>
        {items.map((item) => {
          const isLeaf = !(item.submenus && item.submenus.length > 0);

          return (
            <div key={item.id} className="mb-2">
              <div
                className={`${
                  isLeaf
                    ? "font-normal cursor-pointer hover:text-white"
                    : "font-bold cursor-not-allowed"
                } p-2`}
                onClick={() => {
                  if (isLeaf) {
                    window.location.href = item.href || "#";
                  }
                }}
              >
                {item.submenus && item.submenus.length > 0 ? (
                  <div className="flex">
                    <div className="flex min-w-[24px] w-[16px] h-[16px] pr-2">
                      {item.img && (
                        <Image
                          src={item.img}
                          width={24}
                          height={24}
                          alt={item.title}
                        />
                      )}
                    </div>
                    <span>{item.title}</span>
                  </div>
                ) : (
                  <a
                    href={item.href || "#"}
                    className={`hover:underline text-blue-link`}
                    onClick={(e) => {
                      if (!isLeaf) e.preventDefault();
                    }}
                  >
                    <div className="flex">
                      <div className="flex min-w-[24px] w-[16px] h-[16px] pr-2">
                        {item.img && (
                          <Image
                            src={item.img}
                            width={24}
                            height={24}
                            alt={item.title}
                          />
                        )}
                      </div>
                      {item.title}
                    </div>
                  </a>
                )}
              </div>
              {!isLeaf && <div>{renderMenu(item.submenus, level + 1)}</div>}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div
      className="absolute shadow-lg"
      style={{
        width: `${width}px`,
        top: `${top}px`,
        left: `${left}px`,
      }}
    >
      {renderMenu(menu)}
    </div>
  );
};

export default PainelMultLevel;
