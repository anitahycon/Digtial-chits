import "./index.css";
const DropDown = (props) => {
  const { list, title, onChageAction, error, errorMsg } = props;

  return (
    <div>
      <select
        className="exp-month "
        onChange={(e) => onChageAction(e.target.value)}
      >
        <option>{title}</option>
        {list.map((item, i) => (
          <option value={item} key={i}>
            {item}
          </option>
        ))}
      </select>
      {error && <p className="error">{errorMsg}</p>}
    </div>
  );
};

export default DropDown;
