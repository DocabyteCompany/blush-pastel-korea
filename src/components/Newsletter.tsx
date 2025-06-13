
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-100 via-purple-50 to-pink-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Get Beauty Tips & Exclusive Offers
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of beauty lovers and be the first to know about new products, 
            expert tips, and special discounts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 text-lg rounded-full border-2 border-pink-200 focus:border-pink-400 transition-colors"
            />
            <Button className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            No spam, unsubscribe at any time. By subscribing, you agree to our Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
