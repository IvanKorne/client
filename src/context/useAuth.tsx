import React, { createContext, useEffect, useState } from "react";
import { UserProfile } from "../lib/types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginApi, registerApi } from "../auth/authService";
import axios from "axios";

export type UserContextType = {
  user: UserProfile | null;
  token: string | null;
  registerUser: (email: string, username: string, password: string) => void;
  loginUser: (username: string, password: string) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
};

type contextProps = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: contextProps) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    setIsLoading(false);
  }, []);

  const registerUser = async (
    email: string,
    username: string,
    password: string
  ) => {
    try {
      const response: any = await registerApi(email, username, password);
      localStorage.setItem("token", response.token);
      const userObj = {
        userName: response.userName,
        email: response.email,
      };
      localStorage.setItem("user", JSON.stringify(userObj));
      setToken(response.token!);
      setUser(userObj!);
      toast.success("Sign up successfuly");
      navigate("/search");
    } catch (err) {
      console.log(err);
      toast.warning("Error occured when registering user");
    }
  };
  const loginUser = async (username: string, password: string) => {
    try {
      const response: any = await loginApi(username, password);
      console.log(response);
      localStorage.setItem("token", response.token);
      const userObj = {
        userName: response.userName,
        email: response.email,
      };
      localStorage.setItem("user", JSON.stringify(userObj));
      setToken(response.token);
      setUser(userObj!);
      toast.success("Login Success!");
      navigate("/search");
    } catch (err) {
      console.log(err);
      toast.warning("Error occured when logging in");
    }
  };

  const isLoggedIn = () => {
    return !!user;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken("");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ loginUser, user, token, logout, isLoggedIn, registerUser }}
    >
      {!isLoading ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext);
