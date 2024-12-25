import axios from "axios";
import { server_url } from "../constants/constant";


function getToken() {
    const token = localStorage.getItem("token");
    return token;
  }

  export const loginUser = async (email: string, password: string) => {
    return await axios.post(`${server_url}/login`, { email, password });
  };