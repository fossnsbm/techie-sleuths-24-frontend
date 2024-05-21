import axios, { AxiosResponse } from "axios";

import { GET_CROSSWORD_DETAILS, UPDATE_CROSSWORD } from "../api-urls";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

axios.defaults.baseURL = BASE_URL;
axios.defaults.withCredentials = true;

export const getCrosswordDetails = async (): Promise<AxiosResponse | undefined> => {
  try {
    const response = await axios
      .get(GET_CROSSWORD_DETAILS);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    }
  }
};

export const updateCrossword = async (
  crossword: any,
): Promise<AxiosResponse | undefined> => {
  try {
    const response = await axios
      .put(UPDATE_CROSSWORD, crossword);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    }
  }
};
