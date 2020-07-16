import * as React from 'react'
import "./style.css";

const Button = (props) => {
    const {title, onClick, isDisabled} = props;

    const disabledStyle = isDisabled ?  {backgroundColor: 'grey'} : {}
   
    return (
        <button className="button-class" style={disabledStyle} onClick={onClick}>{title}</button>
    )
}

export default Button;