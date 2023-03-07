import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});
const openaiapi = new OpenAIApi(configuration);

async function openai(contractName) {
  if (!configuration.apiKey) {
    return "OpenAI API key not configured, please follow instructions in README.md";
  }
  if (contractName.trim().length === 0) {
    return "Please enter a valid contractName";
  }

  try {
    const response = await openaiapi.createCompletion({
      model: "text-davinci-003",
      prompt: "list 20 Rent aggrement input fields with dummy data",
      temperature: 0.9,
      max_tokens: 2618,
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
