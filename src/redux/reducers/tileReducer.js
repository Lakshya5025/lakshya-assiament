const initialState = {
    clickedTiles: [],
};

const tileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "tClicked":
            return {
                ...state,
                clickedTiles: [...state.clickedTiles, action.payload],
            };
        default:
            return state;
    }
};

export default tileReducer;
