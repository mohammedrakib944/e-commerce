import "./products.css";
import Card from "../card/Card";
import { productsData } from "../../assets/js/Database";
import style from "../../assets/css/common.module.css";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="container">
      <h4 className={style.customTitle}>Just For You</h4>
      <div className="products">
        {productsData.map((data, index) => (
          <Link to={data.path} key={index}>
            <Card data={data} />
          </Link>
        ))}
      </div>
      <br />
      <div className="justify-content-center">
        <a href="#" className={style.loadmore}>
          Load more
        </a>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Products;
