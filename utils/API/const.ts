// 플랫폼 라우팅 값
export const BASE_URL = "https://cors-anywhere.herokuapp.com/https://kr.api.riotgames.com"

// 지역 라우팅 값
export const ASIA_URL = "https://asia.api.riotgames.com"

// API_KEY
export const API_KEY = `?api_key=${process.env.NEXT_PUBLIC_API_KEY}`

// 유저 검색
export const GET_USER = "/lol/summoner/v4/summoners/by-name/"

// 전적 검색
export const GET_USET_MATCH = "/lol/match/v4/matchlists/by-account/"

// 매치 디테일
export const GET_ONE_GAME = "/lol/match/v4/matches/"