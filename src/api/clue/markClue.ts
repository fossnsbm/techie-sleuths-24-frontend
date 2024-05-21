import axios from "axios";

import { CLUE_URLS } from "../api-urls";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

axios.defaults.baseURL = BASE_URL;
axios.defaults.withCredentials = true;
async function markClue(clueId: string, teamEmail: string) {
  try {
    const response = await axios.post(`${CLUE_URLS.MARK_CLUE_URL}/${clueId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { markClue };
