import genAI from "./api.js";

const generate = async (queryDescription) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `Convert the following natural language description into a SQL query: \n\n${queryDescription}.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
};

export default generate;
