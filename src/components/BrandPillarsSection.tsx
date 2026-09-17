import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BRAND_PILLARS } from '../data/products';
import { BrandInspiration } from '../types';

interface BrandPillarsSectionProps {
  onSelectBrand: (brand: BrandInspiration) => void;
  selectedBrand: string;
}

export const BrandPillarsSection: React.FC<BrandPillarsSectionProps> = ({
  onSelectBrand,
  selectedBrand,
}) => {
  return (
    <section id="pilares" className="py-20 bg-[#0e0e10] border-b border-[#232328]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] font-sans font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DNA & Inspiração de Mestres</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl text-white font-normal tracking-tight">
            Quatro Pilares da Estética Masculina Contemporânea
          </h2>
          <p className="text-sm sm:text-base text-[#929299] font-sans font-light">
            Da desconstrução milanesa à velocidade técnica californiana. Selecione uma escola de design para filtrar as peças exclusivas.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_PILLARS.map((pillar) => {
            const isSelected = selectedBrand.toLowerCase() === pillar.id.toLowerCase();
            const brandKey = (pillar.id.charAt(0).toUpperCase() + pillar.id.slice(1)) as BrandInspiration;

            return (
              <div
                key={pillar.id}
                className={`relative group p-6 sm:p-7 bg-[#141417] border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#c5a880] bg-[#19191e] shadow-xl shadow-[#c5a880]/5'
                    : 'border-[#24242a] hover:border-[#3d3d46]'
                }`}
              >
                {/* Pillar Tag */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.25em] uppercase font-sans font-semibold text-[#c5a880]">
                      {pillar.tag}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#2a2a32] group-hover:bg-[#c5a880] transition-colors" />
                  </div>

                  <div>
                    <h3 className="font-display text-lg tracking-[0.15em] font-semibold text-white uppercase">
                      {pillar.name}
                    </h3>
                    <p className="text-xs text-[#c5a880] font-serif italic mt-0.5">
                      {pillar.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-[#95959c] font-sans leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="pt-3 border-t border-[#202025]">
                    <span className="text-[11px] text-[#6d6d74] block uppercase tracking-wider font-mono">
                      Massa Material:
                    </span>
                    <span className="text-xs text-[#dedede] font-medium font-sans">
                      {pillar.accent}
                    </span>
                  </div>
                </div>

                {/* Filter Trigger Button */}
                <div className="pt-6">
                  <button
                    onClick={() => {
                      onSelectBrand(brandKey);
                      const el = document.getElementById('colecoes');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full py-2.5 px-3 text-xs uppercase tracking-[0.16em] font-sans font-semibold flex items-center justify-between border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-[#c5a880] text-black border-[#c5a880]'
                        : 'bg-[#18181c] text-[#d6d6da] border-[#2d2d35] group-hover:border-[#c5a880] group-hover:text-white'
                    }`}
                  >
                    <span>{isSelected ? 'Filtrado Atualmente' : 'Ver Criações'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
