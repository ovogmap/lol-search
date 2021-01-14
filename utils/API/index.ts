import { AxiosResponse } from 'axios';
import axios from 'axios'
import { BASE_URL, GET_USER, API_KEY, GET_USET_MATCH } from './const';
interface User {
  accountId: string
  id: string
  name: string
  profileIconId: number
  puuid:string
  revisionDate:number
  summonerLevel: number
}

export const fetchUser = async (name: string | string[]): Promise<User> => {
  const user = await axios.get(`${BASE_URL}${GET_USER}${name}${API_KEY}`);
  return user.data;
};
export const fetchUserMatch = async (id: string): Promise<any>  => {
  const match = await axios.get(`${BASE_URL}${GET_USET_MATCH}${id}${API_KEY}`)
  return match.data
}