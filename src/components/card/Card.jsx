import "./card.css";

import BG from "../../assets/img/image.jpg";

const Card = () => {
  return (
    <div class="card custom-card">
      <img src={BG} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title is here</h5>
      </div>
      <div class="card-footer">
        <small class="text-muted custom-card-footer">
          <p>$260</p>
          <a href="#">BUY NOW</a>
        </small>
      </div>
    </div>
  );
};

export default Card;
