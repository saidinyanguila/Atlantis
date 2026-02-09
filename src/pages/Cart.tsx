import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../contexts/CartContext";
import { Minus, Plus, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";

const Cart = () => {
	const { items, removeItem, updateQuantity, totalPrice } = useCart();
	const [isSignedInOpen, setIsSignedInOpen] = useState(false);
	const [isSignedIn, setIsSignedIn] = useState(false);

	const handleCheckOut = (e: React.FormEvent) => {
		e.preventDefault();

		if (isSignedIn) {
			toast.info("We not there yet");
		}
		else {
			setIsSignedInOpen(true);
			toast.info("We not there yet");
		}
	}

	return (
		<div className="min-h-screen">
			<Header/>
			<main className="pt-24 md:pt-28 pb-20">
				<div className="container mx-auto px-6">
					<Link to="/Atlaintis/" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-8 md:mb-12">
						<ArrowLeft size={16} />
						Continue Shopping
					</Link>

					<h1 className="font-serif text-3xl md:text-5xl mb-10">Your Cart</h1>

					{items.length === 0 ? 
					(
						<div className="text-center py-20">
							<p className="text-muted-foreground mb-6">Your cart is empty.</p>
							<Link to="/Atlaintis/">
								<Button variant="outline">Shop Now</Button>
							</Link>
						</div>
					) : 
					(
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
							<div className="lg:col-span-2 space-y-8">
								{items.map((item) => (
								<div
									key={`${item.slug}-${item.size}`}
									className="flex gap-6 pb-8 border-b border-border"
								>
									<Link to={`/product/${item.slug}`}>
									<img
										src={item.image}
										alt={item.name}
										className="w-28 h-36 md:w-36 md:h-48 object-cover bg-secondary flex-shrink-0"
									/>
									</Link>
									<div className="flex-1">
									<Link to={`/Atlaintis/product/${item.slug}`}>
										<h3 className="font-serif text-lg hover:text-muted-foreground transition-colors">
										{item.name}
										</h3>
									</Link>
									<p className="text-xs text-muted-foreground mt-1">Size: {item.size}</p>
									<p className="text-sm mt-2">${item.price.toLocaleString()}</p>
									<div className="flex items-center gap-6 mt-4">
										<div className="inline-flex items-center border border-border">
										<button
											onClick={() => updateQuantity(item.slug, item.size, item.quantity - 1)}
											className="p-2 hover:bg-secondary transition-colors"
										>
											<Minus size={14} />
										</button>
										<span className="px-4 text-sm">{item.quantity}</span>
										<button
											onClick={() => updateQuantity(item.slug, item.size, item.quantity + 1)}
											className="p-2 hover:bg-secondary transition-colors"
										>
											<Plus size={14} />
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
									<p className="font-serif text-lg hidden md:block">
									${(item.price * item.quantity).toLocaleString()}
									</p>
								</div>
								))}
							</div>

							<div className="lg:sticky lg:top-28 self-start border border-border p-8 space-y-6">
								<h2 className="font-serif text-xl">Order Summary</h2>

								<div className="flex justify-between text-sm">
									<span className="text-muted-foreground">Subtotal</span>
									<span>${totalPrice.toLocaleString()}</span>
								</div>

								<div className="flex justify-between text-sm">
									<span className="text-muted-foreground">Shipping</span>
									<span>Complimentary</span>
								</div>

								<div className="border-t border-border pt-4 flex justify-between">
									<span className="text-sm uppercase tracking-widest">Total</span>
									<span className="font-serif text-xl">${totalPrice.toLocaleString()}</span>
								</div>

								<Button onClick={handleCheckOut} size="lg" className="w-full">Checkout</Button>
							</div>
						</div>
					)}
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Cart;
