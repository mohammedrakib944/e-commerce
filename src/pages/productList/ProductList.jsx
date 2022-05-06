// internal imports
import "./productlist.css";
import Navbar from "../../components/nav/Navbar";
import Card from "../../components/card/Card";
import style from "../../assets/css/common.module.css";
import { productsData, checkboxData } from "../../assets/js/Database";
import Filtering from "../../components/filtering/Filtering";
import NewsLetter from "../../components/newsletter/NewsLetter";
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="productCategory">
          <div className="filterSection">
            <h6>Brand</h6>
            {checkboxData.map((data, index) => (
              <Filtering key={index} data={data} />
            ))}
            <hr />
            <h6>Cloth</h6>
            {checkboxData.map((data, index) => (
              <Filtering key={index} data={data} />
            ))}
            <button className={style.filterButton}>Filter</button>
          </div>

          {/* main section */}
          <div className="productWrapper">
            <h3 className={style.customTitle}>T-shirt</h3>
            <div className="productList">
              {productsData.map((data, index) => (
                <Link to={data.path}>
                  <Card key={index} data={data} />
                </Link>
              ))}
            </div>
            <br />
            <a href="#" className={style.loadmore}>
              Load more
            </a>
            <br />
            <br />
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default ProductList;
