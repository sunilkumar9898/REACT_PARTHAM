const intialState = {
    userData:[]
}


export const userReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'GETUSERS':
            return { ...state, userData: action?.payload }
        case 'DELETE':
            return { ...state, userData: action?.payload }
        case 'EDIT':
            return { ...state, userData: action?.payload }
        default:
            return state
    }
};
