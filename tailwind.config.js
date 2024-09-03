/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      Form: {
        background: "#f0fdf4",
        text: "#000000",
      },

      Input: {
        background: "#ffffff",
        text: "#000000",
        border: "#065f46",
        hoverBackground: "#059669",
        hoverText: "#047857",
        focusBorder: "#065f46",
      },

      button: {
        background: "#10b981",
        text: "#000000",
        border: "#ffffff",
        hoverBackground: "#059669",
        hoverText: "#ffffff",
        focusBorder: "#047857",
      },
      // Cores para Cabeçalhos
      header: {
        background: "#047857",
        text: "#065f46", // Verde escuro para o texto do cabeçalho
      },
      // Cores para Rodapé
      footer: {
        background: "#065f46", // Verde escuro para o fundo do rodapé
        text: "#d1fae5", // Verde muito claro para o texto do rodapé
      },
      // Cores para Links
      link: {
        default: "#1d4ed8", // Verde médio para os links
        hover: "#047857", // Verde escuro para os links em hover
      },
      // Cores para Textos
      text: {
        primary: "#065f46",
        secondary: "#6ee7b7",
        terciaria: "#10b981",
      },
      // Cores para Bordas
      border: {
        default: "#d1fae5", // Verde muito claro para bordas padrão
        focus: "#059669", // Verde médio para bordas em foco
      },
      // Cores para Mensagens
      message: {
        error: "#ef4444", // Vermelho para erros
        success: "#10b981", // Verde vibrante para sucesso
        warning: "#f59e0b", // Amarelo para avisos
      },
      // Cores para Fundo
      background: {
        default: "#D1FAE5", // Verde muito claro para o fundo principal
        dark: "#d1fae5", // Verde claro para fundo secundário
      },
      // Cores para Ícones
      icon: {
        default: "#065f46", // Verde escuro para ícones padrão
        active: "#10b981", // Verde vibrante para ícones ativos
        disabled: "#9ca3af", // Verde cinza claro para ícones desativados
      },
      // Cores para Navegação
      nav: {
        background: "#10b981",
        background_: "#d1fae5",
        background__: "#6ee7b7",
        text: "#000000",
        backgroundHover: "#065f46",
        textHover: "#FFFFFF",
        border: "#    ",
      },
      // Cores para Inputs
      input: {
        background: "#f9fafb", // Verde muito claro para o fundo dos inputs
        text: "#065f46", // Verde escuro para o texto dos inputs
        border: "#d1fae5", // Verde muito claro para a borda dos inputs
        placeholder: "#9ca3af", // Verde cinza claro para o texto de placeholder
        focusBorder: "#10b981", // Verde vibrante para bordas dos inputs em foco
        errorBorder: "#ef4444", // Vermelho para bordas de inputs com erro
      },
    },
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
      Arial: ["Helvetica"],
    },
  },
};
export const plugins = [];
