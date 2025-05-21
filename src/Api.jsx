import axios from "axios";

const API_BASE = process.env.REACT_APP_BASE_URL || "http://localhost:3000/";

export const shortenUrl = async (full_url) => {
  return axios.post(`${API_BASE}/short_urls`, { full_url });
};

export const fetchTopUrls = async () => {
  return axios.get(`${API_BASE}/`);
};
