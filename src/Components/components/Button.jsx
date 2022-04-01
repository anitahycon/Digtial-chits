import './common.css';
const Button = (props)=>{
    const {name , onClick ,orangeBg,fontWt } = props;
     
    return (
        <button onClick={onClick} style={{backgroundColor: orangeBg ? '#FF8C5D':(orangeBg == '' ? '#1B9CFC': 'white'),
        color :orangeBg ? 'white':(orangeBg == '' ? 'white': 'black'),fontWeight : fontWt }}>{name}</button>
    )
}
Button.defaultProps = {
    orangeBg : '',
    fontWt : 500
}

export default Button;