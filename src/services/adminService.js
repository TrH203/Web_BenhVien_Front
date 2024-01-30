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
            console.log(data);
            let status = await axios.post("http://localhost:8080/api/create-new-user", data);
            resolve(status);
        } catch (e) {
            console.log(e);
            reject({})
        }
    })
}

const editUserService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let status = await axios.put("http://localhost:8080/api/edit-user", data);
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
const getCode4Create = async (...types) => {
    try {
        let results = [];
        for (let type of types) {
            let rs = await axios.get("http://localhost:8080/api/get-code?type=" + type);
            results.push(rs);
        }
        if (results.length === 1) {
            // console.log(results);
            return results[0];
        }
        else {
            return results;
        }

    } catch (e) {
        console.log(e);
        return {};
    }
}
export {
    adminService,
    getUserService,
    createNewUserService,
    editUserService,
    deleteUserService,
    getCode4Create,
};