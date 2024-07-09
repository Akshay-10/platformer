const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const port = 3000;

// Replace this with your actual Google API key
const apiKey = "AIzaSyCiJZnUte9xuH5Ob3bQ23UAlPgKhHu0gD0";

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.use(cors());
app.use(express.json());

app.post("/get-questions", async (req, res) => {
  try {
    const questions = [];
    for (let i = 0; i < 5; i++) {
      const prompt =
        "Give me a funny and thinkable question for a game with three choices and the correct answer.";
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      const [question, ...choices] = text
        .split("\n")
        .filter((line) => line.trim() !== "");
      const correct = choices.pop();
      questions.push({
        question: question.replace(/^Question: /, ""),
        choices: choices.map((choice) => choice.replace(/^- /, "")),
        correct: correct.replace(/^Correct answer: /, ""),
      });
    }

    res.json({ questions });
  } catch (error) {
    console.error("Error fetching questions:", error);
    res.status(500).json({ error: "Failed to fetch questions" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
