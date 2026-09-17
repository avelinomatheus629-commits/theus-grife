import React from 'react';
import { ArrowUpRight, Zap, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { Product } from '../types';

interface HeroProps {
  onQuickBuyFeatured: (product: Product) => void;
  featuredProduct: Product;
}

export const Hero: React.FC<HeroProps> = ({ onQuickBuyFeatured, featuredProduct }) => {
  return (
    <section className="relative overflow-hidden bg-[#0c0c0d] border-b border-[#232328]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#c5a880]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Quick Action */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 z-10">
            {/* Top brand capsule */}
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[#c5a880]"></span>
              <span className="text-xs uppercase tracking-[0.3em] text-[#c5a880] font-sans font-semibold">
                Haute Horlogerie & Moda Masculina
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal text-[#f4f4f2] tracking-tight leading-[1.08]">
                A Nobreza da Alfaiataria.<br />
                <span className="font-serif italic font-light text-[#c5a880]">
                  A Vanguarda
                </span>{' '}
                da Alta Performance.
              </h2>
              <p className="text-base sm:text-lg text-[#9e9ea6] font-light leading-relaxed max-w-xl font-sans pt-2">
                Uma curadoria masculina rigorosa inspirada nas proporções fluidas de <span className="text-[#ececeb] font-medium">Giorgio Armani</span>, no minimalismo geométrico de <span className="text-[#ececeb] font-medium">Prada</span>, no heritage clássico de <span className="text-[#ececeb] font-medium">Lacoste</span> e na precisão técnica de <span className="text-[#ececeb] font-medium">Oakley</span>.
              </p>
            </div>

            {/* Quick Buy CTA Group - The key user requirement */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Primary Quick Buy Button */}
              <button
                onClick={() => onQuickBuyFeatured(featuredProduct)}
                id="hero-quick-buy-btn"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0c0c0d] font-sans font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-lg shadow-[#c5a880]/10 cursor-pointer"
              >
                <Zap className="w-4 h-4 fill-current transition-transform group-hover:scale-110" />
                <span>Compra Rápida do Look Principal</span>
              </button>

              {/* Secondary Explore Catalog */}
              <a
                href="#colecoes"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-[#303036] hover:border-white text-white font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-white/5"
              >
                <span>Ver Coleção Completa</span>
                <ArrowUpRight className="w-4 h-4 text-[#8e8e93]" />
              </a>
            </div>

            {/* Trust & Quality Badges */}
            <div className="pt-6 border-t border-[#202024] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-sans text-[#8e8e94]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c5a880] flex-shrink-0" />
                <span>Lã Super 160s & Pima Peruano</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c5a880] flex-shrink-0" />
                <span>Checkout 1-Clique com PIX</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#c5a880] flex-shrink-0" />
                <span>Envio em 24h & Troca Cortesia</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Quick-Buy Floating Tag */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Luxury Frame Container */}
              <div className="relative border border-[#26262c] p-2 bg-[#121215]/80">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#18181d]">
                  <img
                    src={featuredProduct.images[0]}
                    alt={featuredProduct.name}
                    className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-transparent to-transparent opacity-80" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 bg-[#0c0c0d]/90 backdrop-blur-sm border border-[#2a2a30] text-[#c5a880] text-[10px] tracking-[0.2em] uppercase font-sans font-semibold px-3 py-1">
                    Destaque da Edição
                  </div>

                  {/* Bottom Interactive Quick-Card Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#141417]/95 backdrop-blur-md border border-[#2f2f36] p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a880] font-medium block">
                          Inspiração {featuredProduct.brandInspiration}
                        </span>
                        <h3 className="font-serif text-base text-white font-medium leading-snug line-clamp-1">
                          {featuredProduct.name}
                        </h3>
                      </div>
                      <div className="text-right">
                        <span className="font-sans font-semibold text-sm text-white block">
                          R$ {featuredProduct.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </span>
                        <span className="text-[10px] text-[#909096] block">
                          10x de R$ {(featuredProduct.price / 10).toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onQuickBuyFeatured(featuredProduct)}
                      className="w-full py-2.5 bg-[#f4f4f2] hover:bg-[#c5a880] text-black font-sans text-[11px] font-bold tracking-[0.18em] uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      title="Compra Rápida deste Item"
                    >
                      <Zap className="w-3.5 h-3.5 fill-current" />
                      <span>Compra Rápida Imediata</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative side accent lines */}
              <div className="hidden lg:block absolute -bottom-6 -right-6 w-24 h-24 border-r border-b border-[#c5a880]/30 -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
