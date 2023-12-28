import axios from '../axios';
import * as queryString from 'query-string';

const adminService = {

    /**
     * Đăng nhập hệ thống
     * {
     *  "username": "string",
     *  "password": "string"
     * }
     */
    login(loginBody) {
        return axios.post(`/admin/login`, loginBody)
    },

};

const getUserService = (id = "") => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = axios.get(`http://localhost:8080/api/crud?id=${id}`);
            resolve(response);
        } catch (e) {
            console.log(e);
            reject({});
        }
    })
}

const createNewUserService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(data);
            let status = await axios.post("http://localhost:8080/api/create-new-user", data);
            resolve(status);
        } catch (e) {
            reject(e);
        }
    })
}

const editUserService = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            data.id = id;
            console.log(data);
            let status = await axios.put("http://localhost:8080/api/edit-user", data);
            console.log(status);
            resolve(status);
        } catch (e) {
            reject(e);
        }
    })
}

const deleteUserService = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let status = await axios.delete("http://localhost:8080/api/delete-user", {
                data: {
                    id: id
                }
            });
            resolve(status);
        } catch (e) {
            reject(e);
        }
    })
}
export {
    adminService,
    getUserService,
    createNewUserService,
    editUserService,
    deleteUserService,
};