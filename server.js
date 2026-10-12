import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("frontend"))

app.get("/", (req, res) => {
  res.send("Ask Gemini Server is running!");
});

app.post("/ask", async (req, res) => {
  try {
    const { question } = req.body;

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: question
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    const answer =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No answer received";

    res.json({
      question: question,
      answer: answer
    });

  } catch (error) {
    res.status(500).json({
      error: "Something went wrong",
      message: error.message
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});


































































































