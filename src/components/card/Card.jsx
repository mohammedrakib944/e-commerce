import "./card.css";

const Card = (props) => {
  const { data } = props;

  return (
    <div className="card custom-card">
      <img src={data.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h6 className="card-title">
          {data.title.substring(0, 50)}
          {data.title.length > 40 && "..."}
        </h6>
      </div>
      <div className="card-footer">
        <small className="text-muted custom-card-footer">
          <p>${data.price}</p>
          <a href="#" className="cardBuyNow">
            Buy Now
          </a>
        </small>
      </div>
    </div>
  );
};

export default Card;
