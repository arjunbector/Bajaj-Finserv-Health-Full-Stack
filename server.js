const express = require("express");
const cors = require("cors");
const jsonData = require("./data.json");
const { processData } = require("./utils");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.get("/ping", (_, res) => {
  res.status(200).json({ message: "pong" });
});

app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;
    if (!Array.isArray(data)) throw new Error("Invalid input");

    const processed = processData(data);

    res.status(200).json({
      is_success: true,
      user_id: `${jsonData.FULL_NAME}_${jsonData.DOB}`,
      email: jsonData.EMAIL,
      roll_number: jsonData.ROLL_NUMBER,
      odd_numbers: processed.odd,
      even_numbers: processed.even,
      alphabets: processed.alphabets,
      special_characters: processed.specials,
      sum: processed.sum,
      concat_string: processed.concatString,
    });
  } catch (err) {
    res.status(400).json({ is_success: false, error: err.message });
  }
});

module.exports = app;