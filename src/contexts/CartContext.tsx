import { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  slug: string;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (slug: string, size: string) => void;
  updateQuantity: (slug: string, size: string, quantity: number) => void;
  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within CartProvider");
    return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [items, setItems] = useState<CartItem[]>([]);
	const [isOpen, setIsOpen] = useState(false);

	const addItem = (newItem: Omit<CartItem, "quantity">) => {
		setItems((prev) => {
		const existing = prev.find(
			(i) => i.slug === newItem.slug && i.size === newItem.size
		);
		if (existing) {
			return prev.map((i) =>
			i.slug === newItem.slug && i.size === newItem.size
				? { ...i, quantity: i.quantity + 1 }
				: i
			);
		}
		return [...prev, { ...newItem, quantity: 1 }];
		});
		setIsOpen(true);
	};

	const removeItem = (slug: string, size: string) => {
		setItems((prev) => prev.filter((i) => !(i.slug === slug && i.size === size)));
	};

	const updateQuantity = (slug: string, size: string, quantity: number) => {
		if (quantity < 1) return removeItem(slug, size);
		setItems((prev) =>
		prev.map((i) =>
			i.slug === slug && i.size === size ? { ...i, quantity } : i
		)
		);
	};

	const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
	const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

	return (
		<CartContext.Provider
		value={{ items, addItem, removeItem, updateQuantity, totalItems, totalPrice, isOpen, setIsOpen }}>
			{children}
		</CartContext.Provider>
	);
};
