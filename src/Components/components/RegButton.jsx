const RegButton = (props)=>{
    const {type , name , onClick , bgColor , txtColor , borderRad , btnHeight, btnWidth,borderColor,fontWt,fontSize} = props;
  
    return (
        <button type={type} className="commonBtn"  onClick={onClick} style={{width : btnWidth,backgroundColor: bgColor,color : txtColor,
            height : btnHeight,fontSize : fontSize,borderRadius : borderRad,
            borderColor :borderColor,fontWeight : fontWt}}>{name}</button>
    )
}

RegButton.defaultProp = {
    borderRad : '10px',
    btnHeight : '40px',
    btnWidth : 114,
    borderColor : 'transparent',
    fontWt : 500,
    fontSize : '16px',
    type :''
}
 
export default RegButton;