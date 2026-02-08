import { Link } from "react-router-dom";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category: string;
  slug: string;
}

const ProductCard = ({ name, price, image, category, slug }: ProductCardProps) => {
	return (
		<a href={`/product/${slug}`} className="block">
			<article className="product-card group cursor-pointer">
				<div className="relative overflow-hidden bg-secondary mb-4">
					<img src={image} alt={name} className="product-card-image" loading="lazy"/>
					<div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
				</div>

				<div className="space-y-1">
					<p className="text-xs uppercase tracking-widest text-muted-foreground">{category}</p>
					<h3 className="font-serif text-lg">{name}</h3>
					<p className="text-sm">R {price.toLocaleString()}</p>
				</div>
			</article>
		</a>
	);
};

export default ProductCard;
