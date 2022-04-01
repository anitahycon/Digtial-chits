import Button from "../Button";
import "./index.css";
const Popup = (props) => {
  const { picture, title, message, onClick, width, height, btnName, orangeBg } =
    props;
  return (
    <div className="modal">
      <div className="modal-content" style={{ width: width, height: height }}>
        <div className={btnName == "Login" ? "m-40" : "mx-100"}>
          {picture && (
            <img className="my-15" src={picture} width="45" height="45"></img>
          )}
          <p className="font-s-24 font-w-600 my-15">{title}</p>
          <p className="font-w-400 my-15 ">
            {message}  
          </p>
          <div className="mt-40">
            <Button name={btnName} onClick={onClick} orangeBg={orangeBg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
