import Head from 'next/head';
import axios, { AxiosResponse } from 'axios';
import { BASE_URL, GET_USER, API_KEY } from '../utils/API/const';
import { useEffect, useState } from 'react';

function App(): React.ReactElement {
  const [user, setUser] = useState({});
  const getUser = async (): Promise<AxiosResponse<any>> => {
    const user = await axios.get(`${BASE_URL}${GET_USER}공포의딜러${API_KEY}`);
    console.log(user.data);
    return user;
  };
  useEffect(() => {
    getUser();
  }, []);
  return <h1>Home 👍</h1>;
}

export default App;
