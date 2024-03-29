import actionTypes from './actionTypes';
import { getCode4Create, createNewUserService, getUserService, editUserService } from "../../services/adminService";
// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })
            let res = await getCode4Create("gender");
            //console.log(res);
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
            //console.log(res);
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
            //console.log(res.code);
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

/// save user
export const saveUserStart = (user2Save) => {
    return async (dispatch, getState) => {
        try {
            //console.log(user2Save);
            dispatch({ type: actionTypes.SAVE_USER_START });
            let res = await createNewUserService(user2Save);
            console.log(res);
            if (res && res.errCode === 0) {
                dispatch(saveUserSuccess());
                //alert("Create new user: SUCCEED");
            }
            else {
                dispatch(saveUserFail());
                //alert("Create new user: FAIL");
            }
        } catch (e) {
            console.log(e);
        }
    }
}
export const saveUserSuccess = () => ({
    type: actionTypes.SAVE_USER_SUCCESS
})
export const saveUserFail = () => ({
    type: actionTypes.SAVE_USER_FAIL
})

export const updateUserTableStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.UPDATE_USER_TABLE_START });
            let res = await getUserService();
            if (res && res.errCode === 0) {
                dispatch(updateUserTableSuccess(res.users));
            }
            else {
                dispatch(updateUserTableFail());
            }
        } catch (e) {
            dispatch(updateUserTableFail);
        }
    }
}
export const updateUserTableSuccess = (arrUsers) => ({
    type: actionTypes.UPDATE_USER_TABLE_SUCCESS,
    arrUsers: arrUsers
})
export const updateUserTableFail = () => ({
    type: actionTypes.UPDATE_USER_TABLE_FAIL
})
// EDIT USER
export const editUserStart = (id) => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.EDIT_USER_START });
            let res = await editUserService(id);
            console.log(res);
            dispatch(editUserSuccess());
        } catch (e) {
            dispatch(editUserFail());
        }
    }
}
export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS
})
export const editUserFail = () => ({
    type: actionTypes.EDIT_USER_FAIL
})