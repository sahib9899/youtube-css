export const addVideoReducer = (state= [], action) => {
    switch(action.type){
        case "ADD_VIDEO" :
            return [...state, action.payload];

        default :
            return state;
    }
}