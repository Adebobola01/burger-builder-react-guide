import axios from "axios";

const instance =  axios.create({
    baseURL: "laf"
})

export default instance;