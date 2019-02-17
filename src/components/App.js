import React, { Component } from 'react';
import questionData from './../questions.json';
import Question from './Question';
import Answer from './Answer';
import Popup from './Popup';

class App extends Component {

  constructor() {
    super();
    this.state = {
      currentQuestion: 0,
      total: questionData.length,
      questionAnswered: false,
      score: 0,
      showButton: false,
      question: questionData[0].question,
      answers: questionData[0].answers,
      correct: questionData[0].correct,
      answerClassNames: ['', '', '', ''],
      storedResponses: [],
      displayPopup: false
    };
  }

  pushData = currentQuestion => {
    this.setState({
        question: questionData[currentQuestion].question,
        answers: [questionData[currentQuestion].answers[0], questionData[currentQuestion].answers[1], questionData[currentQuestion].answers[2], questionData[currentQuestion].answers[3] ],
        correct: questionData[currentQuestion].correct,
        currentQuestion: currentQuestion
    });
  }

  nextQuestion = () => {
    let {currentQuestion, total} = this.state;
    this.setState({
      showButton: false,
      questionAnswered: false,
      answerClassNames: ['', '', '', '']
    });
    if (currentQuestion === total - 1) {
        this.setState({
            displayPopup: true
        });
    } else {
        this.pushData(currentQuestion + 1);
    }
  }

  restartQuiz = () => {
    this.setState({
      displayPopup: false,
      storedResponses: [],
      score: 0
    });
    this.pushData(0);
  }

  setAnswerClassNames = answerClassNames => {
    this.setState({answerClassNames});
  }

  handleIncreaseScore = () => {
    this.setState({
        score: this.state.score + 1
    });
  }

  handleShowButton = () => {
    this.setState({
        showButton: true,
        questionAnswered: true
    })
  }

  addResponse = response => {
    this.setState({
      storedResponses: [...this.state.storedResponses, response]
    })
  }

  componentWillMount() {
    this.pushData(0);
  }
  

  render() {
    let {
      answers,
      correct,
      questionAnswered,
      currentQuestion,
      total,
      showButton,
      answerClassNames,
      question,
      displayPopup,
      score,
      storedResponses
    } = this.state;
    return (
      <div className="container-fluid">
        <Popup 
          displayPopup={displayPopup}
          score={score}
          total={total}
          storedResponses={storedResponses}
          questionData={questionData}
          restartQuiz={this.restartQuiz}
        />
        <div className="row">
          <Question 
            currentQuestion={currentQuestion}
            total={total}
            question={question}
            displayPopup={displayPopup}
          />
        </div>

        <div className="row">
          <Answer 
            answers={answers}
            correct={correct}
            isAnswered={questionAnswered}
            showButton={this.handleShowButton}
            increaseScore={this.handleIncreaseScore}
            classNames={answerClassNames}
            setClassName={this.setAnswerClassNames}
            addResponse={this.addResponse}
            displayPopup={displayPopup}
          />
        </div>
        <div id="submit">
          {showButton ? <button className="fancy-btn" onClick={this.nextQuestion} >{currentQuestion === total-1 ? 'Finish quiz' : 'Next question'}</button> : null}
        </div>
      </div>
    );
  }
}

export default App;
