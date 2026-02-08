import ProductCard from "./ProductCard";
import productCoat from "../assets/product-coat.jpg";
import productBlazer from "../assets/product-blazer.jpg";
import productBlouse from "../assets/product-blouse.jpg";
import productTrousers from "../assets/product-trousers.jpg";
import productBag from "../assets/product-bag.jpg";
import productSweater from "../assets/product-sweater.jpg";

const products = [
	{ name: "Wool Oversized Coat", price: 390, image: productCoat, category: "Outerwear", slug: "wool-oversized-coat" },
	{ name: "Tailored Blazer", price: 650, image: productBlazer, category: "Jackets", slug: "tailored-blazer" },
	{ name: "Silk Satin Blouse", price: 209.99, image: productBlouse, category: "Tops", slug: "silk-satin-blouse" },
	{ name: "Classic Wool Trousers", price: 399.99, image: productTrousers, category: "Bottoms", slug: "classic-wool-trousers" },
	{ name: "Leather Tote Bag", price: 380, image: productBag, category: "Accessories", slug: "leather-tote-bag" },
	{ name: "Cashmere Sweater", price: 349.99, image: productSweater, category: "Knitwear", slug: "cashmere-sweater" },
];

const FeaturedProducts = () => {
	return (
		<section className="py-20 md:py-32 bg-secondary">
			<div className="container mx-auto px-6">
				<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
					<div>
						<p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-2">
						Curated Selection
						</p>
						<h2 className="font-serif text-3xl md:text-5xl">Featured Pieces</h2>
					</div>

					<a href="#all-products"className="mt-4 md:mt-0 text-sm uppercase tracking-widest hover:text-muted-foreground transition-colors">
						View All →
					</a>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-16">
					{products.map((product, index) => (
						<div key={product.name} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
						<	ProductCard {...product} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturedProducts;
