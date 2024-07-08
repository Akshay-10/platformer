import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const port = 3000;

// Replace this with your actual OpenAI API key
const openaiApiKey =
  "sk-proj-Sy8YcMw2UFKNuQOb8nbcT3BlbkFJSCqHY5r30y8RtKZoQzWbY";

app.use(cors());
app.use(express.json());

app.post("/get-question", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        model: "text-davinci-003",
        prompt: "Give me a funny and thinkable question for a game:",
        max_tokens: 50,
      },
      {
        headers: {
          Authorization: `Bearer ${openaiApiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    const question = response.data.choices[0].text.trim();
    res.json({ question });
  } catch (error) {
    console.error("Error fetching question:", error);
    console.error(
      "Error details:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: "Failed to fetch question" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
