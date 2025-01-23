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
    this.currentQuestionIndex++;
  }

  shuffleQuestions() {
    this.questions.sort((a, b) => 0.5 - Math.random());
  }

  checkAnswer(answer) {
    if (this.questions[this.currentQuestionIndex].answer === answer) {
      this.correctAnswers++;
    }
  }

  hasEnded() {
    return this.currentQuestionIndex >= this.questions.length;
  }

  filterQuestionsByDifficulty(difficulty) {
    if (difficulty > 0 && difficulty <= 3) {
      this.questions = this.questions.filter(
        (q) => q.difficulty === difficulty
      );
    }
  }

  averageDifficulty() {
    if (this.questions.length === 0) {
      return 0;
    }
    const totalDifficulty = this.questions.reduce(
      (sum, q) => sum + q.difficulty,
      0
    );
    return totalDifficulty / this.questions.length;
  }
}
