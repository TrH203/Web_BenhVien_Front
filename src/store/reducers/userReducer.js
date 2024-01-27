import actionTypes from "../actions/actionTypes";

const initialState = {
    genders: [],
    roles: [],
    positions: [],
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            let copyState = { ...state };
            copyState.genders = action.code;
            return {
                ...copyState,
            }
        case actionTypes.FETCH_GENDER_FAIL:
            return {
                ...state
            }
        ///
        case actionTypes.FETCH_ROLE_START:
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_SUCCESS:
            let copyState1 = { ...state };
            copyState1.roles = action.code;
            return {
                ...copyState1,
            }
        case actionTypes.FETCH_ROLE_FAIL:
            console.log("FAIL");
            return {
                ...state
            }
        ///
        case actionTypes.FETCH_POSITION_START:
            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_SUCCESS:
            let copyState2 = { ...state };
            copyState2.positions = action.code;
            return {
                ...copyState2,
            }
        case actionTypes.FETCH_POSITION_FAIL:
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