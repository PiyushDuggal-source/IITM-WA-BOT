import axios from "axios";
import * as dotenv from 'dotenv';
dotenv.config()

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "x-bot-API": process.env.BOT_API,
  },
});

export default axiosInstance;
