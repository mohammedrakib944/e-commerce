// internal imports
import "./home.css";
import Navbar from "../../components/nav/Navbar";
import Announcement from "../../components/announce/Announcement";
import Slider from "../../components/slider/Slider";
import Categories from "../../components/categories/Categories";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
