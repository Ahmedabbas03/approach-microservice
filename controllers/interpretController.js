const interpretScores = require("./interpretScores");

const interpretController = {
  getScores: async (req, res) => {
    try {
      const { scores } = req.body;

      // Validate if scores were provided
      if (!scores || !Array.isArray(scores) || scores.length !== 4) {
        return res.status(400).json({
          error:
            "Invalid scores provided: Scores should be an array of 4 numbers.",
        });
      }

      // Check for any invalid numbers in scores
      for (const score of scores) {
        if (
          typeof score !== "number" ||
          isNaN(score) ||
          score < 0 ||
          score > 1
        ) {
          return res
            .status(400)
            .json({ error: "Scores should be valid numbers between 0 and 1." });
        }
      }

      // Interpretations
      const interpretations = interpretScores(scores);

      if (interpretations.error) {
        return res.status(400).json({ error: interpretations.error });
      }

      // Send interpretations as JSON response
      return res.status(200).json(interpretations);
    } catch (error) {
      console.error("Error:", error.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = interpretController;
