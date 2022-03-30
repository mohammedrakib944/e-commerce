import "./newslatter.css";
import { Send } from "react-bootstrap-icons";

const NewsLetter = () => {
  return (
    <div className="newsLetter">
      <h3>News Letter</h3>
      <h6 className="pb-2">Get timely Updates from your favorite products</h6>
      <div className="input-group mb-3 newsLetterInput">
        <input
          type="text"
          className="form-control"
          placeholder="Your email"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <span className="input-group-text" id="basic-addon2">
          <Send />
        </span>
      </div>
    </div>
  );
};

export default NewsLetter;
