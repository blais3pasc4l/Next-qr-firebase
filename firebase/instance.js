import axios from "axios";

export default axios.create({
    baseURL: "https://next-firebase-qr-default-rtdb.firebaseio.com/"
})