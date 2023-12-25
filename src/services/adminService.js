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

const getUserService = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = axios.get("http://localhost:8080/api/crud");
            resolve(response);
        } catch (e) {
            console.log(e);
            reject({});
        }
    })
}
export {
    adminService,
    getUserService,
};