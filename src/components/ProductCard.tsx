import React, { useState } from 'react';
import { Zap, Eye, Check, ShoppingBag } from 'lucide-react';
import { Product, ProductColor } from '../types';

interface ProductCardProps {
  product: Product;
  onQuickBuy: (product: Product, size: string, color: ProductColor) => void;
  onAddToCart: (product: Product, size: string, color: ProductColor) => void;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickBuy,
  onAddToCart,
  onViewDetails,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [addedAnimation, setAddedAnimation] = useState<boolean>(false);

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedSize, selectedColor);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1400);
  };

  const handleQuickBuyClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onQuickBuy(product, selectedSize, selectedColor);
  };

  return (
    <div
      className="group relative bg-[#131316] border border-[#232328] hover:border-[#3c3c45] transition-all duration-300 flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Image Container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#18181d] cursor-pointer" onClick={() => onViewDetails(product)}>
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f] via-transparent to-transparent opacity-60 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="bg-[#0c0c0d]/90 backdrop-blur-sm border border-[#2b2b32] text-[#c5a880] text-[10px] tracking-[0.18em] uppercase font-sans font-semibold px-2.5 py-1">
            {product.tag}
          </span>
          <span className="bg-[#17171c]/90 text-[#9c9ca3] text-[9px] tracking-[0.2em] uppercase font-sans px-2 py-0.5 border border-[#282830]">
            {product.brandInspiration}
          </span>
        </div>

        {/* Quick View Floating Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails(product);
          }}
          className="absolute bottom-3 right-3 p-2 bg-[#121215]/90 hover:bg-[#c5a880] hover:text-black text-white border border-[#2d2d34] transition-colors rounded-none opacity-0 group-hover:opacity-100 duration-200 cursor-pointer"
          title="Ver Especificações Completas"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Content & Quick Buy Actions */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between space-y-4">
        
        {/* Title, Brand & Price */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[11px] font-sans">
            <span className="text-[#8c8c94] uppercase tracking-[0.15em]">
              Inspiração {product.brandInspiration}
            </span>
            <span className="text-[#c5a880] font-mono font-medium">
              ★ {product.rating} <span className="text-[#65656c]">({product.reviewCount})</span>
            </span>
          </div>

          <h3
            onClick={() => onViewDetails(product)}
            className="font-serif text-lg text-white font-medium hover:text-[#c5a880] transition-colors cursor-pointer leading-snug line-clamp-1"
          >
            {product.name}
          </h3>

          <p className="text-xs text-[#8c8c94] font-sans line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          <div className="pt-2 flex items-baseline justify-between border-t border-[#1f1f24]">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-sans text-base sm:text-lg font-bold text-white tracking-tight">
                  R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-[#66666d] line-through font-sans">
                    R$ {product.originalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                )}
              </div>
              <span className="text-[10px] text-[#86868e] block font-sans">
                10x de R$ {(product.price / 10).toFixed(2).replace('.', ',')} sem juros
              </span>
            </div>
            
            {/* Color preview dots */}
            <div className="flex items-center gap-1.5">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(c)}
                  className={`w-3.5 h-3.5 rounded-full border transition-transform ${
                    selectedColor.name === c.name
                      ? 'scale-125 border-white ring-1 ring-[#c5a880]'
                      : 'border-[#44444c] hover:scale-110'
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Quick Size Selector */}
        <div className="pt-1">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-[#797982] mb-1.5 font-sans">
            <span>Tamanho Rápido:</span>
            <span className="text-[#dedede] font-medium">{selectedSize}</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`text-[11px] px-2 py-1 font-sans border transition-all cursor-pointer ${
                  selectedSize === size
                    ? 'border-[#c5a880] bg-[#c5a880]/10 text-[#c5a880] font-semibold'
                    : 'border-[#26262d] text-[#8e8e96] hover:border-[#40404a] hover:text-white bg-[#161619]'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* BOTÕES DE COMPRA RÁPIDA (User Core Requirement) */}
        <div className="pt-2 space-y-2">
          {/* Main Quick Buy Button */}
          <button
            onClick={handleQuickBuyClick}
            id={`btn-quick-buy-${product.id}`}
            className="w-full py-3 px-4 bg-[#c5a880] hover:bg-[#d4b993] text-[#0c0c0d] font-sans font-bold text-xs uppercase tracking-[0.18em] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg hover:shadow-[#c5a880]/20"
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>Compra Rápida 1-Clique</span>
          </button>

          {/* Secondary Add to Cart */}
          <button
            onClick={handleAddToCartClick}
            id={`btn-add-cart-${product.id}`}
            className="w-full py-2 px-3 border border-[#2a2a32] hover:border-white text-[#b5b5bc] hover:text-white bg-[#16161a] hover:bg-[#1a1a20] font-sans text-[11px] uppercase tracking-[0.15em] font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            {addedAnimation ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Adicionado à Sacola</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Adicionar à Sacola</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
