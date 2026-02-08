import { Link } from "react-router-dom";

const Footer = () => {
	const footerLinks = {
		Shop: ["New Arrivals", "Women", "Men", "Accessories", "Sale"],
		Help: ["Contact Us", "Shipping", "Returns", "Size Guide", "FAQ"],
		About: ["Our Story", "Sustainability", "Careers", "Press"],
		Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
	};

	return (
		<footer className="border-t border-border">
			<div className="container mx-auto px-6 py-16 md:py-20">
				<div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
					{/* Brand */}
					<div className="col-span-2 md:col-span-1">
						<Link to="/" className="font-serif text-2xl tracking-wide">
						ATLANTIS
						</Link>
						<p className="text-sm text-muted-foreground mt-4 max-w-xs">
						Curated fashion for the modern individual. Timeless pieces, refined elegance.
						</p>
					</div>

					{/* Links */}
					{Object.entries(footerLinks).map(([category, links]) => (
						<div key={category}>
						<h4 className="text-sm uppercase tracking-widest mb-4">{category}</h4>
						<ul className="space-y-3">
							{links.map((link) => (
							<li key={link}>
								<a
								href="#"
								className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
								{link}
								</a>
							</li>
							))}
						</ul>
						</div>
					))}
				</div>

				{/* Bottom */}
				<div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-sm text-muted-foreground">© 2026 ATLANTIS. All rights reserved.</p>
					
					<div className="flex items-center gap-6">
						<a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
						<a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Facebook</a>
						<a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
