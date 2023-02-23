const words: string[] = [
  "napkin",
  "narrow",
  "images",
  "ticket",
  "nickel",
  "animal",
  "origin",
  "bottle",
  "potato",
  "needle",
];
const getRandomWord = () => {
  const i = Math.floor(Math.random() * words.length);
  return words[i];
};

export default getRandomWord;
