export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'allUser':
            return action.payload
        default:
            return state;
    }
}