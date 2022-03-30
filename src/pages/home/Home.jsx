// internal imports
import "./home.css";
import Navbar from "../../components/nav/Navbar";
import Announcement from "../../components/announce/Announcement";
import Slider from "../../components/slider/Slider";
import Categories from "../../components/categories/Categories";
import Products from "../../components/products/Products";
import NewsLetter from "../../components/newsletter/NewsLetter";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
    </div>
  );
};

export default Home;
