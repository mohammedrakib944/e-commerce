import { useState } from "react";
import Slider from "react-slick";
import { StarFill, Star, CartCheckFill } from "react-bootstrap-icons";
// internal imports
import "./product.css";
import img1 from "../../assets/img/1.jpg";
import img2 from "../../assets/img/2.jpg";
import img3 from "../../assets/img/3.jpg";
import NavBar from "../../components/nav/Navbar";
import NewsLetter from "../../components/newsletter/NewsLetter";
// import style from "../../assets/css/common.module.css";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="singleProductSection">
          <div className="row">
            <div className="col-md-6">
              <div className="customrows">
                <Slider {...settings}>
                  <div>
                    <img className="ProductSliderImage" src={img1} />
                  </div>
                  <div>
                    <img className="ProductSliderImage" src={img2} />
                  </div>
                  <div>
                    <img className="ProductSliderImage" src={img3} />
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pDetails">
                <h4>Lorem, ipsum dolor sit amet consectetur adipisicing.</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                  eligendi eaque, libero veritatis ipsa explicabo fugit minus
                  tenetur? Illo, fugit?
                </p>
                <p className="product-rating">
                  <span>
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <Star />
                  </span>
                  <label className="justpadding">ratings</label>
                </p>
                <hr />
                <h6>Price: $ 70</h6>
                <hr />
                <strong>Quantity</strong>
                <div className="productQuantity">
                  <button
                    disabled={quantity === 1 ? true : false}
                    onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                  >
                    -
                  </button>
                  <p>{quantity}</p>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                <button className="addtoCartButton">
                  Add to cart <CartCheckFill className="cartcheckfill" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
    </>
  );
};

export default Product;
