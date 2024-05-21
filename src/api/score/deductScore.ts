import axios from "axios";

import { DEDUCT_SCORE_URL } from "../api-urls";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

axios.defaults.baseURL = BASE_URL;

async function deductScore(
  senderEmail: string,
  receiverEmail: string,
  points: number = 5,
) {
  try {
    const response = await axios.post(
      `/score/deduct/${senderEmail}/${receiverEmail}/${points}`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { deductScore };
