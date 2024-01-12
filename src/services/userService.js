import axios from "../axios";

const UserLoginService = async (email, password) => {
    try {
        let sendRequest = await axios.post("http://localhost:8080/api/login", { email, password });
        return sendRequest;
    } catch (e) {
        console.log(e);
        return {};
    }

}
export default UserLoginService;