const initialState = {
    messages: [],
};

const buttonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "clicked":
            return {
                ...state,
                messages: [...state.messages, action.payload],
            };
        default:
            return state;
    }
};

export default buttonReducer;
