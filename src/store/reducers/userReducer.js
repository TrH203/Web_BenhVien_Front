import actionTypes from "../actions/actionTypes";

const initialState = {
    genders: [],
    roles: [],
    positions: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            return {
                ...state,
                genders: action.code
            }
        case actionTypes.FETCH_GENDER_FAIL:
            console.log("FAIL");
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}

export default userReducer;