import axios from "axios";
import { server_url } from "../constants/constant";
import { DoctorProps } from "../components/cards/DoctorCard";

function getToken() {
  const token = localStorage.getItem("token");
  return token;
}

export const loginUser = async (email: string, password: string) => {
  return await axios.post(`${server_url}/login`, { email, password });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addDoctor = async (doctorData: any) => {
  const token = getToken();
  return await axios.post(
    `${server_url}doctor`,
    { doctorData },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getDoctors = async () => {
  return await axios.get(`${server_url}/doctors`);
};
export const getSingleDoctor = async (id: string | undefined) => {
  return await axios.get(`${server_url}/doctor/${id}`);
};

export const editDoctor = async (id: string|undefined, doctorData: DoctorProps) => {
  const token = getToken();
  return await axios.put(
    `${server_url}/doctor/${id}`,
    { doctorData },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};


export const deleteDoctor = async (id:string|undefined)=>{
    const token = getToken();
    return await axios.delete(
        `${server_url}doctor/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
}