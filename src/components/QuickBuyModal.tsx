import React, { useState } from 'react';
import { Product, ProductColor, QuickOrderReceipt } from '../types';
import { X, Zap, Check, ShieldCheck, Truck, QrCode, CreditCard, Smartphone, Copy, CheckCircle2, ChevronRight, Lock } from 'lucide-react';

interface QuickBuyModalProps {
  product: Product | null;
  initialSize?: string;
  initialColor?: ProductColor;
  onClose: () => void;
  onOrderSuccess: (receipt: QuickOrderReceipt) => void;
}

export const QuickBuyModal: React.FC<QuickBuyModalProps> = ({
  product,
  initialSize,
  initialColor,
  onClose,
  onOrderSuccess,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(initialSize || product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState<ProductColor>(initialColor || product.colors[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'credit_card' | 'apple_pay'>('pix');
  const [couponCode, setCouponCode] = useState<string>('MAISON10');
  const [couponApplied, setCouponApplied] = useState<boolean>(true);
  const [pixCopied, setPixCopied] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [completedReceipt, setCompletedReceipt] = useState<QuickOrderReceipt | null>(null);

  // Form states
  const [name, setName] = useState<string>('Matheus Avelino');
  const [email, setEmail] = useState<string>('avelino@luxo.com.br');
  const [phone, setPhone] = useState<string>('(11) 98765-4321');
  const [cep, setCep] = useState<string>('01414-001'); // Jardins, SP
  const [address, setAddress] = useState<string>('Rua Oscar Freire, 1200 - Jardins, São Paulo/SP');

  // Calculations
  const basePrice = product.price * quantity;
  const discountRate = couponApplied ? 0.10 : 0; // 10% coupon
  const couponDiscount = basePrice * discountRate;
  const pixDiscount = paymentMethod === 'pix' ? (basePrice - couponDiscount) * 0.05 : 0; // 5% extra on PIX
  const finalTotal = basePrice - couponDiscount - pixDiscount;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.toUpperCase() === 'MAISON10' || couponCode.toUpperCase() === 'PRADA10' || couponCode.toUpperCase() === 'LUXO') {
      setCouponApplied(true);
    }
  };

  const handleConfirmPurchase = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const receipt: QuickOrderReceipt = {
        orderId: `MS-${Math.floor(100000 + Math.random() * 900000)}`,
        product,
        size: selectedSize,
        color: selectedColor,
        quantity,
        total: finalTotal,
        paymentMethod,
        customerName: name || 'Cavalheiro',
        phone,
        email,
        shippingAddress: address,
        date: new Date().toLocaleDateString('pt-BR'),
      };
      setIsProcessing(false);
      setCompletedReceipt(receipt);
      onOrderSuccess(receipt);
    }, 1200);
  };

  const copyPixCode = () => {
    navigator.clipboard?.writeText('00020126580014br.gov.bcb.pix0136maison-sartorial-pagamentos-exclusivos@safra.com.br520400005303986540' + finalTotal.toFixed(2));
    setPixCopied(true);
    setTimeout(() => setPixCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#121215] border border-[#2e2e36] text-white shadow-2xl my-6 flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-[#23232a] flex items-center justify-between bg-[#17171c]">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 bg-[#c5a880] text-black">
              <Zap className="w-4 h-4 fill-current" />
            </span>
            <div>
              <h3 className="font-display text-base sm:text-lg tracking-wider font-semibold text-white uppercase">
                {completedReceipt ? 'Pedido Confirmado com Sucesso' : 'Compra Rápida Expresso 1-Clique'}
              </h3>
              <p className="text-[10px] sm:text-xs text-[#9d9da5] font-sans">
                {completedReceipt
                  ? 'Seu atendimento personalizado já foi iniciado'
                  : 'Atendimento prioritário sem necessidade de cadastro longo'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#888890] hover:text-white transition-colors cursor-pointer border border-transparent hover:border-[#383842]"
            title="Fechar Janela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">

          {/* SUCCESS SCREEN */}
          {completedReceipt ? (
            <div className="text-center py-6 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-sans font-semibold">
                  Maison Sartorial Concierge
                </span>
                <h4 className="font-display text-2xl text-white font-medium mt-1">
                  Parabéns, {completedReceipt.customerName}!
                </h4>
                <p className="text-sm text-[#9e9ea6] font-sans mt-1">
                  Pedido Nº <strong className="text-white font-mono">{completedReceipt.orderId}</strong>
                </p>
              </div>

              {/* Order summary box */}
              <div className="p-4 bg-[#18181d] border border-[#272730] text-left space-y-3 text-xs font-sans">
                <div className="flex items-center justify-between border-b border-[#24242c] pb-2">
                  <span className="text-[#888892]">Peça Selecionada:</span>
                  <span className="text-white font-medium">{completedReceipt.product.name}</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#24242c] pb-2">
                  <span className="text-[#888892]">Tamanho & Cor:</span>
                  <span className="text-white">
                    {completedReceipt.size} • {completedReceipt.color.name}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-[#24242c] pb-2">
                  <span className="text-[#888892]">Forma de Pagamento:</span>
                  <span className="text-white uppercase font-medium">
                    {completedReceipt.paymentMethod === 'pix' ? 'PIX Instantâneo (5% OFF)' : completedReceipt.paymentMethod === 'apple_pay' ? 'Apple Pay' : 'Cartão de Crédito'}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-[#24242c] pb-2">
                  <span className="text-[#888892]">Endereço de Envio:</span>
                  <span className="text-white text-right max-w-xs">{completedReceipt.shippingAddress}</span>
                </div>
                <div className="flex items-center justify-between pt-1 text-sm font-semibold">
                  <span className="text-[#c5a880]">Total Pago:</span>
                  <span className="text-white text-base">
                    R$ {completedReceipt.total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </div>

              {/* PIX Quick code if payment was PIX */}
              {completedReceipt.paymentMethod === 'pix' && (
                <div className="p-4 bg-[#14181f] border border-[#23354d] space-y-3 text-center">
                  <div className="flex items-center justify-center gap-2 text-xs text-[#70a4ea]">
                    <QrCode className="w-4 h-4" />
                    <span className="font-semibold uppercase tracking-wider">Chave PIX Exclusiva Gerada</span>
                  </div>
                  <p className="text-xs text-[#95b0d4]">
                    Copie a chave abaixo para validar a compensação imediata via seu banco:
                  </p>
                  <button
                    onClick={copyPixCode}
                    className="w-full py-2.5 px-4 bg-[#1a2332] hover:bg-[#253247] border border-[#3b5275] text-white text-xs font-mono font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    {pixCopied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400">Código PIX Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#c5a880]" />
                        <span>Copiar Código PIX Copia e Cola</span>
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* Delivery info */}
              <div className="p-3 bg-[#17171b] border border-[#26262e] flex items-center gap-3 text-left">
                <Truck className="w-5 h-5 text-[#c5a880] flex-shrink-0" />
                <div className="text-xs font-sans">
                  <p className="text-white font-medium">Prazo Estimado de Entrega Expressa: 24h a 48h</p>
                  <p className="text-[#888890]">
                    Embalagem presente premium com fita de gorgurão e amostra de fragrância Maison.
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3.5 bg-[#c5a880] hover:bg-[#d6ba94] text-black font-sans font-bold text-xs uppercase tracking-[0.2em] transition-colors cursor-pointer"
              >
                Voltar à Loja
              </button>
            </div>
          ) : (
            /* CHECKOUT STEP */
            <div className="space-y-6 font-sans">

              {/* Product preview row */}
              <div className="flex gap-4 p-3.5 bg-[#17171b] border border-[#24242c]">
                <div className="w-20 h-24 bg-[#202025] flex-shrink-0 overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-wider text-[#c5a880] font-medium">
                        Inspiração {product.brandInspiration}
                      </span>
                      <span className="text-xs text-[#8c8c94] font-mono">
                        {product.origin}
                      </span>
                    </div>
                    <h4 className="font-serif text-base text-white font-medium line-clamp-1">
                      {product.name}
                    </h4>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#232328]">
                    <div>
                      <span className="text-sm font-bold text-white">
                        R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>
                      <span className="text-[10px] text-[#86868e] block">
                        ou 10x de R$ {(product.price / 10).toFixed(2).replace('.', ',')}
                      </span>
                    </div>

                    {/* Quantity stepper */}
                    <div className="flex items-center border border-[#303038] bg-[#121215]">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-2.5 py-1 text-xs text-[#8e8e96] hover:text-white"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-mono font-medium text-white">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-2.5 py-1 text-xs text-[#8e8e96] hover:text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Select Size & Color */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Size Selector */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#8e8e96] font-medium block mb-1.5">
                    Tamanho Selecionado: <span className="text-white">{selectedSize}</span>
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {product.sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`text-xs px-3 py-1.5 border transition-all cursor-pointer ${
                          selectedSize === s
                            ? 'border-[#c5a880] bg-[#c5a880]/15 text-[#c5a880] font-semibold'
                            : 'border-[#292932] text-[#888890] hover:text-white hover:border-[#40404a]'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selector */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#8e8e96] font-medium block mb-1.5">
                    Cor: <span className="text-white">{selectedColor.name}</span>
                  </label>
                  <div className="flex items-center gap-2">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c)}
                        className={`px-3 py-1.5 text-xs flex items-center gap-2 border transition-all cursor-pointer ${
                          selectedColor.name === c.name
                            ? 'border-[#c5a880] text-white bg-[#1a1a20]'
                            : 'border-[#26262e] text-[#888890] hover:text-white'
                        }`}
                      >
                        <span
                          className="w-2.5 h-2.5 rounded-full border border-black/40"
                          style={{ backgroundColor: c.hex }}
                        />
                        <span>{c.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-wider text-[#8e8e96] font-medium block">
                  Escolha o Método de Pagamento Rápido:
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {/* PIX */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-3 text-left border transition-all cursor-pointer ${
                      paymentMethod === 'pix'
                        ? 'border-[#c5a880] bg-[#c5a880]/10 text-white'
                        : 'border-[#272730] bg-[#16161a] text-[#8e8e96] hover:border-[#383842]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <QrCode className="w-4 h-4 text-[#c5a880]" />
                      <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 font-bold uppercase">
                        -5% Extra
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-white">PIX Imediato</div>
                    <div className="text-[10px] text-[#9a9aa2]">Aprovação em 2s</div>
                  </button>

                  {/* Credit Card */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('credit_card')}
                    className={`p-3 text-left border transition-all cursor-pointer ${
                      paymentMethod === 'credit_card'
                        ? 'border-[#c5a880] bg-[#c5a880]/10 text-white'
                        : 'border-[#272730] bg-[#16161a] text-[#8e8e96] hover:border-[#383842]'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-[#c5a880] mb-1" />
                    <div className="text-xs font-semibold text-white">Cartão de Crédito</div>
                    <div className="text-[10px] text-[#9a9aa2]">Até 10x s/ juros</div>
                  </button>

                  {/* Apple Pay */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('apple_pay')}
                    className={`p-3 text-left border transition-all cursor-pointer ${
                      paymentMethod === 'apple_pay'
                        ? 'border-[#c5a880] bg-[#c5a880]/10 text-white'
                        : 'border-[#272730] bg-[#16161a] text-[#8e8e96] hover:border-[#383842]'
                    }`}
                  >
                    <Smartphone className="w-4 h-4 text-[#c5a880] mb-1" />
                    <div className="text-xs font-semibold text-white">Apple Pay</div>
                    <div className="text-[10px] text-[#9a9aa2]">1-Toque biométrico</div>
                  </button>
                </div>
              </div>

              {/* Express customer info form */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-[#8e8e96] font-medium">
                    Dados para Envio & Contato Concierge:
                  </span>
                  <span className="text-[10px] text-[#c5a880] flex items-center gap-1 font-mono">
                    <Lock className="w-3 h-3" /> Criptografia 256-Bit
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nome Completo"
                      className="w-full bg-[#17171b] border border-[#2b2b34] text-white text-xs px-3 py-2.5 focus:outline-none focus:border-[#c5a880]"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="WhatsApp para rastreio"
                      className="w-full bg-[#17171b] border border-[#2b2b34] text-white text-xs px-3 py-2.5 focus:outline-none focus:border-[#c5a880]"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Endereço Completo de Entrega"
                      className="w-full bg-[#17171b] border border-[#2b2b34] text-white text-xs px-3 py-2.5 focus:outline-none focus:border-[#c5a880]"
                    />
                  </div>
                </div>
              </div>

              {/* Coupon / Voucher Section */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Cupom de Boas-Vindas"
                  className="flex-1 bg-[#17171b] border border-[#2b2b34] text-white text-xs px-3 py-2 uppercase font-mono tracking-wider focus:outline-none focus:border-[#c5a880]"
                />
                <button
                  type="button"
                  onClick={handleApplyCoupon}
                  className="px-4 py-2 bg-[#26262e] hover:bg-[#34343e] text-white text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Aplicar
                </button>
              </div>

              {couponApplied && (
                <div className="flex items-center justify-between text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5">
                  <span>Cupom MAISON10 ativo (10% de cortesia exclusivo)</span>
                  <span className="font-mono font-bold">- R$ {couponDiscount.toFixed(2).replace('.', ',')}</span>
                </div>
              )}

              {/* Price Calculation Summary */}
              <div className="p-3.5 bg-[#17171c] border border-[#24242b] space-y-2 text-xs">
                <div className="flex justify-between text-[#8c8c94]">
                  <span>Subtotal ({quantity}x):</span>
                  <span className="text-white font-mono">
                    R$ {basePrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
                {couponApplied && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Desconto Cortesia Cupom:</span>
                    <span className="font-mono">- R$ {couponDiscount.toFixed(2).replace('.', ',')}</span>
                  </div>
                )}
                {paymentMethod === 'pix' && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Desconto Pagamento PIX (5%):</span>
                    <span className="font-mono">- R$ {pixDiscount.toFixed(2).replace('.', ',')}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#8c8c94]">
                  <span>Frete Expresso Cortesia:</span>
                  <span className="text-[#c5a880] uppercase tracking-wider font-semibold">Grátis (24h)</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#2a2a33] text-sm sm:text-base font-bold text-white">
                  <span className="text-[#c5a880]">Total da Compra Rápida:</span>
                  <span className="font-sans">
                    R$ {finalTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </div>

              {/* Main Submit Quick Purchase Button */}
              <button
                type="button"
                onClick={handleConfirmPurchase}
                disabled={isProcessing}
                id="btn-confirm-quick-checkout"
                className="w-full py-4 bg-[#c5a880] hover:bg-[#d6ba94] text-black font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-[#c5a880]/15"
              >
                {isProcessing ? (
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Processando com Concierge...</span>
                  </div>
                ) : (
                  <>
                    <Zap className="w-4 h-4 fill-current" />
                    <span>
                      Finalizar Compra Rápida • R${' '}
                      {finalTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-[#7a7a82]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#c5a880]" /> Garantia de Autenticidade
                </span>
                <span>•</span>
                <span>Troca Gratuita em 30 dias</span>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
