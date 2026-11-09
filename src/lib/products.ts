export type Product = {
  id: string;
  title: string;
  category: string;
  price: number;
  short: string;
  description: string;
  includes: string[];
};

export const products: Product[] = [
  {
    id: "curso-marketing-digital",
    title: "Curso de Marketing Digital",
    category: "Curso",
    price: 15000,
    short: "Aprenda a vender online do zero.",
    description:
      "Um curso completo com aulas em vídeo sobre redes sociais, anúncios e estratégias de conteúdo para fazer crescer o seu negócio.",
    includes: ["12 aulas em vídeo", "Certificado", "Acesso vitalício"],
  },
  {
    id: "ebook-financas",
    title: "E-book: Finanças Pessoais",
    category: "E-book",
    price: 4500,
    short: "Organize o seu dinheiro em 30 dias.",
    description:
      "Um guia prático para controlar despesas, poupar e começar a investir com confiança.",
    includes: ["120 páginas em PDF", "Folha de orçamento", "Atualizações grátis"],
  },
  {
    id: "pack-templates-instagram",
    title: "Pack de Templates Instagram",
    category: "Templates",
    price: 7500,
    short: "50 designs prontos a editar.",
    description:
      "Templates profissionais para posts e stories, fáceis de personalizar no Canva.",
    includes: ["50 templates", "Ficheiros Canva", "Guia de uso"],
  },
  {
    id: "planilha-gestao",
    title: "Planilha de Gestão de Negócio",
    category: "Ferramenta",
    price: 6000,
    short: "Controle vendas, stock e lucros.",
    description:
      "Uma planilha automática para acompanhar o desempenho do seu negócio num só lugar.",
    includes: ["Excel e Google Sheets", "Painel automático", "Vídeo tutorial"],
  },
];

export const formatPrice = (v: number) =>
  new Intl.NumberFormat("pt-AO", { style: "currency", currency: "AOA", maximumFractionDigits: 0 }).format(v);
