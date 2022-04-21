import React, { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";
import * as AuthSession from "expo-auth-session";

const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;
const { RESPONSE_TYPE } = process.env;
const { SCOPE } = process.env;
const { CDN_IMAGE } = process.env;

export const AuthContext = createContext({} as ContextData);
export const useAuth = () => useContext(AuthContext);

type ContextProps = {
  children: ReactNode;
};
type User = {
  id: string;
  username: string;
  avatar: string;
  email: string;
  token: string;
};
type ContextData = {
  user: User;
  signIn: () => Promise<void>;
  isLoading?: boolean;
};

type AuthSessionProps = AuthSession.AuthSessionResult & {
  params: {
    access_token: string;
    error?: string;
  };
  type: string;
};
export function AuthProvider({ children }: ContextProps) {
  const [user, setUser] = useState<User>({} as User);
  const [isLoading, setIsLoading] = useState(false);

  async function signIn() {
    try {
      setIsLoading(true);
      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
      const { params, type } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthSessionProps;
      if (type === "success") {

        const userInfo = await api.get("/users/@me", {
          headers: { Authorization: `Bearer ${params.access_token}` },
        }) ;
        setUser({
          avatar: `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`,
          email: userInfo.data.email, 
          id: userInfo.data.id, 
          token: params.access_token, 
          username: userInfo.data.username
        });
      }
    } catch {
      throw new Error("Não foi possível realizar o Login ! ")
    } finally {
      setIsLoading(false);
    }
  }
  console.log(user)
  return (
    <AuthContext.Provider value={{ user, signIn, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
