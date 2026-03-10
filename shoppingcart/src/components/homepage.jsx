import { useState, useEffect } from "react";
import "../styling/home.css";

export default function Homepage() {
  function HomeSlider() {
    const images = [];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="home-slider">
        <img src={images[currentIndex]} alt={"slide"} />
      </div>
    );
  }
  return (
    <div className="homepage">

      

       
      <h1 className="welcome">Welcome to My Store</h1>
      <p>Discover our amazing products and enjoy shopping!</p>

      <div>
        <HomeSlider />
      </div>
    </div>
  );
}
