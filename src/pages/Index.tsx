import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import BrandAuthority from "@/components/BrandAuthority";
import Testimonials from "@/components/Testimonials";
import WhereToBuy from "@/components/WhereToBuy";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProductGrid featured />
      <BrandAuthority />
      <Testimonials />
      <WhereToBuy />
      <Footer />
    </main>
  );
};

export default Index;
