import axios from "axios";
import { Base_Url } from "./Base_Url";

export const axiousInstance = axios.create({
    baseURL: Base_Url,
    headers:{
        "Content-Type":"Application/json"
    }

})