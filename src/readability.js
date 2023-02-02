export function fleschScores(text) {
  let letters = 0;
  let words = 1;
  let sentences = 0;

  // Count number of letters, words, and sentences
  for (const c of text) {
    if (/[a-zA-Z]/.test(c)) {
      letters += 1;
    } else if (c === " ") {
      words += 1;
    } else if (c === "." || c === "!" || c === "?") {
      sentences += 1;
    }
  }

  // Calculate the average number of letters and sentences per 100 words
  const L = (letters / words) * 100;
  const S = (sentences / words) * 100;

  // Calculate index
  const index = Math.round(0.0588 * L - 0.296 * S - 15.8);

  return index < 1 ? "Before 1" : index >= 16 ? "16+" : Math.round(index);
}

export function calculateReadingTime(text) {
  const wordsPerMinute = 200;
  const numberOfWords = text.split(" ").length;
  const readingTime = Math.ceil(numberOfWords / wordsPerMinute);
  return readingTime;
}
