import React from "react";
import Tile from "./Tile";
import { useDispatch } from "react-redux";
import { logTileClick } from "../redux/actions/tileActions";

const tilesData = [
    { title: "Tile 1", description: "This is tile 1" },
    { title: "Tile 2", description: "This is tile 2" },
    { title: "Tile 3", description: "This is tile 3" },
];
const TileContainer = () => {
    const dispatch = useDispatch();


    const handleTileClick = (title) => {
        console.log(title);
        dispatch(logTileClick(title));
    };

    return (
        <div className="tile-container">
            {tilesData.map((tile) => (
                <Tile key={tile.title} data={tile} onButtonClick={handleTileClick} />
            ))}
        </div>
    );
};

export default TileContainer;
