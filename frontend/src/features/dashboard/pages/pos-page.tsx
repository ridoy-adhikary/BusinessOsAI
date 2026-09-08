import { useState } from "react";
import { ScanBarcode, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { PageHeader, Card } from "@/components/ui";
import { products } from "../data/mock";

interface CartLine {
  name: string;
  price: number;
  qty: number;
}

export function PosPage() {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [query, setQuery] = useState("");

  const visibleProducts = products.filter((p) =>
    (p.name + p.sku).toLowerCase().includes(query.toLowerCase()),
  );

  const add = (name: string, price: number) => {
    setCart((prev) => {
      const existing = prev.find((l) => l.name === name);
      if (existing) {
        return prev.map((l) => (l.name === name ? { ...l, qty: l.qty + 1 } : l));
      }
      return [...prev, { name, price, qty: 1 }];
    });
  };

  const changeQty = (name: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((l) => (l.name === name ? { ...l, qty: l.qty + delta } : l))
        .filter((l) => l.qty > 0),
    );
  };

  const subtotal = cart.reduce((sum, l) => sum + l.price * l.qty, 0);

  return (
    <div className="space-y-6">
      <PageHeader
        title="POS"
        description="Fast in-store billing connected to the whole system."
        icon={ScanBarcode}
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.5fr_1fr]">
        <Card className="lg:max-h-[600px] lg:overflow-y-auto">
          <div className="mb-4">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products or scan barcode..."
              className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition-all focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            />
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {visibleProducts.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => add(p.name, p.price)}
                disabled={p.stock === 0}
                className="rounded-xl border border-slate-200 bg-white p-3 text-left transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
              >
                <p className="text-sm font-semibold text-slate-900">{p.name}</p>
                <p className="mt-1 text-xs text-slate-400">{p.sku}</p>
                <p className="mt-2 text-sm font-bold text-brand-600">৳{p.price.toLocaleString()}</p>
                <p className="mt-1 text-[11px] font-medium text-slate-400">
                  {p.stock === 0 ? "Out of stock" : `${p.stock} in stock`}
                </p>
              </button>
            ))}
          </div>
        </Card>

        <Card className="flex flex-col">
          <div className="mb-3 flex items-center gap-2">
            <ShoppingBag className="h-4 w-4 text-brand-600" />
            <h3 className="text-sm font-semibold text-slate-900">Current bill</h3>
          </div>

          <div className="flex-1 space-y-2 overflow-y-auto">
            {cart.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 py-10 text-center">
                <p className="text-sm text-slate-400">No items yet</p>
                <p className="text-xs text-slate-300">Tap a product to add it to the bill</p>
              </div>
            ) : (
              cart.map((line) => (
                <div key={line.name} className="flex items-center justify-between rounded-xl border border-slate-100 bg-white px-3 py-2">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-slate-800">{line.name}</p>
                    <p className="text-xs text-slate-400">৳{line.price.toLocaleString()} × {line.qty}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => changeQty(line.name, -1)} className="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700" aria-label="decrease"><Minus className="h-3.5 w-3.5" /></button>
                    <span className="w-5 text-center text-sm font-semibold">{line.qty}</span>
                    <button onClick={() => add(line.name, line.price)} className="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700" aria-label="increase"><Plus className="h-3.5 w-3.5" /></button>
                    <button onClick={() => changeQty(line.name, -line.qty)} className="rounded-md p-1 text-slate-300 hover:bg-red-50 hover:text-red-500" aria-label="remove"><Trash2 className="h-3.5 w-3.5" /></button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mt-4 border-t border-slate-100 pt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">Subtotal</span>
              <span className="font-semibold text-slate-900">৳{subtotal.toLocaleString()}</span>
            </div>
            <div className="mt-1 flex items-center justify-between text-sm">
              <span className="text-slate-500">VAT (5%)</span>
              <span className="font-semibold text-slate-900">৳{Math.round(subtotal * 0.05).toLocaleString()}</span>
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-2">
              <span className="text-base font-semibold text-slate-900">Total</span>
              <span className="text-xl font-bold gradient-text">৳{Math.round(subtotal * 1.05).toLocaleString()}</span>
            </div>
            <button
              type="button"
              disabled={cart.length === 0}
              className="mt-4 w-full rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 py-3 text-sm font-bold text-white shadow-md purple-glow transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Charge ৳{Math.round(subtotal * 1.05).toLocaleString()}
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}
