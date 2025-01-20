class Question {
  // YOUR CODE HERE:
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    text = "";
    this.choices = choices;
    choices = [];
    this.answer = answer;
    answer = "";
    this.difficulty = difficulty;
    difficulty = "";
  }

  shuffleChoices() {
    this.choices.sort((a, b) => 0.5 - Math.random());
  }
}
