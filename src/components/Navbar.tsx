import React, { useState } from 'react';
import { ShoppingBag, Search, ShieldCheck, ArrowRight, X } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cartItems: CartItem[];
  onOpenCart: () => void;
  onFilterBrand: (brand: string) => void;
  onSearch: (term: string) => void;
  searchTerm: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartItems,
  onOpenCart,
  onFilterBrand,
  onSearch,
  searchTerm,
}) => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0c0c0d]/95 backdrop-blur-md border-b border-[#232328]">
      {/* Top Luxury Announcement Ticker */}
      <div className="bg-[#141417] text-[#c5a880] text-[11px] tracking-[0.2em] uppercase py-2 px-4 border-b border-[#202024] flex items-center justify-between font-sans">
        <div className="hidden sm:flex items-center gap-2 text-[#9a9a9f]">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c5a880] animate-pulse"></span>
          <span>Atelier Digital Exclusivo</span>
        </div>
        <div className="mx-auto flex items-center gap-4 text-center">
          <span>Envio Expresso Cortesia nas compras acima de R$ 800</span>
          <span className="hidden md:inline text-[#4a4a50]">•</span>
          <span className="hidden md:inline">Troca Facilitada em até 30 dias com Concierge</span>
          <span className="hidden md:inline text-[#4a4a50]">•</span>
          <span className="hidden md:inline text-white font-medium">10x Sem Juros ou 5% OFF no PIX</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-[#9a9a9f]">
          <span>BRL (R$)</span>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-[0.18em] uppercase text-[#a0a0a6] font-medium font-sans">
          <a
            href="#colecoes"
            className="hover:text-white transition-colors duration-200"
          >
            Coleções
          </a>
          <button
            onClick={() => onFilterBrand('Armani')}
            className="hover:text-[#c5a880] transition-colors duration-200 cursor-pointer text-left"
          >
            Alfaiataria
          </button>
          <button
            onClick={() => onFilterBrand('Lacoste')}
            className="hover:text-[#c5a880] transition-colors duration-200 cursor-pointer text-left"
          >
            Tennis Club
          </button>
          <button
            onClick={() => onFilterBrand('Prada')}
            className="hover:text-[#c5a880] transition-colors duration-200 cursor-pointer text-left"
          >
            Outerwear Tech
          </button>
          <button
            onClick={() => onFilterBrand('Oakley')}
            className="hover:text-[#c5a880] transition-colors duration-200 cursor-pointer text-left"
          >
            Óptica & Titânio
          </button>
          <a
            href="#lookbook"
            className="hover:text-white transition-colors duration-200"
          >
            Lookbook
          </a>
        </nav>

        {/* Brand Center Logo */}
        <div className="flex flex-col items-center justify-center">
          <a href="#" className="group text-center">
            <h1 className="font-display text-xl sm:text-2xl tracking-[0.3em] font-semibold text-white uppercase group-hover:text-[#c5a880] transition-colors duration-300">
              MAISON SARTORIAL
            </h1>
            <p className="text-[9px] tracking-[0.45em] uppercase text-[#888890] mt-0.5 font-sans">
              Milano • Paris • California
            </p>
          </a>
        </div>

        {/* Right Actions: Search, Wishlist, Cart */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Search Input / Button */}
          {showSearchInput ? (
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Buscar peças, tecidos ou marcas..."
                autoFocus
                className="w-48 sm:w-64 bg-[#18181c] text-white text-xs px-3 py-2 pr-8 rounded-none border border-[#3b3b44] focus:outline-none focus:border-[#c5a880]"
              />
              <button
                onClick={() => {
                  setShowSearchInput(false);
                  onSearch('');
                }}
                className="absolute right-2 text-[#888890] hover:text-white"
                title="Fechar busca"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowSearchInput(true)}
              className="p-2 text-[#a0a0a6] hover:text-white transition-colors cursor-pointer"
              title="Buscar no catálogo"
              id="btn-search-toggle"
            >
              <Search className="w-5 h-5 stroke-[1.5]" />
            </button>
          )}

          {/* Quick Buy Highlight Action */}
          <a
            href="#colecoes"
            className="hidden sm:inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] font-semibold px-3 py-1.5 border border-[#c5a880]/50 text-[#c5a880] hover:bg-[#c5a880] hover:text-black transition-all duration-300"
          >
            <span>Comprar Rápido</span>
            <ArrowRight className="w-3 h-3" />
          </a>

          {/* Cart Drawer Trigger */}
          <button
            onClick={onOpenCart}
            id="btn-open-cart"
            className="relative p-2 text-white hover:text-[#c5a880] transition-colors cursor-pointer flex items-center gap-2 bg-[#17171a] px-3 py-2 border border-[#27272d]"
            title="Sacola de Compras"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            <span className="hidden md:inline text-[11px] tracking-[0.15em] uppercase font-sans font-medium text-[#c0c0c6]">
              Sacola
            </span>
            {totalCartCount > 0 && (
              <span className="inline-flex items-center justify-center bg-[#c5a880] text-[#0c0c0d] font-bold text-[10px] w-4 h-4 rounded-full">
                {totalCartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
