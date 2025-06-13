
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Discover Your
          <span className="block text-pink-300">Perfect Glow</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Premium Korean beauty products that enhance your natural radiance with gentle, effective formulations
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105">
            Shop Collection
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg rounded-full transition-all duration-300">
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
