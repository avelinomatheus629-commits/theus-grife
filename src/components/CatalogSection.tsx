import React, { useState, useMemo } from 'react';
import { ProductCard } from './ProductCard';
import { Product, ProductColor, ProductCategory, BrandInspiration } from '../types';
import { Filter, SlidersHorizontal, Sparkles, X } from 'lucide-react';

interface CatalogSectionProps {
  products: Product[];
  onQuickBuy: (product: Product, size: string, color: ProductColor) => void;
  onAddToCart: (product: Product, size: string, color: ProductColor) => void;
  onViewDetails: (product: Product) => void;
  selectedBrand: string;
  onSelectBrand: (brand: string) => void;
  searchTerm: string;
  onClearSearch: () => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  products,
  onQuickBuy,
  onAddToCart,
  onViewDetails,
  selectedBrand,
  onSelectBrand,
  searchTerm,
  onClearSearch,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const categories = [
    { id: 'all', label: 'Todas as Criações' },
    { id: 'tailoring', label: 'Alfaiataria (Armani)' },
    { id: 'polos', label: 'Polos & Tennis Club (Lacoste)' },
    { id: 'outerwear', label: 'Outerwear Re-Nylon (Prada)' },
    { id: 'eyewear', label: 'Óptica & Titânio (Oakley)' },
    { id: 'footwear', label: 'Calçados Tech' },
    { id: 'accessories', label: 'Marroquinaria' },
  ];

  const brands = [
    { id: 'all', label: 'Todas as Inspirações' },
    { id: 'Armani', label: 'Giorgio Armani' },
    { id: 'Prada', label: 'Prada Milano' },
    { id: 'Lacoste', label: 'Lacoste Club' },
    { id: 'Oakley', label: 'Oakley Innovation' },
  ];

  // Filtering & sorting logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((item) => {
        // Category filter
        if (selectedCategory !== 'all' && item.category !== selectedCategory) {
          return false;
        }
        // Brand filter
        if (selectedBrand !== 'all' && item.brandInspiration.toLowerCase() !== selectedBrand.toLowerCase()) {
          return false;
        }
        // Search filter
        if (searchTerm.trim()) {
          const q = searchTerm.toLowerCase();
          const matchName = item.name.toLowerCase().includes(q);
          const matchDesc = item.description.toLowerCase().includes(q);
          const matchBrand = item.brandInspiration.toLowerCase().includes(q);
          const matchFabric = item.fabricDetails.toLowerCase().includes(q);
          return matchName || matchDesc || matchBrand || matchFabric;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0; // 'featured' order
      });
  }, [products, selectedCategory, selectedBrand, searchTerm, sortBy]);

  return (
    <section id="colecoes" className="py-20 bg-[#0c0c0d] border-b border-[#232328]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#202025]">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] font-sans font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Coleção Masculina 2026</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl text-white font-normal tracking-tight">
              Curadoria de Peças Exclusivas
            </h2>
            <p className="text-xs sm:text-sm text-[#8c8c94] font-sans mt-1">
              Selecione o tamanho desejado diretamente no card para acionar o checkout expresso em 1 clique.
            </p>
          </div>

          {/* Sort selector */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <span className="text-[11px] uppercase tracking-wider text-[#7e7e86] font-sans whitespace-nowrap">
              Ordenar por:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#161619] border border-[#2d2d34] text-white text-xs px-3 py-2 font-sans focus:outline-none focus:border-[#c5a880] cursor-pointer"
            >
              <option value="featured">Destaques da Curadoria</option>
              <option value="price-asc">Menor Preço</option>
              <option value="price-desc">Maior Preço</option>
              <option value="rating">Mais Avaliados (5.0★)</option>
            </select>
          </div>
        </div>

        {/* Brand Inspiration Pills */}
        <div className="mb-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-sans text-[#787880] uppercase tracking-wider pr-2 hidden sm:inline">
            Inspiração:
          </span>
          {brands.map((b) => {
            const isSelected = selectedBrand.toLowerCase() === b.id.toLowerCase();
            return (
              <button
                key={b.id}
                onClick={() => onSelectBrand(b.id)}
                className={`text-xs px-3.5 py-1.5 whitespace-nowrap font-sans font-medium uppercase tracking-[0.12em] transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#c5a880] text-black font-semibold'
                    : 'bg-[#151518] text-[#9a9aa2] hover:text-white border border-[#26262d] hover:border-[#3d3d46]'
                }`}
              >
                {b.label}
              </button>
            );
          })}
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-10 flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#1c1c20]">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs px-4 py-2 whitespace-nowrap font-sans font-medium tracking-[0.08em] transition-all border-b-2 -mb-px cursor-pointer ${
                  isSelected
                    ? 'border-[#c5a880] text-white font-semibold'
                    : 'border-transparent text-[#7e7e86] hover:text-[#cecece]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Active Search Filter Pill */}
        {searchTerm && (
          <div className="mb-6 flex items-center gap-2 bg-[#17171b] border border-[#2d2d36] px-4 py-2 w-fit">
            <span className="text-xs text-[#9c9ca4] font-sans">
              Filtrando por: <strong className="text-white font-medium">"{searchTerm}"</strong>
            </span>
            <button
              onClick={onClearSearch}
              className="text-[#9c9ca4] hover:text-white p-0.5"
              title="Limpar busca"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Product Count & Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 bg-[#111114] border border-[#222227] p-8 space-y-4">
            <p className="text-[#8e8e96] font-sans text-sm">
              Nenhuma peça encontrada com os filtros selecionados.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                onSelectBrand('all');
                onClearSearch();
              }}
              className="px-6 py-2.5 bg-[#c5a880] text-black font-sans text-xs uppercase tracking-widest font-semibold hover:bg-white transition-colors cursor-pointer"
            >
              Redefinir Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onQuickBuy={onQuickBuy}
                onAddToCart={onAddToCart}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
