import actionTypes from './actionTypes';
import { getCode4Create } from "../../services/adminService";
// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })
            let res = await getCode4Create("gender");
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.code));
            }
            else {
                dispatch(fetchGenderFail());
            }
        } catch (e) {
            fetchGenderFail();
            console.log(e);
        }
    }
}

export const fetchGenderSuccess = (code) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    code: code
})
export const fetchGenderFail = () => ({
    type: actionTypes.FETCH_GENDER_FAIL
})
///
export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_ROLE_START })
            let res = await getCode4Create("role");
            console.log(res);
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.code));
            }
            else {
                dispatch(fetchRoleFail());
            }
        } catch (e) {
            fetchRoleFail();
            console.log(e);
        }
    }
}

export const fetchRoleSuccess = (code) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    code: code
})
export const fetchRoleFail = () => ({
    type: actionTypes.FETCH_ROLE_FAIL
})
///
export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_POSITION_START })
            let res = await getCode4Create("position");
            console.log(res.code);
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.code));
            }
            else {
                dispatch(fetchPositionFail());
            }
        } catch (e) {
            fetchPositionFail();
            console.log(e);
        }
    }
}

export const fetchPositionSuccess = (code) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    code: code
})
export const fetchPositionFail = () => ({
    type: actionTypes.FETCH_POSITION_FAIL
})
