import { createFileRoute, Link } from "@tanstack/react-router";
import { products, formatPrice } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Avero — Produtos digitais" },
      { name: "description", content: "Cursos, e-books e ferramentas digitais para crescer o seu negócio." },
      { property: "og:title", content: "Avero — Produtos digitais" },
      { property: "og:description", content: "Cursos, e-books e ferramentas digitais para crescer o seu negócio." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="font-display text-2xl font-bold tracking-tight text-foreground">avero</span>
        <a href="#produtos" className="text-sm font-medium text-muted-foreground hover:text-foreground">Produtos</a>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-12">
        <div className="rounded-3xl bg-hero p-10 md:p-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Loja digital</p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-primary-foreground md:text-6xl">
            Conhecimento que transforma o seu negócio.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">
            Cursos, e-books e ferramentas digitais com acesso imediato após a compra.
          </p>
          <a href="#produtos" className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition hover:opacity-90">
            Ver produtos
          </a>
        </div>
      </section>

      <section id="produtos" className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="font-display text-3xl font-bold text-foreground">Produtos</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {products.map((p) => (
            <Link
              key={p.id}
              to="/produto/$id"
              params={{ id: p.id }}
              className="group rounded-2xl border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">{p.category}</span>
              <h3 className="mt-4 font-display text-xl font-semibold text-card-foreground">{p.title}</h3>
              <p className="mt-2 text-muted-foreground">{p.short}</p>
              <p className="mt-6 font-display text-2xl font-bold text-primary">{formatPrice(p.price)}</p>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">© 2026 Avero</footer>
    </div>
  );
}
