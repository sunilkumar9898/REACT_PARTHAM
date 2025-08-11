const intialState = {
    userData:[]
}


export const userReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'GETUSERS':
            return { ...state, userData: action?.payload }
        // case 'DELETE':
        //     return { ...state, user: null }
        default:
            return state
    }
};
