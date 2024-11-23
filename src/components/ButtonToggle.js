import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logButtonClick } from "../redux/actions/buttonActions";

const ButtonToggle = () => {
    const [isClicked, setIsClicked] = useState(false);
    const dispatch = useDispatch();

    const handleClick = () => {
        setIsClicked((prev) => !prev);
        dispatch(logButtonClick(`Button clicked: ${!isClicked}`));
    };

    return (
        <div style={{ height: '20vh', display: 'flex', justifyContent: "center", alignItems: "center" }}>
            <button onClick={handleClick} style={{ marginRight: "40px" }}>Click Me</button>
            <p>{isClicked ? "Button Clicked" : "Button Not Clicked"}</p>
        </div>
    );
};

export default ButtonToggle;
