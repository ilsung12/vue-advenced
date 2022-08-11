import axios from "axios";

// 1. HTTP Request & Response 와 관련된 기본설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

// 2. API 함수들을 정리
function fetchNewsList() {
  return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList() {
  return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

// 3. 외부에서 읽을수 있도록
export { fetchNewsList, fetchAskList, fetchJobsList };
