import heroImage from "@/assets/hero-fashion.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fashion editorial"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-20">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 animate-fade-up">
            Spring/Summer 2026
          </p>
          <h1 className="editorial-heading text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Timeless
            <span className="block italic font-normal">Elegance</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-md mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Discover our curated collection of refined essentials, crafted for the modern wardrobe.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="default" size="lg" className="min-w-[180px]">
              Shop Collection
            </Button>
            <Button variant="outline" size="lg" className="min-w-[180px]">
              View Lookbook
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
