import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { X, Minus, Plus } from "lucide-react";
import { Button } from "../components/ui/button";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-foreground/30 z-50 animate-fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 shadow-2xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl">Your Cart ({items.length})</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:opacity-70 transition-opacity"
            aria-label="Close Cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="text-muted-foreground text-sm text-center mt-16">
              Your cart is empty.
            </p>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.slug}-${item.size}`} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-28 object-cover bg-secondary flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm truncate">{item.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Size: {item.size}
                    </p>
                    <p className="text-sm mt-1">${item.price.toLocaleString()}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="inline-flex items-center border border-border">
                        <button
                          onClick={() => updateQuantity(item.slug, item.size, item.quantity - 1)}
                          className="p-1.5 hover:bg-secondary transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 text-xs">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.slug, item.size, item.quantity + 1)}
                          className="p-1.5 hover:bg-secondary transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.slug, item.size)}
                        className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm uppercase tracking-widest">Total</span>
              <span className="font-serif text-lg">${totalPrice.toLocaleString()}</span>
            </div>
            <Link
              to="/Atlaintis/cart"
              onClick={() => setIsOpen(false)}
              className="block"
            >
              <Button variant="outline" className="w-full">
                View Full Cart
              </Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
