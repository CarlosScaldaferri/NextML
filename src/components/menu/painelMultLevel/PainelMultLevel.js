const PainelMultLevel = ({ menu, width = 200, top = 0, left = 0 }) => {
  // Função para renderizar o menu recursivamente
  const renderMenu = (items, level = 0) => {
    // Alterna as cores entre os níveis com tons de azul mais suaves usando Tailwind
    const backgroundColorClass =
      level % 2 === 0 ? "bg-blue-100" : "bg-blue-200"; // Tons de azul mais suaves
    const textColorClass = "text-black"; // Texto preto para ambos os níveis
    return (
      <div className={`${backgroundColorClass} ${textColorClass} p-2`}>
        {items.map((item) => {
          const isLeaf = !(item.submenus && item.submenus.length > 0);

          return (
            <div key={item.id} className="mb-2">
              <div
                className={`${
                  isLeaf
                    ? "font-normal cursor-pointer hover:bg-blue-500 hover:text-white"
                    : "font-bold cursor-not-allowed"
                } transition duration-300 p-2`}
                onClick={() => {
                  if (isLeaf) {
                    window.location.href = item.href || "#"; // Ação de clique para nós folha
                  }
                }}
              >
                {item.submenus && item.submenus.length > 0 ? (
                  <span>{item.title}</span>
                ) : (
                  <a
                    href={item.href || "#"}
                    className={`hover:underline text-blue-link`}
                    onClick={(e) => {
                      if (!isLeaf) e.preventDefault(); // Impede o clique para itens não folha
                    }}
                  >
                    {item.title}
                  </a>
                )}
              </div>

              {/* Renderiza submenus em um novo bloco abaixo do pai */}
              {!isLeaf && (
                <div className="mt-2">
                  {renderMenu(item.submenus, level + 1)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div
      className="absolute border border-white shadow-lg"
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
