import React from 'react';
import { EDITORIAL_STORIES } from '../data/products';
import { Product } from '../types';
import { Sparkles, ArrowRight, Zap } from 'lucide-react';

interface LookbookSectionProps {
  products: Product[];
  onQuickBuy: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export const LookbookSection: React.FC<LookbookSectionProps> = ({
  products,
  onQuickBuy,
  onViewDetails,
}) => {
  return (
    <section id="lookbook" className="py-20 bg-[#0e0e11] border-b border-[#232328]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] font-sans font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Lookbook Editorial 2026</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl text-white font-normal tracking-tight">
            A Anatomia da Nova Elegância
          </h2>
          <p className="text-xs sm:text-sm text-[#8c8c94] font-sans font-light">
            Silhuetas contemporâneas onde a alfaiataria de corte milanês convive harmoniosamente com tecidos técnicos e óculos de precisão balística.
          </p>
        </div>

        {/* 3 Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EDITORIAL_STORIES.map((story) => {
            const featuredProd = products.find((p) => p.id === story.featuredProduct) || products[0];

            return (
              <div
                key={story.id}
                className="group relative bg-[#141418] border border-[#24242c] overflow-hidden flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#1a1a20]">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-transparent to-transparent opacity-80" />

                  {/* Hotspot Floating Pill */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#121215]/90 backdrop-blur-md border border-[#2e2e38] p-3 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#c5a880] uppercase tracking-wider font-sans block">
                        Peça do Look:
                      </span>
                      <span className="text-xs font-serif text-white font-medium line-clamp-1">
                        {featuredProd.name}
                      </span>
                    </div>
                    <button
                      onClick={() => onQuickBuy(featuredProd)}
                      className="p-2 bg-[#c5a880] hover:bg-[#d8be99] text-black transition-colors cursor-pointer flex-shrink-0"
                      title="Compra Rápida Deste Item"
                    >
                      <Zap className="w-3.5 h-3.5 fill-current" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between font-sans">
                  <div>
                    <h3 className="font-serif text-lg text-white font-medium leading-snug">
                      {story.title}
                    </h3>
                    <p className="text-xs text-[#8c8c94] mt-2 leading-relaxed">
                      {story.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#222228] flex items-center justify-between">
                    <button
                      onClick={() => onViewDetails(featuredProd)}
                      className="text-xs uppercase tracking-[0.14em] text-[#c5a880] hover:text-white font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Ver Peça Completa</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] font-mono text-white font-bold">
                      R$ {featuredProd.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
