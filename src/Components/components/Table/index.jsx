import RegButton from "../RegButton";
import "./index.css";
const CommonTable = (props) => {
  const { header, data, tableKeys, btnColor, btnName, action } = props;
  console.log("data length---",data.length)
  console.log("table keys ---",tableKeys)

  const dataRender = () =>{
      return (
        <div className="table-data">
          {data.map((record, i) => (
            <div className="d-flex table-header table-data-row" key={i}>
              {tableKeys.map((dataKeys, index) => (
                <div className="font-s-14 font-w-500" key={index}>
                  {record[dataKeys]}
                </div>
              ))}
              <div style={{ padding: "5px 0", width: "178px" }}>
                <RegButton
                  btnHeight="30px"
                  name={btnName}
                  onClick={() => action(record)}
                  bgColor={btnColor}
                  txtColor="#fff"
                  borderRad="0"
                />
              </div>
            </div>
          ))}
        </div>
      )
    
     
  }
  return (
    <div className="chit-table">
      <div className="orange-bg table-header white-txt">
        {header.map((header, i) => (
          <div className="font-s-14 font-w-500" key={i}>
            {header}
          </div>
        ))}
      </div>
          {dataRender()}
    </div>
  );
};

export default CommonTable;
