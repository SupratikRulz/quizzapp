import React, { Component } from 'react';

export default class Answer extends Component {

  checkAnswer = (e) => {
    let { isAnswered, setClassName, correct, increaseScore, classNames, showButton } = this.props;
    
    if(!isAnswered) {
        let elem = e.currentTarget,
          answer = Number(elem.dataset.id),
          updatedClassNames = [...classNames];

        if (answer === correct) {
            updatedClassNames[answer-1] = 'right';
            increaseScore();
        }
        else {
            updatedClassNames[answer-1] = 'wrong';
        }

        setClassName(updatedClassNames);
        showButton();
    }
  }

  render() {
    let { answers, classNames } = this.props;
    return (
      <div className="col-12">
        <div id="answers">
          <ul>
              <li onClick={this.checkAnswer} className={classNames[0]} data-id="1"><span>A</span> <p>{answers[0]}</p></li>
              <li onClick={this.checkAnswer} className={classNames[1]} data-id="2"><span>B</span> <p>{answers[1]}</p></li>
              <li onClick={this.checkAnswer} className={classNames[2]} data-id="3"><span>C</span> <p>{answers[2]}</p></li>
              <li onClick={this.checkAnswer} className={classNames[3]} data-id="4"><span>D</span> <p>{answers[3]}</p></li>
          </ul>
        </div>
      </div>
    )
  }
}
