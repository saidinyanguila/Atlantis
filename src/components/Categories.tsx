import { ArrowLeft, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

const categories = [
  "Women", "Men", "Shoes", "Denim", "Hoodies", "Bags", "Jewelry"
];

const Categories = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		align: "start",
		slidesToScroll: 1,
		dragFree: true,
	});

	const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
	const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

	return (
		<section className="py-20 md:py-32 bg-secondary">
		<div className="container mx-auto px-4">
			<div className="flex items-end justify-between mb-12">
			<div>
				<h2 className="font-serif text-3xl md:text-5xl mb-4">Shop by Category</h2>
				<p className="text-muted-foreground">Find your perfect piece</p>
			</div>
			<div className="flex gap-2">
				<button
				onClick={scrollPrev}
				className="w-10 h-10 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
				aria-label="Previous categories"
				>
				<ArrowLeft size={18} />
				</button>
				<button
				onClick={scrollNext}
				className="w-10 h-10 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
				aria-label="Next categories"
				>
				<ArrowRight size={18} />
				</button>
			</div>
			</div>
		</div>

		<div className="container mx-auto px-6 overflow-hidden" ref={emblaRef}>
			<div className="flex gap-4 md:gap-6">
			{categories.map((name) => (
				<a
				key={name}
				href={`#${name.toLowerCase()}`}
				className="shrink-0 basis-[40%] sm:basis-[28%] md:basis-[20%] lg:basis-[15%] bg-background px-8 py-6 md:px-12 md:py-8 text-center transition-all duration-300 hover:bg-foreground hover:text-background"
				>
				<h3 className="font-serif text-lg md:text-xl whitespace-nowrap">{name}</h3>
				</a>
			))}
			</div>
		</div>
		</section>
	);
};

export default Categories;
