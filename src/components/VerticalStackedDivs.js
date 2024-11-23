import React from "react";

function VerticalStack() {
    return (
        <div style={{ display: "flex", flexDirection: "column", height: "50vh" }}>
            <div style={{ flex: 1, border: "1px solid black", padding: "20px", textAlign: "center" }}>
                <h1>First Div</h1>
                <p>This is the content of the first div.</p>
            </div>

            <div style={{ flex: 1, border: "1px solid black", padding: "20px", textAlign: "center" }}>
                <h1>Second Div</h1>
                <p>This is the content of the second div.</p>
            </div>
        </div>
    );
}

export default VerticalStack;
