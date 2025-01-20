class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    questions = [];
    this.timeLimit = timeLimit;
    timeLimit = 0;
    this.timeRemaining = timeRemaining;
    timeRemaining = 0;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }
  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    return (this.currentQuestionIndex += 1);
  }

  shuffleQuestions() {
    this.questions.sort((a, b) => 0.5 - Math.random());
  }

  // 5. checkAnswer(answer)

  // 6. hasEnded()
}
