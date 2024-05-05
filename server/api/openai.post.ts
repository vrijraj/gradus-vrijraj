import fetchOpenAIResponse from "../services/openai";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    const response = await fetchOpenAIResponse(body.prompt);
    return { response };
  } catch (error) {
    return { error: error };
  }
});
