import Header from "../components/Header";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Brands from "../components/Brands";
import FeaturedProducts from "../components/FeaturedProducts";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Index = () => {
	return (
		<div className="min-h-screen">
			<Header />
			<main>
				<Hero />
				<Categories />
				<Brands />
				<FeaturedProducts />
				<Newsletter />
			</main>
			<Footer />
		</div>
  	);
};

export default Index;
