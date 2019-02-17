import React from 'react';

export default function Popup(props) {

  return props.displayPopup ? (
    <div className="row score-card">
      <div className="score col-12">Your score is: {props.score} out of {props.total}</div>
      <div className="summary col-12">Summary of the quiz</div>
      <div className="col-12">
        {
          props.questionData.map((data, index) => (
            <div key={'report-' + index} className="row report-section"> 
              <div className="report-question col-12">{data.question}</div>
              <div className="report-options col-12">{data.answers.map((answer, key) => (<div key={key + '-answer-' + index}>{'Option ' + String.fromCharCode(65 + key) + ')' + answer}</div>))}</div>
              <div className="report-correct-option col-6">{'Correct Option is: ' + String.fromCharCode(64 + data.correct)}</div>
              <div className="report-response col-6">{'You Selected: ' + String.fromCharCode(64 + props.storedResponses[index])}</div>
            </div>
          ))
        }
      </div>
      <div className="col-12">
        <button onClick={props.restartQuiz}>Restart Quiz</button>
      </div>
    </div>
  ) : null;
}
