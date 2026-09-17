import React from 'react';
import { Truck, MessageSquare, RefreshCw, Award, Sparkles, Check } from 'lucide-react';

export const ConciergeGuarantees: React.FC = () => {
  return (
    <section className="py-16 bg-[#0c0c0d] border-b border-[#232328]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 Pillars Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="p-6 bg-[#131316] border border-[#222228] space-y-3">
            <div className="w-10 h-10 rounded-none bg-[#19191f] border border-[#2f2f38] flex items-center justify-center text-[#c5a880]">
              <Truck className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="font-display text-sm tracking-wider uppercase font-semibold text-white">
              Logística Expressa em 24h
            </h3>
            <p className="text-xs text-[#8c8c94] font-sans leading-relaxed">
              Despacho prioritário blindado com rastreamento em tempo real e entrega sob medida em capitais brasileiras.
            </p>
          </div>

          <div className="p-6 bg-[#131316] border border-[#222228] space-y-3">
            <div className="w-10 h-10 rounded-none bg-[#19191f] border border-[#2f2f38] flex items-center justify-center text-[#c5a880]">
              <MessageSquare className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="font-display text-sm tracking-wider uppercase font-semibold text-white">
              Concierge de Alfaiataria
            </h3>
            <p className="text-xs text-[#8c8c94] font-sans leading-relaxed">
              Consultoria pessoal dedicada para auxílio na escolha de medidas, combinações e ajustes finos de modelagem.
            </p>
          </div>

          <div className="p-6 bg-[#131316] border border-[#222228] space-y-3">
            <div className="w-10 h-10 rounded-none bg-[#19191f] border border-[#2f2f38] flex items-center justify-center text-[#c5a880]">
              <RefreshCw className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="font-display text-sm tracking-wider uppercase font-semibold text-white">
              Primeira Troca em Casa
            </h3>
            <p className="text-xs text-[#8c8c94] font-sans leading-relaxed">
              Até 30 dias para experimentar no conforto da sua residência com coleta cortesia e sem qualquer burocracia.
            </p>
          </div>

          <div className="p-6 bg-[#131316] border border-[#222228] space-y-3">
            <div className="w-10 h-10 rounded-none bg-[#19191f] border border-[#2f2f38] flex items-center justify-center text-[#c5a880]">
              <Award className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="font-display text-sm tracking-wider uppercase font-semibold text-white">
              Certificação de Autenticidade
            </h3>
            <p className="text-xs text-[#8c8c94] font-sans leading-relaxed">
              Tecidos italianos Albini, lãs Biella e ferragens de titânio acompanhados de selo numerado individual.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
