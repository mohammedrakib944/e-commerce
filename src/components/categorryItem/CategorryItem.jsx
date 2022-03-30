import "./categorryItem.css";
import style from "../../assets/css/common.module.css";

const CategorryItem = (props) => {
  const { data } = props;
  return (
    <div className="categoryItem">
      <img src={data.img} className="cItemImge" />
      <div className="ctextSection">
        <h4>{data.title}</h4>
        <button className={style.customButton}>BUY NOW</button>
      </div>
    </div>
  );
};

export default CategorryItem;
