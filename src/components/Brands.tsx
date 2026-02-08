import { ArrowLeft, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

const brands = [
  "GUCCI", "PRADA", "BALENCIAGA", "SAINT LAURENT", "VERSACE",
  "BURBERRY", "DIOR", "GIVENCHY", "VALENTINO", "FENDI",
  "CHANEL", "HERMÈS", "BOTTEGA VENETA", "LOEWE", "CELINE",
];

const Brands = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    dragFree: true,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-2">Popular Names</p>
            <h2 className="font-serif text-3xl md:text-5xl">Shop by Brands</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              aria-label="Previous brands"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              aria-label="Next brands"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 overflow-hidden" ref={emblaRef}>
        <div className="flex items-center gap-12 md:gap-16">
          {brands.map((brand) => (
            <a
              key={brand}
              href="#"
              className="shrink-0 text-xl md:text-2xl font-serif tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300 whitespace-nowrap"
            >
              {brand}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
