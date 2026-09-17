import React, { useState } from 'react';
import { CartItem, ProductColor } from '../types';
import { X, Trash2, Zap, ShoppingBag, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onQuickCheckoutFromCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onQuickCheckoutFromCart,
}) => {
  if (!isOpen) return null;

  const [couponCode, setCouponCode] = useState<string>('MAISON10');
  const [couponApplied, setCouponApplied] = useState<boolean>(true);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const discount = couponApplied ? subtotal * 0.10 : 0;
  const freeShippingThreshold = 800;
  const progressToFreeShipping = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const total = subtotal - discount;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dark backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#111114] border-l border-[#26262d] text-white flex flex-col justify-between shadow-2xl">
          
          {/* Header */}
          <div className="p-5 border-b border-[#222228] flex items-center justify-between bg-[#151518]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#c5a880]" />
              <h3 className="font-display text-base uppercase tracking-wider font-semibold">
                Sua Sacola Sartorial
              </h3>
              <span className="text-xs text-[#8c8c94] font-mono">
                ({cartItems.reduce((a, b) => a + b.quantity, 0)} itens)
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#888890] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-5 py-3 bg-[#17171c] border-b border-[#24242b] text-xs font-sans">
            {amountToFreeShipping > 0 ? (
              <p className="text-[#9e9ea6]">
                Adicione mais <strong className="text-white">R$ {amountToFreeShipping.toFixed(2).replace('.', ',')}</strong> para desbloquear Frete Expresso Cortesia.
              </p>
            ) : (
              <p className="text-emerald-400 font-medium flex items-center gap-1.5">
                <span>✦</span> Parabéns! Você ganhou Frete Expresso Cortesia para todo o Brasil.
              </p>
            )}
            <div className="w-full h-1.5 bg-[#25252c] mt-2 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#c5a880] transition-all duration-500"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-20 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#18181d] border border-[#27272e] flex items-center justify-center mx-auto text-[#6a6a72]">
                  <ShoppingBag className="w-6 h-6 stroke-[1.5]" />
                </div>
                <p className="text-[#888890] text-sm font-sans">
                  Sua sacola está vazia no momento.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#c5a880] hover:bg-white text-black font-sans text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
                >
                  Explorar Criações
                </button>
              </div>
            ) : (
              cartItems.map((item, idx) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}-${item.selectedColor.name}`}
                  className="flex gap-4 p-3 bg-[#161619] border border-[#232329] items-center"
                >
                  <div className="w-16 h-20 bg-[#1e1e24] flex-shrink-0 overflow-hidden">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0 font-sans">
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="text-xs font-serif text-white font-medium truncate">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(idx)}
                        className="text-[#6c6c74] hover:text-red-400 p-1 transition-colors"
                        title="Remover item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-[11px] text-[#86868e] mt-0.5">
                      <span>Tam: {item.selectedSize}</span>
                      <span className="mx-1.5">•</span>
                      <span>{item.selectedColor.name}</span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs font-bold text-white">
                        R$ {(item.product.price * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>

                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-[#2e2e36] bg-[#121215]">
                        <button
                          onClick={() => onUpdateQuantity(idx, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs text-[#8c8c94] hover:text-white"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-mono font-medium">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs text-[#8c8c94] hover:text-white"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cartItems.length > 0 && (
            <div className="p-5 bg-[#141417] border-t border-[#222227] space-y-4 font-sans">
              
              {/* Coupon Row */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Cupom"
                  className="flex-1 bg-[#17171b] border border-[#2b2b34] text-xs px-3 py-1.5 uppercase font-mono tracking-wider focus:outline-none focus:border-[#c5a880]"
                />
                <button
                  onClick={() => setCouponApplied(true)}
                  className="px-3 py-1.5 bg-[#25252c] text-xs font-medium uppercase tracking-wider text-white hover:bg-[#32323c] cursor-pointer"
                >
                  Aplicar
                </button>
              </div>

              {/* Subtotal & Total lines */}
              <div className="space-y-1.5 text-xs text-[#8c8c94]">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="text-white font-mono">
                    R$ {subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
                {couponApplied && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Desconto Cortesia (10%):</span>
                    <span className="font-mono">- R$ {discount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Frete Expresso:</span>
                  <span className="text-[#c5a880] font-semibold">Cortesia</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#25252c] text-base font-bold text-white">
                  <span className="text-[#c5a880]">Total:</span>
                  <span className="font-sans">
                    R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="text-[10px] text-[#7a7a82] text-right">
                  ou 10x de R$ {(total / 10).toFixed(2).replace('.', ',')} sem juros
                </div>
              </div>

              {/* Fast Checkout CTA */}
              <button
                onClick={onQuickCheckoutFromCart}
                id="btn-cart-quick-checkout"
                className="w-full py-3.5 bg-[#c5a880] hover:bg-[#d6ba94] text-black font-sans font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#c5a880]/15"
              >
                <Zap className="w-4 h-4 fill-current" />
                <span>Finalizar Compra Rápida (1-Clique)</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#74747c]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Pagamento 100% Blindado com Certificado SSL</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
