import axios from "axios";

export async function evaluateBugReport(reportData) {
  try {
    const response = await axios.post(
      "http://localhost:8000/evaluate",
      reportData,
    );
    return response.data;
  } catch (error) {
    console.error("NLP SERVICE ERROR: ", error.message);
    throw error;
  }
}
