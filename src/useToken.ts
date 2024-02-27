import { useState } from 'react';
import { UserToken } from './interfaces';

export default function useToken() {
  const getToken = () => {
    const tokenString : string|null = sessionStorage.getItem('token');
    if (tokenString !== null) {
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  } return null;
};

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken : UserToken) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }
}
