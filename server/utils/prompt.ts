export const getGeminiPrompt = (content: String) => {
  console.log(content, typeof content);
  const text = `
      You are a Markdown Content Expert.
      Your task is extract content from the markdown file and answers according to user queries.
      
      Give me a exact content from this markdown code without explaining anything, make sure to provide it in the paragraph format only

      ${content}

      Please deliver the response in proper formated text.
    `;

  return text;
};

export const getOpenAIPrompt = (content: String) => {
  const text = `
Given the structured content below, which contains detailed descriptions and information on a specific topic, please provide a concise summary of the key points and main features described. 
The ${content} includes sections with headings, paragraphs, 
and various elements detailing aspects of the subject. 
Summarize the primary functionalities, usage, and any specific methods or instructions highlighted within the content.
`;

  return text;
};
