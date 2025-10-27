import { Link } from "react-router-dom";

export default function MainCategories() {
  const categories = [
    "Run", 
    "Music", 
    "Theater", 
    "Nature", 
    "Festive", 
    "Food", 
    "Art", 
    "Sports",
    "Dance",
    "Comedy",
    "Film",
    "Workshops",
    "Exhibitions",
    "Literature",
    "Networking",
    "Tech",
    "Wellness",
    "Gaming",
    "Charity",
    "Fashion",
    "Kids",
    "Photography",
    "Science",
    "Cultural",
    "Nightlife",
    "Travel",
    "Fitness",
    "Meditation",
    "Live Shows"
  ];  

  return (
    <>
      {/* Header */}
      <div className="mt-15 flex justify-between items-center">
        <h1 className="text-3xl font-bold mb-5">Categories</h1>
      </div>

      {/* Carrusel */}
      <div className="mb-10">
        <div className="flex overflow-x-auto gap-4 pb-2 scroll-smooth scrollbar-hide">
          {categories.map((cat) => (
            <Link
              key={cat}
              to="/category"
              className="flex-shrink-0 bg-[#202FF8] border-2 border-transparent px-6 py-2 rounded-[15px] hover:bg-[#161616] hover:border-[#202FF8] text-white transition-colors whitespace-nowrap"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
