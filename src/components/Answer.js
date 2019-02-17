import React, { Component } from 'react';

export default class Answer extends Component {

  checkAnswer = (e) => {
    let { isAnswered, setClassName, correct, increaseScore, classNames, showButton, addResponse } = this.props;
    
    if(!isAnswered) {
        let elem = e.currentTarget,
          answer = Number(elem.getAttribute('data-id')),
          updatedClassNames = [...classNames];
        
        console.log('The chosen Answer is: Option ' + elem.getAttribute('data-option'));
        
        if (answer === correct) {
          console.log('Chosen Option is correct');
          updatedClassNames[answer - 1] = 'right';
          increaseScore();
        } else {
            updatedClassNames[answer - 1] = 'wrong';
            console.log('Chosen Option is wrong! The correct option is ' + String.fromCharCode(64 + correct));
        }
        
        setClassName(updatedClassNames);
        showButton();
        addResponse(answer);
    }
  }

  render() {
    let { answers, classNames, displayPopup } = this.props;
    return !displayPopup ? (
      <div className="col-12">
        <div id="answers">
          <ul>
              <li onClick={this.checkAnswer} className={classNames[0]} data-id="1" data-option="A"><span>A</span> <p>{answers[0]}</p></li>
              <li onClick={this.checkAnswer} className={classNames[1]} data-id="2" data-option="B"><span>B</span> <p>{answers[1]}</p></li>
              <li onClick={this.checkAnswer} className={classNames[2]} data-id="3" data-option="C"><span>C</span> <p>{answers[2]}</p></li>
              <li onClick={this.checkAnswer} className={classNames[3]} data-id="4" data-option="D"><span>D</span> <p>{answers[3]}</p></li>
          </ul>
        </div>
      </div>
    ) : null;
  }
}
