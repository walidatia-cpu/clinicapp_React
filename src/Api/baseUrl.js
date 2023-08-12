import axios from "axios";

const baseUrl=axios.create({baseURL:"https://localhost:44317/"});
export default baseUrl;