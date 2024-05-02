interface Node {
  tag: string;
  type: string;
  value: string;
  children?: Node[];
}

// Function to get read time
const getReadTime = (content: Node[]): number => {
  try {
    let words = 0;
    const avgWordsPerMinute = 200;

    const extractText = (node: Node): string => {
      if (node.type === "text") {
        return node.value.trim();
      } else if (node.children && Array.isArray(node.children)) {
        return node.children.map(extractText).join(" ");
      } else {
        return "";
      }
    };

    // Traverse content and calculate word count
    for (const node of content) {
      if (node.tag !== "style") {
        const text = extractText(node);
        words += text.split(/\s+/).length; // Count words
      }
    }

    const time = Math.ceil(words / avgWordsPerMinute);
    return time;
  } catch (error) {
    console.error(`Error processing markdown content: ${error}`);
    return 0; 
  }
};

export default getReadTime;
