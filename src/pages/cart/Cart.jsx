// internal imports
import "./cart.css";
import React from "react";
import Navbar from "../../components/nav/Navbar";

import img1 from "../../assets/img/1.jpg";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2>YOUR BAG</h2>
        <div className="row">
          <div className="col-md-7">
            <div className="continue-shopping">
              <button>Continue Shopping</button>
              <div className="links">
                <a href="#">Shopping Bag(2)</a>
                <a href="#">Your Wishlist(0)</a>
              </div>
            </div>
            <div className="cartSection">
              <div className="single-item">
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={img1}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <h1>Checkout</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
