import actionTypes from "../actions/actionTypes";

const initialState = {
    genders: [],
    roles: [],
    positions: [],
    arrUsers: [],
    isLoading: false,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            state.isLoading = true;
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            let copyState = { ...state };
            copyState.genders = action.code;
            copyState.isLoading = false;
            return {
                ...copyState,
            }
        case actionTypes.FETCH_GENDER_FAIL:
            state.isLoading = false;
            return {
                ...state
            }
        /// role
        case actionTypes.FETCH_ROLE_START:
            state.isLoading = true;
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_SUCCESS:
            let copyState1 = { ...state };
            copyState1.roles = action.code;
            copyState1.isLoading = false;
            return {
                ...copyState1,
            }
        case actionTypes.FETCH_ROLE_FAIL:
            console.log("FAIL");
            state.isLoading = false;
            return {
                ...state
            }
        /// position
        case actionTypes.FETCH_POSITION_START:
            state.isLoading = true;
            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_SUCCESS:
            let copyState2 = { ...state };
            copyState2.positions = action.code;
            copyState2.isLoading = false;
            return {
                ...copyState2,
            }
        case actionTypes.FETCH_POSITION_FAIL:
            console.log("FAIL");
            state.isLoading = false;
            return {
                ...state
            }
        case actionTypes.SAVE_USER_START:
            state.isLoading = true;
            return {
                ...state
            }
        case actionTypes.SAVE_USER_SUCCESS:
            state.isLoading = false;
            return {
                ...state
            }
        case actionTypes.SAVE_USER_FAIL:
            state.isLoading = false;
            return {
                ...state
            }

        /// update
        case actionTypes.UPDATE_USER_TABLE_START:
            state.isLoading = true;
            return {
                ...state
            }
        case actionTypes.UPDATE_USER_TABLE_SUCCESS:
            state.isLoading = false;
            state.arrUsers = action.arrUsers;
            return {
                ...state
            }
        case actionTypes.UPDATE_USER_TABLE_FAIL:
            state.isLoading = false;
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