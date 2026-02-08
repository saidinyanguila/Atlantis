import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowLeft, Minus, Plus } from "lucide-react";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { toast } from "sonner";

import productCoat from "../assets/product-coat.jpg";
import productBlazer from "../assets/product-blazer.jpg";
import productBlouse from "../assets/product-blouse.jpg";
import productTrousers from "../assets/product-trousers.jpg";
import productBag from "../assets/product-bag.jpg";
import productSweater from "../assets/product-sweater.jpg";

const allProducts = [
	{
		slug: "wool-oversized-coat",
		name: "Wool Oversized Coat",
		price: 890,
		image: productCoat,
		category: "Outerwear",
		description: "Crafted from premium Italian wool, this oversized coat drapes beautifully with a relaxed silhouette. Features a notched lapel, concealed button closure, and deep patch pockets. Fully lined in silk for effortless layering.",
		details: ["100% Italian virgin wool", "Silk lining", "Notched lapel", "Concealed button closure", "Two patch pockets", "Dry clean only"],
		sizes: ["XS", "S", "M", "L", "XL"],
	},
	{
		slug: "tailored-blazer",
		name: "Tailored Blazer",
		price: 650,
		image: productBlazer,
		category: "Jackets",
		description: "A timeless single-breasted blazer with impeccable tailoring. Cut from structured wool-blend fabric with a subtle texture, it features a slim fit, peaked lapels, and functional sleeve buttons.",
		details: ["Wool-blend fabric", "Slim fit", "Peaked lapels", "Functional sleeve buttons", "Interior chest pocket", "Professional dry clean"],
		sizes: ["XS", "S", "M", "L", "XL"],
	},
	{
		slug: "silk-satin-blouse",
		name: "Silk Satin Blouse",
		price: 320,
		image: productBlouse,
		category: "Tops",
		description: "Luxurious silk satin blouse with a fluid drape and subtle sheen. Features a relaxed fit, concealed front placket, and French cuffs for an elevated everyday look.",
		details: ["100% mulberry silk", "Satin weave", "Relaxed fit", "Concealed front placket", "French cuffs", "Hand wash recommended"],
		sizes: ["XS", "S", "M", "L", "XL"],
	},
	{
		slug: "classic-wool-trousers",
		name: "Classic Wool Trousers",
		price: 420,
		image: productTrousers,
		category: "Bottoms",
		description: "Elegantly tailored wool trousers with a high-rise waist and wide leg. Crafted from fine merino wool with a comfortable stretch, featuring pressed creases and a clean front.",
		details: ["98% merino wool, 2% elastane", "High-rise waist", "Wide leg", "Pressed front creases", "Side zip closure", "Dry clean recommended"],
		sizes: ["XS", "S", "M", "L", "XL"],
	},
	{
		slug: "leather-tote-bag",
		name: "Leather Tote Bag",
		price: 780,
		image: productBag,
		category: "Accessories",
		description: "A sculptural tote bag handcrafted from supple full-grain leather. Spacious interior with suede lining, magnetic snap closure, and an interior zip pocket. Designed to age beautifully over time.",
		details: ["Full-grain leather", "Suede lining", "Magnetic snap closure", "Interior zip pocket", "Dimensions: 38 × 30 × 14 cm", "Dust bag included"],
		sizes: ["One Size"],
	},
	{
		slug: "cashmere-sweater",
		name: "Cashmere Sweater",
		price: 540,
		image: productSweater,
		category: "Knitwear",
		description: "Incredibly soft crew-neck sweater knitted from two-ply Mongolian cashmere. A relaxed fit with ribbed cuffs and hem, perfect for layering or wearing on its own.",
		details: ["100% Mongolian cashmere", "Two-ply knit", "Crew neck", "Ribbed cuffs and hem", "Relaxed fit", "Hand wash in cold water"],
		sizes: ["XS", "S", "M", "L", "XL"],
	},
];

const ProductDetail = () => {
	const { slug } = useParams<{ slug: string }>();
	const product = allProducts.find((p) => p.slug === slug);
	const [selectedSize, setSelectedSize] = useState<string | null>(null);
	const [quantity, setQuantity] = useState(1);
	const { addItem } = useCart();

	if (!product) {
		return (
			<div className="min-h-screen" id="top">
				<Header />
				<main className="pt-32 pb-20 text-center">
					<h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
					<Link to="/" className="text-sm uppercase tracking-widest hover:text-muted-foreground transition-colors">
						← Back to Shop
					</Link>
				</main>
				<Footer />
			</div>
		);
	}

	return (
		<div className="min-h-screen">
			<Header />
			<main className="pt-24 md:pt-28 pb-20">
				<div className="container mx-auto px-6">
					{/* Breadcrumb */}
					<Link to="/" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-8 md:mb-12">
						<ArrowLeft size={16} />
						Back
					</Link>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
						{/* Image */}
						<div className="bg-secondary overflow-hidden">
							<img src={product.image} alt={product.name} className="w-full aspect-[3/4] object-cover"/>
						</div>

						{/* Info */}
						<div className="flex flex-col justify-center py-4">
							<p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">{product.category}</p>
							<h1 className="font-serif text-3xl md:text-5xl mb-4">{product.name}</h1>
							<p className="text-xl mb-8">R {product.price.toLocaleString()}</p>
							<p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

							{/* Size selector */}
							<div className="mb-8">
								<p className="text-sm uppercase tracking-widest mb-3">Size</p>
								<div className="flex flex-wrap gap-2">
								{product.sizes.map((size) => (
									<button
									key={size}
									onClick={() => setSelectedSize(size)}
									className={`min-w-[3rem] px-4 py-2 border text-sm uppercase tracking-wider transition-colors ${
										selectedSize === size
										? "border-foreground bg-foreground text-background"
										: "border-border hover:border-foreground"
									}`}
									>
									{size}
									</button>
								))}
								</div>
							</div>

							{/* Quantity */}
							<div className="mb-8">
								<p className="text-sm uppercase tracking-widest mb-3">Quantity</p>
								<div className="inline-flex items-center border border-border">
									<button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-secondary transition-colors">
										<Minus size={14} />
									</button>
									<span className="px-6 text-sm">{quantity}</span>
									<button
										onClick={() => setQuantity(quantity + 1)}
										className="p-3 hover:bg-secondary transition-colors"
									>
										<Plus size={14} />
									</button>
								</div>
							</div>

							<Button size="lg" className="w-full mb-4" onClick={() => {
								if (!selectedSize) {
									toast.error("Please select a size");
									return;
								}
								for (let i = 0; i < quantity; i++) {
									addItem({
									slug: product.slug,
									name: product.name,
									price: product.price,
									image: product.image,
									size: selectedSize,
									});
								}
								toast.success(`${product.name} added to cart`);
								}}
							>
								Add to Cart
							</Button>

							{/* Details */}
							<div className="mt-8 pt-8 border-t border-border">
								<p className="text-sm uppercase tracking-widest mb-4">Details</p>
								<ul className="space-y-2">
								{product.details.map((detail, i) => (
									<li key={i} className="text-sm text-muted-foreground">
									— {detail}
									</li>
								))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default ProductDetail;
