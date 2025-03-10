import axios from "axios";
import { baseURL } from "@/shared/libs/constants/baseURL";

export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
