import Slider from "react-slick";

// internal imports
import "./categories.css";
import style from "../../assets/css/common.module.css";
import CategorryItem from "../categorryItem/CategorryItem";
import { settings } from "../../assets/js/settings";
import { catagoryData } from "../../assets/js/Database";

const Categories = () => {
  return (
    <div className="container">
      <h4 className={style.customTitle}>Categories</h4>
      <div className="categories"></div>
      <div>
        <Slider {...settings}>
          {catagoryData.map((val, index) => (
            <CategorryItem key={index} data={val} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Categories;
