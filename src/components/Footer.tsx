import React, { useState } from 'react';
import { ArrowRight, Check, ShieldCheck, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#09090b] text-[#8c8c94] border-t border-[#202025] font-sans">
      
      {/* Newsletter Strip */}
      <div className="border-b border-[#1c1c22] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-semibold block">
                Privilégio de Membro
              </span>
              <h3 className="font-display text-2xl text-white font-normal">
                Acesso Prioritário a Séries Limitadas
              </h3>
              <p className="text-xs text-[#8c8c94] max-w-md font-light leading-relaxed">
                Receba convites confidenciais para novos lotes de alfaiataria italiana, tecidos nobres e edições restritas.
              </p>
            </div>

            <div className="lg:col-span-6">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail institucional ou pessoal"
                  required
                  className="flex-1 bg-[#141418] border border-[#2d2d36] text-white text-xs px-4 py-3 focus:outline-none focus:border-[#c5a880] rounded-none"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#c5a880] hover:bg-[#d8be99] text-black text-xs uppercase tracking-[0.2em] font-bold transition-colors cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  {subscribed ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Inscrição Confirmada</span>
                    </>
                  ) : (
                    <>
                      <span>Inscrever-se</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Links & Flagships */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-display text-xl tracking-[0.25em] font-semibold text-white uppercase">
              MAISON SARTORIAL
            </h2>
            <p className="text-xs leading-relaxed max-w-sm text-[#7e7e86]">
              A convergência definitiva entre a fluidez da alta costura milanesa (Armani), o purismo vanguardista (Prada), a nobreza das quadras francesas (Lacoste) e a ciência de materiais de alta performance (Oakley).
            </p>
            <div className="text-[11px] text-[#616168] space-y-0.5">
              <p>Atendimento Concierge: +55 (11) 3089-9400</p>
              <p>Segunda a Sábado, das 09h às 21h (Horário de Brasília)</p>
            </div>
          </div>

          {/* Col 2: Coleções */}
          <div className="space-y-3">
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Criações
            </h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#colecoes" className="hover:text-white transition-colors">Alfaiataria Super 160s</a></li>
              <li><a href="#colecoes" className="hover:text-white transition-colors">Polos Petit Piqué Pima</a></li>
              <li><a href="#colecoes" className="hover:text-white transition-colors">Outerwear Re-Nylon</a></li>
              <li><a href="#colecoes" className="hover:text-white transition-colors">Óculos Titanium Prizm</a></li>
              <li><a href="#colecoes" className="hover:text-white transition-colors">Marroquinaria Saffiano</a></li>
            </ul>
          </div>

          {/* Col 3: Atendimento */}
          <div className="space-y-3">
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Privilégios
            </h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Compra Rápida em 1-Clique</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Envio Blindado em 24h</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guia de Ajuste e Medidas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Devolução Cortesia</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Certificado de Autenticidade</a></li>
            </ul>
          </div>

          {/* Col 4: Flagships */}
          <div className="space-y-3">
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Flagships
            </h3>
            <div className="space-y-2 text-xs text-[#7e7e86]">
              <div>
                <strong className="text-[#dedede] block">São Paulo — Jardins</strong>
                <span>Rua Bela Cintra, 2140</span>
              </div>
              <div>
                <strong className="text-[#dedede] block">Rio de Janeiro — Leblon</strong>
                <span>Av. Ataulfo de Paiva, 1079</span>
              </div>
              <div>
                <strong className="text-[#dedede] block">Milano — Quadrilatero</strong>
                <span>Via Montenapoleone, 8</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-14 pt-6 border-t border-[#1a1a20] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#5e5e66]">
          <p>© 2026 MAISON SARTORIAL. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <span>Privacidade & Dados</span>
            <span>Termos de Serviço</span>
            <span>Segurança SSL 256-Bit</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
