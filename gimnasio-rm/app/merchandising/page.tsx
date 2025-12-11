"use client";
import { obtenerMerchandising } from "./utils";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  User,
  X,
  ShoppingCart,
  Plus,
  Minus,
  Trash,
  Terminal,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type Product = {
  id: string;
  title: string;
  price: number;
  img: string;
  desc?: string;
};

export default function MerchandisingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [previewProduct, setPreviewProduct] = useState<Product | null>(null);
  const articulos = useQuery({
    queryKey: ["articulos"],
    queryFn: obtenerMerchandising,
  });

  // Cart state: { productId: quantity }
  const [cart, setCart] = useState<Record<string, number>>(() => {
    try {
      const raw = localStorage.getItem("rm_cart");
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("rm_cart", JSON.stringify(cart));
    } catch {}
  }, [cart]);
  if (articulos.isLoading) {
    return (
      <Alert variant="default">
        <Terminal />
        <AlertTitle>Se estan cargando los articulos!</AlertTitle>
      </Alert>
    );
  }
  if (articulos.isError) {
    return (
      <Alert variant="default">
        <Terminal />
        <AlertTitle>No se pueden visualizar los articulos!</AlertTitle>
      </Alert>
    );
  }
  function addToCart(productId: string, qty = 1) {
    setCart((prev) => ({ ...prev, [productId]: (prev[productId] || 0) + qty }));
    setCartOpen(true);
  }

  function removeFromCart(productId: string) {
    setCart((prev) => {
      const copy = { ...prev };
      delete copy[productId];
      return copy;
    });
  }

  function changeQty(productId: string, delta: number) {
    setCart((prev) => {
      const current = prev[productId] || 0;
      const next = current + delta;
      const copy = { ...prev };
      if (next <= 0) delete copy[productId];
      else copy[productId] = next;
      return copy;
    });
  }

  function getProductById(id: string) {
    if (articulos.isLoading || articulos.isError) {
      return [];
    }
    return articulos.data?.find((p) => p.id === id) || null;
  }

  function cartItems() {
    return Object.entries(cart).map(([id, qty]) => ({
      product: getProductById(id)!,
      qty,
    }));
  }

  function cartTotal() {
    return cartItems().reduce((acc, it) => acc + it.product.price * it.qty, 0);
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#181b2e] text-white">
      {/* Header */}
      <header className="bg-[#181b2e] px-6 py-4 flex items-center justify-end relative border-b border-[#ff0066]">
        <div className="flex items-center border-[#ff0066]"></div>

        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <h1 className="text-[#ff0066] text-4xl font-bold tracking-tight leading-none">
            RM
          </h1>
          <p className="text-[#ff0066] text-sm font-medium tracking-wide">
            training
          </p>
        </div>

        <div className="flex items-center gap-4 relative">
          <button
            className="flex items-center gap-2 text-white hover:text-[#ff0066] transition"
            onClick={() => setCartOpen(true)}
            aria-label="Abrir carrito"
          >
            <ShoppingCart className="w-6 h-6" />
            <span className="hidden md:inline">Carrito</span>
          </button>

          <button
            className="text-white hover:text-[#ff0066] transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="w-6 h-6" strokeWidth={3} />
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-[#181b2e] rounded-lg shadow-lg z-20 flex flex-col">
              <Link href="/inicio">
                <button className="w-full px-4 py-3 text-left text-white hover:bg-[#837a88]/50 border-b border-[#837a88]/20">
                  Inicio
                </button>
              </Link>
              <Link href="/rutinas">
                <button className="w-full px-4 py-3 text-left text-white hover:bg-[#837a88]/50 border-b border-[#837a88]/20">
                  Rutinas
                </button>
              </Link>
              <Link href="/merchandising">
                <button className="w-full px-4 py-3 text-left text-white hover:bg-[#837a88]/50">
                  Merchandising
                </button>
              </Link>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1 px-8 py-12 max-w-7xl mx-auto w-full">
        <h2 className="text-center text-5xl font-semibold text-[#ff0066] mb-8 tracking-wide">
          MERCHANDISING
        </h2>

        <p className="text-center text-white/80 mb-8 max-w-3xl mx-auto">
          Elegí tu merchandising oficial. Hacé click en la imagen para verla más
          grande y luego agregala al carrito.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articulos.data?.map((p) => (
            <motion.div
              key={p.id}
              layout
              whileHover={{ scale: 1.02 }}
              className="bg-[#d9d9d9] rounded-xl overflow-hidden shadow-lg"
            >
              <div
                className="relative h-64 w-full cursor-pointer"
                onClick={() => setPreviewProduct(p)}
              >
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6 text-[#181b2e] flex flex-col">
                <h3 className="text-2xl font-bold mb-2">{p.nombre}</h3>
                <p className="mb-4 text-sm">{p.descripcion}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-lg font-semibold">${p.precio}</span>
                    <span className="text-sm ml-2 text-[#6b6b6b]">(ARS)</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => addToCart(p.id)}
                      className="bg-[#ff0066] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#e0005c] transition"
                    >
                      Agregar
                    </button>
                    <button
                      onClick={() => setPreviewProduct(p)}
                      className="border border-[#181b2e] px-3 py-2 rounded-lg hover:bg-white/30 transition"
                    >
                      Ver
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Preview Modal */}
      <AnimatePresence>
        {previewProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-40 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#181b2e] rounded-2xl p-6 max-w-3xl w-full text-white relative"
            >
              <button
                onClick={() => setPreviewProduct(null)}
                className="absolute top-4 right-4 text-[#ff0066]"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="md:flex gap-6">
                <div className="relative h-64 md:h-80 md:w-1/2 w-full rounded-lg overflow-hidden">
                  <Image
                    src={previewProduct.img}
                    alt={previewProduct.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="md:flex-1 mt-4 md:mt-0">
                  <h3 className="text-2xl font-bold text-[#ff0066] mb-2">
                    {previewProduct.title}
                  </h3>
                  <p className="text-white/80 mb-4">{previewProduct.desc}</p>
                  <p className="text-lg font-semibold mb-6">
                    Precio: ${previewProduct.price} ARS
                  </p>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => addToCart(previewProduct.id)}
                      className="bg-[#ff0066] px-4 py-2 rounded-lg font-semibold hover:bg-[#e0005c] transition"
                    >
                      Agregar al carrito
                    </button>
                    <button
                      onClick={() => {
                        setPreviewProduct(null);
                        setCartOpen(true);
                      }}
                      className="border px-4 py-2 rounded-lg"
                    >
                      Ir al carrito
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <AnimatePresence>
        {cartOpen && (
          <motion.aside
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[420px] bg-[#0f1116] z-50 shadow-2xl p-6 overflow-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-[#ff0066]">Tu carrito</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setCart({});
                  }}
                  className="text-sm px-3 py-2 border rounded"
                >
                  Vaciar
                </button>
                <button
                  onClick={() => setCartOpen(false)}
                  className="text-[#ff0066]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {cartItems().length === 0 && (
                <p className="text-white/70">No hay productos en el carrito.</p>
              )}

              {cartItems().map(({ product, qty }) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 bg-[#1b1d29] p-4 rounded-lg"
                >
                  <div className="relative w-20 h-20 rounded overflow-hidden">
                    <Image
                      src="merchandising.jpg"
                      alt="imagen"
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h4 className="font-semibold">{product.title}</h4>
                    <p className="text-sm text-white/70">
                      ${product.price} ARS
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => changeQty(product.id, -1)}
                        className="p-1 rounded border"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-3">{qty}</span>
                      <button
                        onClick={() => changeQty(product.id, 1)}
                        className="p-1 rounded border"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="ml-auto text-sm text-white/70 hover:text-white"
                      >
                        <Trash className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-white/10 pt-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white/70">Total</span>
                <span className="text-xl font-bold">${cartTotal()}</span>
              </div>

              <div className="flex gap-3">
                <a
                  href={`https://wa.me/5491158800461?text=${encodeURIComponent(
                    `Hola! Quiero finalizar mi compra.%0A%0A` +
                      cartItems()
                        .map(
                          (it) =>
                            `• ${it.product.title} x${it.qty} — $${
                              it.product.price * it.qty
                            }`
                        )
                        .join("%0A") +
                      `%0A%0ATotal: $${cartTotal()} ARS%0A%0AMi nombre es: ____%0AApellido: ____%0ATeléfono: ____`
                  )}`}
                  target="_blank"
                  className="flex-1 bg-[#ff0066] py-3 rounded font-semibold text-center"
                >
                  Finalizar por WhatsApp
                </a>
                <button
                  onClick={() => {
                    /* simular checkout */ alert(
                      "Simulación: checkout frontal (solo frontend)."
                    );
                  }}
                  className="flex-1 border py-3 rounded"
                >
                  Simular
                </button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
