import axios from "axios";
import { REGISTER_URL, LOGIN_URL } from "../api-urls";

const BASE_URL = "https://techiesleuths-backend-webapp-prod.azurewebsites.net/api/v1";

axios.defaults.baseURL = BASE_URL;

export const registerTeam = async (
  team_name: string,
  tl_email: string,
  master_password: string,
  tl_name: string,
  tl_student_id: string,
  tl_contact_number: string,
  member2_name: string,
  member2_student_id: string,
  member3_name: string,
  member3_student_id: string,
  member4_name: string,
  member4_student_id: string,
  anti_spam_question: boolean = true,
  anti_spam_question_description: string = "What is the capital of India?"
) => {
  try {
    const response = await axios.post(REGISTER_URL, {
      team_name: team_name,
      tl_email: tl_email,
      master_password: master_password,
      tl_name: tl_name,
      tl_student_id: tl_student_id,
      tl_contact_number: tl_contact_number,
      member2_name: member2_name,
      member2_student_id: member2_student_id,
      member3_name: member3_name,
      member3_student_id: member3_student_id,
      member4_name: member4_name,
      member4_student_id: member4_student_id,
      anti_spam_question: anti_spam_question,
      anti_spam_question_description: anti_spam_question_description,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const loginTeam = async (
  email: string,
  password: string,
) => {
  try {
    const response = await axios({
      method: "POST",
      baseURL: BASE_URL,
      url: LOGIN_URL,
      data: {
        team_leader_email: email,
        password: password
      }
    })

    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}