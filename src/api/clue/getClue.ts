import axios from "axios";

import { CLUE_URLS } from "../api-urls";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

axios.defaults.baseURL = BASE_URL;

async function getClue(clueId: string) {
  try {
    const response = await axios.get(`${CLUE_URLS.GET_CLUE_URL}/${clueId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { getClue };
