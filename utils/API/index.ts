import { AxiosResponse } from 'axios';
import axios from 'axios'
import { BASE_URL, GET_USER, API_KEY, GET_USET_MATCH, GET_ONE_GAME } from './const';
interface User {
  accountId: string
  id: string
  name: string
  profileIconId: number
  puuid:string
  revisionDate:number
  summonerLevel: number
}

// 유저 데이터 가져오기
export const fetchUser = async (name: string | string[]): Promise<User> => {
  const user = await axios.get(`${BASE_URL}${GET_USER}${name}${API_KEY}`);
  return user.data;
};

// 게임 ID값 가져오기
export const fetchUserMatch = async (id: string): Promise<any>  => {
  const match = await axios.get(`${BASE_URL}${GET_USET_MATCH}${id}${API_KEY}`)
  return match.data
}

// 게임 ID값으로 디테일한 정보 가져오기
export const fetchGameDetil = async (id: number): Promise<any> => {
  const matchDetail = await axios.get(`${BASE_URL}${GET_ONE_GAME}${id}${API_KEY}`)
  return matchDetail
}