import React from "react";

const Tile = ({ data, onButtonClick }) => {
    return (
        <div className="tile">
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <button onClick={() => onButtonClick(data.title)}>Click Me</button>
        </div>
    );
};

export default Tile;
