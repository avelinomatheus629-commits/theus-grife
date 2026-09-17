import React, { useState } from 'react';
import { LUXURY_PRODUCTS } from './data/products';
import { Product, ProductColor, CartItem, QuickOrderReceipt } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandPillarsSection } from './components/BrandPillarsSection';
import { CatalogSection } from './components/CatalogSection';
import { LookbookSection } from './components/LookbookSection';
import { ConciergeGuarantees } from './components/ConciergeGuarantees';
import { Footer } from './components/Footer';
import { QuickBuyModal } from './components/QuickBuyModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { Check, Zap, ShoppingBag } from 'lucide-react';

export default function App() {
  // Products
  const [products] = useState<Product[]>(LUXURY_PRODUCTS);

  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: LUXURY_PRODUCTS[1], // Polo Lacoste inspired
      selectedSize: 'M',
      selectedColor: LUXURY_PRODUCTS[1].colors[0],
      quantity: 1,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Filter & search states
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Quick Buy modal state (The core requested feature)
  const [quickBuyProduct, setQuickBuyProduct] = useState<Product | null>(null);
  const [quickBuyInitialSize, setQuickBuyInitialSize] = useState<string | undefined>(undefined);
  const [quickBuyInitialColor, setQuickBuyInitialColor] = useState<ProductColor | undefined>(undefined);

  // Detailed inspect modal state
  const [detailedProduct, setDetailedProduct] = useState<Product | null>(null);

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Trigger quick buy from any card, hero, or lookbook
  const handleOpenQuickBuy = (product: Product, size?: string, color?: ProductColor) => {
    setQuickBuyProduct(product);
    setQuickBuyInitialSize(size || product.sizes[0]);
    setQuickBuyInitialColor(color || product.colors[0]);
  };

  // Add to shopping bag
  const handleAddToCart = (product: Product, size: string, color: ProductColor) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize === size &&
          item.selectedColor.name === color.name
      );

      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex].quantity += 1;
        return copy;
      } else {
        return [
          ...prev,
          {
            product,
            selectedSize: size,
            selectedColor: color,
            quantity: 1,
          },
        ];
      }
    });

    showToast(`"${product.name}" adicionado à sacola.`);
  };

  // Cart actions
  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveFromCart(index);
      return;
    }
    setCartItems((prev) => {
      const copy = [...prev];
      copy[index].quantity = newQty;
      return copy;
    });
  };

  const handleRemoveFromCart = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
    showToast('Item removido da sacola.');
  };

  const handleQuickCheckoutFromCart = () => {
    if (cartItems.length === 0) return;
    setIsCartOpen(false);
    // Open quick buy with the top cart item
    const topItem = cartItems[0];
    handleOpenQuickBuy(topItem.product, topItem.selectedSize, topItem.selectedColor);
  };

  const handleOrderSuccess = (receipt: QuickOrderReceipt) => {
    showToast(`Pedido ${receipt.orderId} aprovado com sucesso!`);
  };

  return (
    <div className="min-h-screen bg-[#0c0c0d] text-[#ececeb] flex flex-col font-sans selection:bg-[#c5a880] selection:text-black">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#19191e] border border-[#c5a880] text-white px-5 py-3 shadow-2xl flex items-center gap-3 animate-fadeIn">
          <span className="p-1 rounded-full bg-[#c5a880] text-black">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </span>
          <span className="text-xs font-sans font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        cartItems={cartItems}
        onOpenCart={() => setIsCartOpen(true)}
        onFilterBrand={(brand) => {
          setSelectedBrand(brand);
          const el = document.getElementById('colecoes');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onSearch={setSearchTerm}
        searchTerm={searchTerm}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero
          onQuickBuyFeatured={(prod) => handleOpenQuickBuy(prod)}
          featuredProduct={products[0]}
        />

        {/* Brand Heritage Pillars (Armani, Prada, Lacoste, Oakley) */}
        <BrandPillarsSection
          onSelectBrand={(brand) => setSelectedBrand(brand)}
          selectedBrand={selectedBrand}
        />

        {/* Catalog Section with Quick Buy Buttons on Every Card */}
        <CatalogSection
          products={products}
          onQuickBuy={(prod, size, color) => handleOpenQuickBuy(prod, size, color)}
          onAddToCart={handleAddToCart}
          onViewDetails={(prod) => setDetailedProduct(prod)}
          selectedBrand={selectedBrand}
          onSelectBrand={setSelectedBrand}
          searchTerm={searchTerm}
          onClearSearch={() => setSearchTerm('')}
        />

        {/* Editorial Lookbook */}
        <LookbookSection
          products={products}
          onQuickBuy={(prod) => handleOpenQuickBuy(prod)}
          onViewDetails={(prod) => setDetailedProduct(prod)}
        />

        {/* Concierge & Luxury Standards */}
        <ConciergeGuarantees />

      </main>

      {/* Footer */}
      <Footer />

      {/* QUICK BUY MODAL (Core Star Feature) */}
      <QuickBuyModal
        product={quickBuyProduct}
        initialSize={quickBuyInitialSize}
        initialColor={quickBuyInitialColor}
        onClose={() => setQuickBuyProduct(null)}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={detailedProduct}
        onClose={() => setDetailedProduct(null)}
        onQuickBuy={(prod, size, color) => {
          setDetailedProduct(null);
          handleOpenQuickBuy(prod, size, color);
        }}
        onAddToCart={handleAddToCart}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onQuickCheckoutFromCart={handleQuickCheckoutFromCart}
      />

    </div>
  );
}
