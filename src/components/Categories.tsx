
const Categories = () => {
  const categories = [
    {
      title: "Skincare",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Gentle K-beauty skincare for all skin types"
    },
    {
      title: "Makeup",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Vibrant colors and long-lasting formulas"
    },
    {
      title: "Hair Care", 
      image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Nourishing treatments for healthy hair"
    },
    {
      title: "Tools",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Professional beauty tools and accessories"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated selection of premium Korean beauty products
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-pink-500 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
