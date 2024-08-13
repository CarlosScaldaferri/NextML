import Menu from "@/components/menu/Menu";
const menu = [
  {
    id: 1,
    title: "Categorias",
    parentId: null,
  },
  {
    id: 2,
    title: "Ofertas",
    parentId: null,
  },
  {
    id: 3,
    title: "Histórico",
    parentId: null,
  },
  {
    id: 4,
    title: "Supermercado",
    parentId: null,
  },
  {
    id: 5,
    title: "Moda",
    parentId: null,
  },
  {
    id: 6,
    title: "Mercado Play",
    parentId: null,
  },
  {
    id: 7,
    title: "Vender",
    parentId: null,
  },
  {
    id: 8,
    title: "Contato",
    parentId: null,
  },
  {
    id: "1.1",
    title: "Eletrônicos",
    parentId: 1,
  },
  {
    id: "1.2",
    title: "Roupas",
    parentId: 1,
  },
  {
    id: "1.3",
    title: "Casa",
    parentId: 1,
  },
  {
    id: "1.4",
    title: "Livros",
    parentId: 1,
  },
  {
    id: "1.5",
    title: "Brinquedos",
    parentId: 1,
  },
  {
    id: "1.4.1",
    title: "Ficção",
    parentId: "1.4",
  },
  {
    id: "1.4.2",
    title: "Não-Ficção",
    parentId: "1.4",
  },
  {
    id: "1.4.3",
    title: "Biografias",
    parentId: "1.4",
  },
  {
    id: "1.4.4",
    title: "História",
    parentId: "1.4",
  },
  {
    id: "1.4.5",
    title: "Ciência",
    parentId: "1.4",
  },
  {
    id: "1.4.1.1",
    title: "Ficção cientifica",
    parentId: "1.4.1",
  },
  {
    id: "8.1",
    title: "E-mail",
    parentId: 8,
  },
  {
    id: "8.1.1",
    title: "SAC",
    parentId: "8.1",
  },
  {
    id: "8.1.2",
    title: "Vendas",
    parentId: "8.1",
  },
];

const MainMenu = () => {
  return <Menu menu={menu} parentId={null} level={0} />;
};

export default MainMenu;
