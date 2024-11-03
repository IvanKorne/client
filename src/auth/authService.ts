import axios from "axios";
import { UserProfileToken } from "../lib/types";
import { toast } from "react-toastify";

export const loginApi = async (username: string, password: string) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/account/login`,
      { username, password }
    );

    return data as UserProfileToken;
  } catch (err: any) {
    toast.warning(err.data);
  }
};

export const registerApi = async (
  username: string,
  password: string,
  email: string
) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/account/register`,
      { username, password, email }
    );

    return data as UserProfileToken;
  } catch (err: any) {
    toast.warning(err.data);
  }
};
