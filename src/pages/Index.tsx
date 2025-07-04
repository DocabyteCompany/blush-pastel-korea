
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ProductGrid from "@/components/ProductGrid";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <ProductGrid />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
