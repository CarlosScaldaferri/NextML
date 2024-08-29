import Menu from "@/components/menu/Menu";

const menu = [
  {
    id: 1,
    title: "Eletrônicos",
    href: "/eletronicos",
    parentId: null,
    img: "/img/MainMenu/Eletronicos.png",
    submenus: [
      {
        id: 2,
        title: "Televisores",
        href: "/eletronicos/televisores",
        parentId: 1,
        img: "/img/MainMenu/Televisores.png",
        submenus: [
          {
            id: 3,
            title: "LED",
            href: "/eletronicos/televisores/led",
            parentId: 2,
            img: "/img/MainMenu/Desktops.png",
          },
          {
            id: 4,
            title: "OLED",
            href: "/eletronicos/televisores/oled",
            parentId: 2,
            img: "/img/MainMenu/Quebracabecas.png",
          },
          {
            id: 5,
            title: "4K",
            href: "/eletronicos/televisores/4k",
            parentId: 2,
            img: "/img/MainMenu/4K.png",
          },
        ],
      },
      {
        id: 6,
        title: "Computadores",
        href: "/eletronicos/computadores",
        parentId: 1,
        img: "/img/MainMenu/Computadores.png",
        submenus: [
          {
            id: 7,
            title: "Notebooks",
            href: "/eletronicos/computadores/notebooks",
            parentId: 6,
            img: "/img/MainMenu/Notebooks.png",
            submenus: [
              {
                id: 8,
                title: "Ultrabooks",
                href: "/eletronicos/computadores/notebooks/ultrabooks",
                parentId: 7,
                img: "/img/MainMenu/Desktops.png",
              },
              {
                id: 9,
                title: "Gaming",
                href: "/eletronicos/computadores/notebooks/gaming",
                parentId: 7,
                img: "/img/MainMenu/Chaves.png",
              },
            ],
          },
          {
            id: 10,
            title: "Desktops",
            href: "/eletronicos/computadores/desktops",
            parentId: 6,
            img: "/img/MainMenu/Desktops.png",
          },
          {
            id: 11,
            title: "Acessórios",
            href: "/eletronicos/computadores/acessorios",
            parentId: 6,
            img: "/img/MainMenu/Desktops.png",
            submenus: [
              {
                id: 12,
                title: "Teclados",
                href: "/eletronicos/computadores/acessorios/teclados",
                parentId: 11,
                img: "/img/MainMenu/Teclados.png",
              },
              {
                id: 13,
                title: "Mouses",
                href: "/eletronicos/computadores/acessorios/mouses",
                parentId: 11,
                img: "/img/MainMenu/Desktops.png",
              },
            ],
          },
        ],
      },
      {
        id: 14,
        title: "Celulares",
        href: "/eletronicos/celulares",
        parentId: 1,
        img: "/img/MainMenu/Televisores.png",
        submenus: [
          {
            id: 15,
            title: "Smartphones",
            href: "/eletronicos/celulares/smartphones",
            parentId: 14,
            img: "/img/MainMenu/Smartphones.png",
          },
          {
            id: 16,
            title: "Acessórios",
            href: "/eletronicos/celulares/acessorios",
            parentId: 14,
            img: "/img/MainMenu/Quebracabecas.png",
            submenus: [
              {
                id: 17,
                title: "Capas",
                href: "/eletronicos/celulares/acessorios/capas",
                parentId: 16,
                img: "/img/MainMenu/Televisores.png",
              },
              {
                id: 18,
                title: "Carregadores",
                href: "/eletronicos/celulares/acessorios/carregadores",
                parentId: 16,
                img: "/img/MainMenu/Quebracabecas.png",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 19,
    title: "Vestuário",
    href: "/vestuario",
    parentId: null,
    img: "/img/MainMenu/Quebracabecas.png",
    submenus: [
      {
        id: 20,
        title: "Masculino",
        href: "/vestuario/masculino",
        parentId: 19,
        img: "/img/MainMenu/Televisores.png",
        submenus: [
          {
            id: 21,
            title: "Camisetas",
            href: "/vestuario/masculino/camisetas",
            parentId: 20,
            img: "/img/MainMenu/Desktops.png",
          },
          {
            id: 22,
            title: "Calças",
            href: "/vestuario/masculino/calcas",
            parentId: 20,
            img: "/img/MainMenu/Desktops.png",
          },
          {
            id: 23,
            title: "Calçados",
            href: "/vestuario/masculino/calcados",
            parentId: 20,
            img: "/img/MainMenu/Desktops.png",
          },
        ],
      },
      {
        id: 24,
        title: "Feminino",
        href: "/vestuario/feminino",
        parentId: 19,
        img: "/img/MainMenu/Televisores.png",
        submenus: [
          {
            id: 25,
            title: "Vestidos",
            href: "/vestuario/feminino/vestidos",
            parentId: 24,
            img: "/img/MainMenu/Quebracabecas.png",
          },
          {
            id: 26,
            title: "Saias",
            href: "/vestuario/feminino/saias",
            parentId: 24,
            img: "/img/MainMenu/Shampoos.png",
          },
          {
            id: 27,
            title: "Calçados",
            href: "/vestuario/feminino/calcados",
            parentId: 24,
            img: "/img/MainMenu/Shampoos.png",
          },
        ],
      },
      {
        id: 28,
        title: "Infantil",
        href: "/vestuario/infantil",
        parentId: 19,
        img: "/img/MainMenu/Shampoos.png",
        submenus: [
          {
            id: 29,
            title: "Roupas",
            href: "/vestuario/infantil/roupas",
            parentId: 28,
            img: "/img/MainMenu/Roupas.png",
          },
          {
            id: 30,
            title: "Calçados",
            href: "/vestuario/infantil/calcados",
            parentId: 28,
            img: "/img/MainMenu/Quebracabecas.png",
          },
        ],
      },
    ],
  },
  {
    id: 31,
    title: "Casa e Cozinha",
    href: "/casa-e-cozinha",
    parentId: "/casa-e-cozinha/moveis/sofas",
    img: "/img/MainMenu/Sofas.png",
    submenus: [
      {
        id: 32,
        title: "Móveis",
        href: "/casa-e-cozinha/moveis",
        parentId: 31,
        img: "/img/MainMenu/Roupas.png",
        submenus: [
          {
            id: 33,
            title: "Sofás",
            href: "/casa-e-cozinha/moveis/sofas",
            parentId: 32,
            img: "/img/MainMenu/Sofas.png",
          },
          {
            id: 34,
            title: "Camas",
            href: "/casa-e-cozinha/moveis/camas",
            parentId: 32,
            img: "/img/MainMenu/Camas.png",
          },
        ],
      },
      {
        id: 35,
        title: "Utensílios",
        href: "/casa-e-cozinha/utensilios",
        parentId: 31,
        img: "/img/MainMenu/Roupas.png",
        submenus: [
          {
            id: 36,
            title: "Panelas",
            href: "/casa-e-cozinha/utensilios/panelas",
            parentId: 35,
            img: "/img/MainMenu/Roupas.png",
          },
          {
            id: 37,
            title: "Talheres",
            href: "/casa-e-cozinha/utensilios/talheres",
            parentId: 35,
            img: "/img/MainMenu/Talheres.png",
          },
        ],
      },
      {
        id: 38,
        title: "Decoração",
        href: "/casa-e-cozinha/decoracao",
        parentId: 31,
        img: "/img/MainMenu/Roupas.png",
        submenus: [
          {
            id: 39,
            title: "Quadros",
            href: "/casa-e-cozinha/decoracao/quadros",
            parentId: 38,
            img: "/img/MainMenu/Quadros.png",
          },
          {
            id: 40,
            title: "Vasos",
            href: "/casa-e-cozinha/decoracao/vasos",
            parentId: 38,
            img: "/img/MainMenu/Quebracabecas.png",
          },
        ],
      },
    ],
  },
  {
    id: 41,
    title: "Esporte e Lazer",
    href: "/esporte-e-lazer",
    parentId: null,
    img: "/img/MainMenu/Televisores.png",
    submenus: [
      {
        id: 42,
        title: "Esportes",
        href: "/esporte-e-lazer/esportes",
        parentId: 41,
        img: "/img/MainMenu/Talheres.png",
        submenus: [
          {
            id: 43,
            title: "Futebol",
            href: "/esporte-e-lazer/esportes/futebol",
            parentId: 42,
            img: "/img/MainMenu/Quebracabecas.png",
            submenus: [
              {
                id: 81,
                title: "Equipamentos",
                href: "/esporte-e-lazer/esportes/futebol/equipamentos",
                parentId: 43,
                img: "/img/MainMenu/Quebracabecas.png",
              },
              {
                id: 82,
                title: "Uniformes",
                href: "/esporte-e-lazer/esportes/futebol/uniformes",
                parentId: 43,
                img: "/img/MainMenu/Roupas.png",
              },
            ],
          },
          {
            id: 44,
            title: "Basquete",
            href: "/esporte-e-lazer/esportes/basquete",
            parentId: 42,
            img: "/img/MainMenu/Talheres.png",
          },
        ],
      },
      {
        id: 45,
        title: "Camping",
        href: "/esporte-e-lazer/camping",
        parentId: 41,
        img: "/img/MainMenu/Roupas.png",
        submenus: [
          {
            id: 46,
            title: "Barracas",
            href: "/esporte-e-lazer/camping/barracas",
            parentId: 45,
            img: "/img/MainMenu/Quebracabecas.png",
          },
          {
            id: 47,
            title: "Mochilas",
            href: "/esporte-e-lazer/camping/mochilas",
            parentId: 45,
            img: "/img/MainMenu/Talheres.png",
          },
        ],
      },
      {
        id: 48,
        title: "Fitness",
        href: "/esporte-e-lazer/fitness",
        parentId: 41,
        img: "/img/MainMenu/Talheres.png",
        submenus: [
          {
            id: 49,
            title: "Halteres",
            href: "/esporte-e-lazer/fitness/halteres",
            parentId: 48,
            img: "/img/MainMenu/Halteres.png",
          },
          {
            id: 50,
            title: "Esteiras",
            href: "/esporte-e-lazer/fitness/esteiras",
            parentId: 48,
            img: "/img/MainMenu/Televisores.png",
          },
        ],
      },
    ],
  },
  {
    id: 51,
    title: "Livros",
    href: "/livros",
    parentId: null,
    img: "/img/MainMenu/Livros.png",
    submenus: [
      {
        id: 52,
        title: "Ficção",
        href: "/livros/ficcao",
        parentId: 51,
        img: "/img/MainMenu/Quebracabecas.png",
        submenus: [
          {
            id: 53,
            title: "Romance",
            href: "/livros/ficcao/romance",
            parentId: 52,
            img: "/img/MainMenu/Motos.png",
          },
          {
            id: 54,
            title: "Aventura",
            href: "/livros/ficcao/aventura",
            parentId: 52,
            img: "/img/MainMenu/Halteres.png",
          },
        ],
      },
      {
        id: 55,
        title: "Não-Ficção",
        href: "/livros/nao-ficcao",
        parentId: 51,
        img: "/img/MainMenu/Halteres.png",
        submenus: [
          {
            id: 56,
            title: "Biografias",
            href: "/livros/nao-ficcao/biografias",
            parentId: 55,
            img: "/img/MainMenu/Roupas.png",
          },
          {
            id: 57,
            title: "Autoajuda",
            href: "/livros/nao-ficcao/autoajuda",
            parentId: 55,
            img: "/img/MainMenu/Carros.png",
          },
        ],
      },
    ],
  },
  {
    id: 58,
    title: "Automotivo",
    href: "/automotivo",
    parentId: null,
    img: "/img/MainMenu/Halteres.png",
    submenus: [
      {
        id: 59,
        title: "Carros",
        href: "/automotivo/carros",
        parentId: 58,
        img: "/img/MainMenu/Carros.png",
        submenus: [
          {
            id: 60,
            title: "Novos",
            href: "/automotivo/carros/novos",
            parentId: 59,
            img: "/img/MainMenu/Novos.png",
          },
          {
            id: 61,
            title: "Usados",
            href: "/automotivo/carros/usados",
            parentId: 59,
            img: "/img/MainMenu/Novos.png",
          },
        ],
      },
      {
        id: 62,
        title: "Motos",
        href: "/automotivo/motos",
        parentId: 58,
        img: "/img/MainMenu/Motos.png",
      },
      {
        id: 63,
        title: "Acessórios",
        href: "/automotivo/acessorios",
        parentId: 58,
        img: "/img/MainMenu/Halteres.png",
        submenus: [
          {
            id: 64,
            title: "Óleos",
            href: "/automotivo/acessorios/oleos",
            parentId: 63,
            img: "/img/MainMenu/Televisores.png",
          },
          {
            id: 65,
            title: "Baterias",
            href: "/automotivo/acessorios/baterias",
            parentId: 63,
            img: "/img/MainMenu/Novos.png",
          },
        ],
      },
    ],
  },
  {
    id: 66,
    title: "Saúde e Beleza",
    href: "/saude-e-beleza",
    parentId: null,
    img: "/img/MainMenu/Carros.png",
    submenus: [
      {
        id: 67,
        title: "Cuidados com a Pele",
        href: "/saude-e-beleza/cuidados-com-a-pele",
        parentId: 66,
        img: "/img/MainMenu/Carros.png",
        submenus: [
          {
            id: 68,
            title: "Creme Hidratante",
            href: "/saude-e-beleza/cuidados-com-a-pele/creme-hidratante",
            parentId: 67,
            img: "/img/MainMenu/Novos.png",
          },
          {
            id: 69,
            title: "Protetor Solar",
            href: "/saude-e-beleza/cuidados-com-a-pele/protetor-solar",
            parentId: 67,
            img: "/img/MainMenu/Carros.png",
          },
        ],
      },
      {
        id: 70,
        title: "Maquiagem",
        href: "/saude-e-beleza/maquiagem",
        parentId: 66,
        img: "/img/MainMenu/Carros.png",
        submenus: [
          {
            id: 71,
            title: "Bases",
            href: "/saude-e-beleza/maquiagem/bases",
            parentId: 70,
            img: "/img/MainMenu/Carros.png",
          },
          {
            id: 72,
            title: "Batons",
            href: "/saude-e-beleza/maquiagem/batons",
            parentId: 70,
            img: "/img/MainMenu/Batons.png",
          },
        ],
      },
      {
        id: 73,
        title: "Cuidados com o Cabelo",
        href: "/saude-e-beleza/cuidados-com-o-cabelo",
        parentId: 66,
        img: "/img/MainMenu/Novos.png",
        submenus: [
          {
            id: 74,
            title: "Shampoos",
            href: "/saude-e-beleza/cuidados-com-o-cabelo/shampoos",
            parentId: 73,
            img: "/img/MainMenu/Shampoos.png",
          },
          {
            id: 75,
            title: "Condicionadores",
            href: "/saude-e-beleza/cuidados-com-o-cabelo/condicionadores",
            parentId: 73,
            img: "/img/MainMenu/Carros.png",
          },
        ],
      },
    ],
  },
  {
    id: 76,
    title: "Brinquedos",
    href: "/brinquedos",
    parentId: null,
    img: "/img/MainMenu/Televisores.png",
    submenus: [
      {
        id: 77,
        title: "Infantis",
        href: "/brinquedos/infantis",
        parentId: 76,
        img: "/img/MainMenu/Quebracabecas.png",
        submenus: [
          {
            id: 78,
            title: "Carrinhos",
            href: "/brinquedos/infantis/carrinhos",
            parentId: 77,
            img: "/img/MainMenu/Carrinhos.png",
          },
          {
            id: 79,
            title: "Bonecas",
            href: "/brinquedos/infantis/bonecas",
            parentId: 77,
            img: "/img/MainMenu/Carros.png",
          },
        ],
      },
      {
        id: 80,
        title: "Educativos",
        href: "/brinquedos/educativos",
        parentId: 76,
        img: "/img/MainMenu/Carrinhos.png",
        submenus: [
          {
            id: 81,
            title: "Quebra-cabeças",
            href: "/brinquedos/educativos/quebra-cabecas",
            parentId: 80,
            img: "/img/MainMenu/Quebracabecas.png",
          },
          {
            id: 82,
            title: "Livros",
            href: "/brinquedos/educativos/livros",
            parentId: 80,
            img: "/img/MainMenu/Carrinhos.png",
          },
        ],
      },
    ],
  },
  {
    id: 83,
    title: "Ferramentas",
    href: "/ferramentas",
    parentId: null,
    img: "/img/MainMenu/Carrinhos.png",
    submenus: [
      {
        id: 84,
        title: "Elétricas",
        href: "/ferramentas/eletricas",
        parentId: 83,
        img: "/img/MainMenu/Quebracabecas.png",
        submenus: [
          {
            id: 85,
            title: "Furadeiras",
            href: "/ferramentas/eletricas/furadeiras",
            parentId: 84,
            img: "/img/MainMenu/Quebracabecas.png",
          },
          {
            id: 86,
            title: "Lixadeiras",
            href: "/ferramentas/eletricas/lixadeiras",
            parentId: 84,
            img: "/img/MainMenu/Carrinhos.png",
          },
        ],
      },
      {
        id: 87,
        title: "Manuais",
        href: "/ferramentas/manuais",
        parentId: 83,
        img: "/img/MainMenu/Shampoos.png",
        submenus: [
          {
            id: 88,
            title: "Chaves",
            href: "/ferramentas/manuais/chaves",
            parentId: 87,
            img: "/img/MainMenu/Chaves.png",
          },
          {
            id: 89,
            title: "Martelos",
            href: "/ferramentas/manuais/martelos",
            parentId: 87,
            img: "/img/MainMenu/Martelos.png",
          },
        ],
      },
    ],
  },
];

const MainMenu = () => {
  return <Menu menu={menu} />;
};

export default MainMenu;
