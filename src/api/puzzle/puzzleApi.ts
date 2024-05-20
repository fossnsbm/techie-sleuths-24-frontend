import axios, { AxiosResponse } from "axios";
import { GET_CROSSWORD_DETAILS, UPDATE_CROSSWORD } from "../api-urls";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

axios.defaults.baseURL = BASE_URL;
axios.defaults.withCredentials = true;

export const getCrosswordDetails = (): Promise<AxiosResponse | undefined> => {
  return axios
    .get(GET_CROSSWORD_DETAILS)
    .then((response: AxiosResponse) => {
      return response;
    })
    .catch((error: any) => {
      if (axios.isAxiosError(error)) {
        return error.response;
      }
    });
};

export const updateCrossword = (
  crossword: any
): Promise<AxiosResponse | undefined> => {
  return axios
    .post(UPDATE_CROSSWORD, { crossword })
    .then((response: AxiosResponse) => {
      return response;
    })
    .catch((error: any) => {
      if (axios.isAxiosError(error)) {
        return error.response;
      }
    });
};
