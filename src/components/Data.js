import React from 'react'
import { useSelector } from "react-redux";

export default function Data() {
    const buttonMessages = useSelector((state) => state.button.messages);
    const clickedTiles = useSelector((state) => state.tile.clickedTiles);

    return (
        <div style={{ display: "flex", justifyContent: 'space-around' }} >

            <div>
                <h2>Button Click Messages</h2>
                {buttonMessages.length > 0 ? (
                    buttonMessages.map((message, index) => (
                        <p key={index}>{message}</p>
                    ))
                ) : (
                    <p>No button clicks logged yet.</p>
                )}
            </div>
            <div>
                <h2>Clicked Tiles</h2>
                {clickedTiles.length > 0 ? (
                    clickedTiles.map((tile, index) => (
                        <p key={index}>Tile ID: {tile}</p>
                    ))
                ) : (
                    <p>No tiles clicked yet.</p>
                )}
            </div>
        </div>
    );
}
