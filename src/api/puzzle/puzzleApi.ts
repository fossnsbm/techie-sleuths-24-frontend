import axios from "axios";
import { GET_CROSSWORD_DETAILS, UPDATE_CROSSWORD } from "../api-urls";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

axios.defaults.baseURL = BASE_URL;

export const getCrosswordDetails = async (email: string) => {
  try {
    const response = await axios.get(`${GET_CROSSWORD_DETAILS}/${email}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateCrossword = async (email: string, crossword: any) => {
  try {
    const response = await axios.post(UPDATE_CROSSWORD, {
      email: email,
      crossword: crossword,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
