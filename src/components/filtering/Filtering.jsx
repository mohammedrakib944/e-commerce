import "./filtering.css";

export default function Filtering(props) {
  const { data } = props;
  return (
    <div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" />
        <label class="form-check-label">{data.brand}</label>
      </div>
    </div>
  );
}
