import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PropertiesSection from "@/components/PropertiesSection";
import About from "@/components/About";
import Advantages from "@/components/Advantages";
import Location from "@/components/Location";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <PropertiesSection />
        <About />
        <Advantages />
        <Location />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
