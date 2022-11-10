import "./Questions.scss";
import React, { useState } from "react";
import { questions } from "../../constants/constants";

function Questions() {
  const [open, setOpen] = useState(1);

  const handleOpenQuestion = (id) => {
    if (open !== id) {
      setOpen(id);
    } else setOpen(0);
  };

  return (
    <div id="questions" className="questions">
      <div className="container">
        <div className="questions-heading">
          <p>GET YOUR QUESTION ANSWER</p>
          <h2>Frequently asked question</h2>
        </div>
        <div className="questions-list">
          {questions.map((question) => (
            <div key={question.id} className="questions-item">
              <div
                className={`questions-item-heading`}
                onClick={() => handleOpenQuestion(question.id)}
              >
                <span
                  className={`questions-icon ${
                    open === question.id ? "open" : "close"
                  }`}
                ></span>
                <p>{question.question}</p>
              </div>
              <div
                className={`questions-item-content ${
                  open === question.id ? "open" : "close"
                }`}
              >
                <p>{question.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Questions;
