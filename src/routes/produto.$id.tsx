import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { products, formatPrice } from "@/lib/products";

export const Route = createFileRoute("/produto/$id")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.title} — Avero` },
          { name: "description", content: loaderData.product.short },
          { property: "og:title", content: `${loaderData.product.title} — Avero` },
          { property: "og:description", content: loaderData.product.short },
        ]
      : [{ title: "Produto não encontrado — Avero" }, { name: "robots", content: "noindex" }],
  }),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-10">
        <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">← Voltar</Link>
        <span className="mt-8 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">{product.category}</span>
        <h1 className="mt-4 font-display text-4xl font-bold text-foreground">{product.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{product.description}</p>
        <ul className="mt-8 space-y-2">
          {product.includes.map((i) => (
            <li key={i} className="flex items-center gap-3 text-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" /> {i}
            </li>
          ))}
        </ul>
        <div className="mt-10 flex items-center justify-between rounded-2xl border bg-card p-6">
          <span className="font-display text-3xl font-bold text-primary">{formatPrice(product.price)}</span>
          <button
            onClick={() => alert("Os pagamentos serão ativados em breve.")}
            className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Comprar agora
          </button>
        </div>
      </div>
    </div>
  );
}
