function interpretScores(scores) {
  if (!Array.isArray(scores) || scores.length !== 4) {
    return {
      error: "Invalid scores provided. Scores should be an array of 4 numbers.",
    };
  }

  for (const score of scores) {
    if (typeof score !== "number" || isNaN(score) || score < 0 || score > 1) {
      return { error: "Scores should be valid numbers between 0 and 1." };
    }
  }

  const [TOXICITY, INSULT, THREAT, IDENTITY_ATTACK] = scores;

  const interpret = (score, attribute) => {
    if (score >= 0.8 && score <= 1.0) {
      return `This message is very likely to contain ${attribute.toLowerCase()}.`;
    } else if (score >= 0.6 && score < 0.8) {
      return `This message is likely to contain ${attribute.toLowerCase()}.`;
    } else if (score >= 0.4 && score < 0.6) {
      return `There is uncertainty whether this message contains ${attribute.toLowerCase()}.`;
    } else {
      return `It is unlikely that this message contains ${attribute.toLowerCase()}.`;
    }
  };

  const interpretations = [
    interpret(TOXICITY, "Toxicity"),
    interpret(INSULT, "an Insult"),
    interpret(THREAT, "a Threat"),
    interpret(IDENTITY_ATTACK, "an Identity Attack"),
  ];

  return { interpretations };
}

module.exports = interpretScores;
