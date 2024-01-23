import actionTypes from './actionTypes';
import { getCode4Create } from "../../services/adminService";
// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
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

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
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
