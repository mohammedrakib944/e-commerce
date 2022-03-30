import { Search, Cart3 } from "react-bootstrap-icons";
// internal imports
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="NavSection">
      <div className="container">
        <div className="navbar">
          <div className="logo-section">
            <h4>Shop</h4>
          </div>
          <div className="search-section">
            <div class="input-group">
              <span class="input-group-text">
                <Search />
              </span>
              <input type="text" class="form-control" placeholder="Search" />
            </div>
          </div>
          <div className="auth-section">
            <a href="#">Register</a>
            <a href="#">Sign in</a>
            <a href="#" class="position-relative">
              <Cart3 className="custom-cart" />
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                4
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
