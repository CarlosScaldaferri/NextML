const PainelMultLevel = ({ menu, width = 200, top = 0, left = 0 }) => {
  // Função para renderizar o menu recursivamente
  const renderMenu = (items, level = 0) => {
    // Calcula o espaço de indentação baseado no nível
    const indentStyle = { marginLeft: `${level * 16}px` };

    return (
      <div>
        {items.map((item, index, arr) => {
          // Verifica se o item é um nó folha
          const isLeaf = !(item.submenus && item.submenus.length > 0);
          // Verifica se há irmãos com filhos
          const hasSiblingWithChildren = arr.some(
            (sibling) =>
              sibling.id !== item.id &&
              sibling.submenus &&
              sibling.submenus.length > 0
          );

          // Renderiza o item folha com o pai não link, se necessário
          if (isLeaf && hasSiblingWithChildren) {
            return (
              <div key={item.id} className="mt-2" style={indentStyle}>
                {/* Renderiza o pai não link */}
                <div className="font-bold">{item.title}</div>
                {/* Renderiza o item folha como link */}
                <a
                  href={item.href || "#"}
                  className="text-blue-500 hover:underline ml-4"
                >
                  {item.title}
                </a>
              </div>
            );
          }

          // Caso padrão: Renderiza o item normalmente
          return (
            <div key={item.id} className="mt-2" style={indentStyle}>
              {item.submenus && item.submenus.length > 0 ? (
                <>
                  {/* Renderiza o item que possui submenus */}
                  <div className="font-bold">{item.title}</div>
                  {renderMenu(item.submenus, level + 1)}
                </>
              ) : (
                <a
                  href={item.href || "#"}
                  className="text-blue-500 hover:underline"
                >
                  {item.title}
                </a>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div
      className="absolute p-5 border border-white text-black bg-white"
      style={{ width: `${width}px`, top: `${top}px`, left: `${left}px` }}
    >
      {renderMenu(menu)}
    </div>
  );
};

export default PainelMultLevel;
