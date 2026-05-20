import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const sliderImg = [
  {
    imgSrc:
      "https://i.ibb.co.com/bMYfQjqV/premium-photo-1675039871449-62f86fb78a70.avif",
    id: 1,
    title: "Premium Travel Experiences",
    description:
      "Discover luxury destinations crafted for your perfect getaway",
  },
  {
    imgSrc:
      "https://i.ibb.co.com/5hwm6GhY/pexels-musaddek-sayek-2152825668-33684437.jpg",
    id: 2,
    title: "Adventure Awaits You",
    description:
      "Experience thrilling adventures in exotic locations worldwide",
  },
  {
    imgSrc:
      "https://i.ibb.co.com/RTKxC5DT/Sundarban-Day-Trip-1-Day-Jungle-Safari-scaled.webp",
    id: 3,
    title: "Explore Nature's Wonders",
    description: "Immerse yourself in pristine natural beauty and wildlife",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImage(false);
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % sliderImg.length);
        setShowImage(true);
      }, 1000);
      return () => clearTimeout(timer);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = sliderImg[currentIndex];

  return (
    <div className="relative w-full h-screen max-h-[80vh] overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {sliderImg.map((item, index) => (
          <img
            key={item.id}
            src={item.imgSrc}
            alt={item.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[10000ms] ease-out ${
              index === currentIndex && showImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-3xl px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            {currentSlide.title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8">
            {currentSlide.description}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to={'/services'}>
              <button className="bg-orange-500 hover:bg-orange-600 px-8 md:px-10 py-3 md:py-4 rounded-lg font-semibold transition-colors">
                Explore Tours
              </button>
            </Link>
            <Link to="/blog">
              <button className="border-2 border-white hover:bg-white hover:text-black px-8 md:px-10 py-3 md:py-4 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {sliderImg.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 md:h-4 rounded-full transition-all ${
              index === currentIndex
                ? "bg-orange-500 w-8 md:w-10"
                : "bg-white/50 w-3 md:w-4"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
