import React from 'react';

export default function Question(props) {
  return (
    <div className="col-12">
      <div className="question-container">
        <div className="question-number">
          Question Number {props.currentQuestion + 1} / {props.total}
        </div>
        <div className="question">
          {props.question}
        </div>
      </div>
    </div>    
  )
}
