//import { Configuration, OpenAIApi } from "openai";
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  //apiKey: process.env.OPENAI_API_KEY,
  apiKey: "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",
});
const openaiapi = new OpenAIApi(configuration);

async function openai(query) {
  if (!configuration.apiKey) {
    return "OpenAI API key not configured, please follow instructions in README.md";
  }
  if (query.trim().length === 0) {
    return "Please enter a valid contractName";
  }

  try {
    const response = await openaiapi.createCompletion({
      model: "text-davinci-003",
      prompt: query,
      temperature: 0.9,
      max_tokens: 3618,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.6,
      stop: [" Human:", " AI:"],
    });
    console.log(response);
    return response.data.choices[0].text;
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
    }
  }
}
export default openai;
