import * as React from 'react'
import "./style.css";

const Button = (props) => {
    const {title, onClick} = props;
    return (
        <button class="button-class" onClick={onClick}>{title}</button>
    )
}

export default Button;