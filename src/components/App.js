import React, { Component } from 'react';
import questionData from './../questions.json';

class App extends Component {

  constructor() {
    super();
    this.state = {
      currentQuestion: 0,
      total: questionData.length,
      questionAnswered: false,
      score: 0,
      showNext: false,
      question: "Demo Question",
      answers: [],
      correct: null
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-10">
            <div className="question-container">
              <div className="question-number">
                Question Number {this.state.currentQuestion + 1} / {this.state.total}
              </div>
              <div className="question">
                {this.state.question}
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          
        </div>
      </div>
    );
  }
}

export default App;
