
import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Glow Essence Serum",
      price: "$45",
      originalPrice: "$60",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      reviews: 124,
      isNew: true
    },
    {
      id: 2,
      name: "Hydrating Cream Cleanser",
      price: "$28",
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      reviews: 89,
      isNew: false
    },
    {
      id: 3,
      name: "Glass Skin Foundation",
      price: "$52",
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      reviews: 156,
      isNew: true
    },
    {
      id: 4,
      name: "Vitamin C Brightening Mask",
      price: "$35",
      originalPrice: "$45",
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      reviews: 73,
      isNew: false
    },
    {
      id: 5,
      name: "Lip Tint Collection",
      price: "$32",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      reviews: 201,
      isNew: true
    },
    {
      id: 6,
      name: "Snail Mucin Moisturizer",
      price: "$38",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      reviews: 167,
      isNew: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Best Sellers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most loved products that deliver exceptional results
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-pink-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                    New
                  </span>
                )}
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-pink-50">
                  <Heart size={18} className="text-gray-600 hover:text-pink-400" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex items-center text-yellow-400">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm text-gray-600 ml-1">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg text-gray-800 mb-3 group-hover:text-pink-500 transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-800">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
