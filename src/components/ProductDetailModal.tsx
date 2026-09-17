import React, { useState } from 'react';
import { Product, ProductColor } from '../types';
import { X, Zap, ShoppingBag, ShieldCheck, Truck, Sparkles, Check, ChevronRight } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onQuickBuy: (product: Product, size: string, color: ProductColor) => void;
  onAddToCart: (product: Product, size: string, color: ProductColor) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onQuickBuy,
  onAddToCart,
}) => {
  if (!product) return null;

  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [showSizeGuide, setShowSizeGuide] = useState<boolean>(false);
  const [justAdded, setJustAdded] = useState<boolean>(false);

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, selectedColor);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  const handleQuickBuy = () => {
    onQuickBuy(product, selectedSize, selectedColor);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#121215] border border-[#2d2d35] text-white shadow-2xl my-6 flex flex-col md:flex-row overflow-hidden max-h-[92vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#17171c]/80 hover:bg-[#c5a880] hover:text-black text-white border border-[#2f2f38] transition-colors cursor-pointer"
          title="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Gallery Column */}
        <div className="md:w-1/2 bg-[#16161b] flex flex-col justify-between p-4 border-b md:border-b-0 md:border-r border-[#23232a]">
          <div className="relative aspect-[3/4] overflow-hidden bg-[#1a1a20]">
            <img
              src={product.images[activeImageIndex] || product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute top-3 left-3 bg-[#0c0c0d]/90 border border-[#2b2b34] text-[#c5a880] text-[10px] tracking-[0.2em] uppercase font-sans px-2.5 py-1">
              {product.tag}
            </div>
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-2 mt-3 overflow-x-auto">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-16 h-20 flex-shrink-0 border overflow-hidden cursor-pointer transition-all ${
                    activeImageIndex === idx ? 'border-[#c5a880]' : 'border-[#2a2a33] opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Specifications & Actions */}
        <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto space-y-6">
          
          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-sans">
              <span className="text-[#c5a880] uppercase tracking-[0.2em] font-semibold">
                Inspiração {product.brandInspiration}
              </span>
              <span className="text-[#888890]">{product.origin}</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl text-white font-medium leading-tight">
              {product.name}
            </h2>

            <div className="flex items-center gap-3 pt-1">
              <span className="font-sans text-2xl font-bold text-white">
                R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-[#73737b] line-through font-sans">
                  R$ {product.originalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              )}
              <span className="text-xs text-[#9d9da5] font-sans">
                (10x de R$ {(product.price / 10).toFixed(2).replace('.', ',')} sem juros)
              </span>
            </div>

            <p className="text-xs text-[#a0a0a8] font-sans italic bg-[#17171c] p-2.5 border-l-2 border-[#c5a880]">
              "{product.inspirationNote}"
            </p>
          </div>

          {/* Description */}
          <div className="space-y-2 text-xs font-sans text-[#a5a5ad] leading-relaxed">
            <p>{product.description}</p>
          </div>

          {/* Fabric & Material Details */}
          <div className="p-3.5 bg-[#17171c] border border-[#26262e] space-y-1.5 text-xs font-sans">
            <span className="text-[10px] uppercase tracking-wider text-[#c5a880] font-semibold block">
              Composição & Origem Sartorial:
            </span>
            <p className="text-[#dedede]">{product.fabricDetails}</p>
          </div>

          {/* Color Chooser */}
          <div>
            <label className="text-xs uppercase tracking-wider text-[#919198] font-medium block mb-2 font-sans">
              Tonalidade: <span className="text-white">{selectedColor.name}</span>
            </label>
            <div className="flex items-center gap-2">
              {product.colors.map((col) => (
                <button
                  key={col.name}
                  onClick={() => setSelectedColor(col)}
                  className={`px-3 py-1.5 text-xs font-sans flex items-center gap-2 border transition-all cursor-pointer ${
                    selectedColor.name === col.name
                      ? 'border-[#c5a880] text-white bg-[#1e1e24]'
                      : 'border-[#2d2d36] text-[#8e8e96] hover:text-white'
                  }`}
                >
                  <span
                    className="w-3 h-3 rounded-full border border-black/30"
                    style={{ backgroundColor: col.hex }}
                  />
                  <span>{col.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Size Chooser */}
          <div>
            <div className="flex items-center justify-between text-xs font-sans mb-2">
              <span className="uppercase tracking-wider text-[#919198] font-medium">
                Tamanho: <strong className="text-white">{selectedSize}</strong>
              </span>
              <button
                onClick={() => setShowSizeGuide(!showSizeGuide)}
                className="text-[#c5a880] hover:underline text-[11px] cursor-pointer"
              >
                {showSizeGuide ? 'Ocultar Guia' : 'Guia de Medidas (cm)'}
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {product.sizes.map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`text-xs px-3.5 py-2 font-sans border transition-all cursor-pointer ${
                    selectedSize === sz
                      ? 'border-[#c5a880] bg-[#c5a880]/15 text-[#c5a880] font-bold'
                      : 'border-[#282830] text-[#93939b] hover:text-white hover:border-[#3e3e48]'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>

            {/* Size Guide Drawer */}
            {showSizeGuide && (
              <div className="mt-3 p-3 bg-[#18181e] border border-[#282832] text-[11px] font-sans space-y-1 text-[#8f8f97] animate-fadeIn">
                <div className="flex justify-between font-semibold text-white border-b border-[#2d2d38] pb-1">
                  <span>Tamanho</span>
                  <span>Tórax / Busto</span>
                  <span>Cintura</span>
                  <span>Comprimento</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span>P / 38-40</span>
                  <span>96-100 cm</span>
                  <span>80-84 cm</span>
                  <span>72 cm</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span>M / 42-44</span>
                  <span>102-106 cm</span>
                  <span>86-90 cm</span>
                  <span>74 cm</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span>G / 46-48</span>
                  <span>108-112 cm</span>
                  <span>92-96 cm</span>
                  <span>76 cm</span>
                </div>
              </div>
            )}
          </div>

          {/* Action CTAs: Quick Buy vs Add to Bag */}
          <div className="space-y-3 pt-2">
            {/* Primary Quick Buy */}
            <button
              onClick={handleQuickBuy}
              id="btn-modal-quick-buy"
              className="w-full py-4 bg-[#c5a880] hover:bg-[#d6ba94] text-black font-sans font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#c5a880]/15"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>Compra Rápida Imediata (1-Clique)</span>
            </button>

            {/* Secondary Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full py-3 border border-[#31313a] hover:border-white text-white font-sans text-xs uppercase tracking-[0.16em] font-medium transition-colors flex items-center justify-center gap-2 bg-[#17171c] cursor-pointer"
            >
              {justAdded ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Adicionado à Sacola!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Adicionar à Sacola de Compras</span>
                </>
              )}
            </button>
          </div>

          {/* Luxury perks */}
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#222228] text-[11px] font-sans text-[#86868e]">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#c5a880]" />
              <span>Frete Expresso Cortesia</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
              <span>Troca Domiciliar 30 Dias</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
