import "./common.css";
const Input = (props) => {
  const { borderColor, maxLength, error, errorMsg } = props;
  return (
    <div>
      <input
        className="input-div"
        maxLength={maxLength}
        style={{ borderColor: borderColor }}
        type={props.category}
        placeholder={props.placeholder}
        onChange={props.onUpdate}  
      />
      {error && <p className="error mt-n1">{errorMsg}</p>}
    </div>
  );
};
Input.defaultProps = {
  borderColor: "rgb(182, 182, 233)",
  maxLength: 1000,
};
export default Input;
