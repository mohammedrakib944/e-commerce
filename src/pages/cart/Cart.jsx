import { useState } from "react";
import { Dash, Plus } from "react-bootstrap-icons";
// internal imports
import "./cart.css";
import React from "react";
import Navbar from "../../components/nav/Navbar";

import img1 from "../../assets/img/1.jpg";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const [quantity2, setQuantity2] = useState(1);
  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="ShopTitle">YOUR BAG</h2>
        <div className="row">
          <div className="col-md-7">
            <div className="continue-shopping">
              <button className="NextBtn">Continue Shopping</button>
              <div className="links">
                <a href="#">Shopping Bag(2)</a>
                <a href="#">Your Wishlist(0)</a>
              </div>
            </div>
            <div className="cartSection">
              {/* single cart */}
              <div className="single-item">
                <div className="card mb-3 borderNone">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={img1}
                        className="img-fluid rounded-start cartCustomImg"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-5">
                      <div className="card-body cartCustom">
                        <h5 className="card-title">
                          <span> Product:</span> T-shirt
                        </h5>
                        <h5 className="card-title">
                          <span> Price:</span> $29
                        </h5>
                        <h5 className="card-title">
                          <span> ID:</span> 92485123
                        </h5>
                        <h5 className="card-title">
                          <span> Size:</span> 36.6
                        </h5>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="productQuantity cartQuentaty">
                        <button
                          disabled={quantity === 1 ? true : false}
                          onClick={() =>
                            setQuantity(quantity > 1 ? quantity - 1 : 1)
                          }
                        >
                          <Dash />
                        </button>
                        <p>{quantity}</p>
                        <button onClick={() => setQuantity(quantity + 1)}>
                          <Plus />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* single cart */}
              <div className="single-item">
                <div className="card mb-3 borderNone">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={img1}
                        className="img-fluid rounded-start cartCustomImg"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-5">
                      <div className="card-body cartCustom">
                        <h5 className="card-title">
                          <span> Product:</span> T-shirt
                        </h5>
                        <h5 className="card-title">
                          <span> Price:</span> $29
                        </h5>
                        <h5 className="card-title">
                          <span> ID:</span> 92485123
                        </h5>
                        <h5 className="card-title">
                          <span> Size:</span> 36.6
                        </h5>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="productQuantity cartQuentaty">
                        <button
                          disabled={quantity2 === 1 ? true : false}
                          onClick={() =>
                            setQuantity2(quantity2 > 1 ? quantity2 - 1 : 1)
                          }
                        >
                          <Dash />
                        </button>
                        <p>{quantity2}</p>
                        <button onClick={() => setQuantity2(quantity2 + 1)}>
                          <Plus />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 AlignCenter">
            <div className="ordarSummary">
              <h5>Ordar Summary</h5>
              <br />
              <p>
                <span>Product IDs:</span> 2342443,2325234
              </p>
              <p>
                <span>Total:</span> $390
              </p>
              <button className="NextBtn">Checkout Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
