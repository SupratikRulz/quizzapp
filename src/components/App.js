import React, { Component } from 'react';
import questionData from './../questions.json';
import Question from './Question';
import Answer from './Answer';

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
      answerClassNames: ['', '', '', '']
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
    if(currentQuestion === total - 1){
        this.setState({
            displayPopup: 'flex'
        });
    } else {
        this.pushData(currentQuestion + 1);
        this.setState({
            showButton: false,
            questionAnswered: false,
            answerClassNames: ['', '', '', '']
        });
    }
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

  componentWillMount() {
    this.pushData(0);
  }
  

  render() {
    let {answers, correct, questionAnswered, currentQuestion, total, showButton, answerClassNames, question} = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          <Question 
            currentQuestion={currentQuestion}
            total={total}
            question={question}
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
