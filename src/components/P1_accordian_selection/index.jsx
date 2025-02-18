import React, { useState } from "react";
import { questions } from "./data";
import "./style.css";

const Accordian = () => {
  const [singleSelection, setSingleSelection] = useState(null);

  //   For Multiple Selection
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  //   To store Multiple Selection id
  const [multipleSelected, setMultipleSelected] = useState([]);

  const handleSingleSelection = (id) => {
    setSingleSelection(id === singleSelection ? null : id);
  };

  const handleMultiSelection = (id) => {
    let selected = [...multipleSelected];
    if (selected.includes(id)) {
      selected = selected.filter((item) => item !== id);
    } else {
      selected.push(id);
    }
    setMultipleSelected(selected);
  };

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {questions && questions.length > 0 ? (
          questions.map((question) => (
            <div key={question.id} className="item">
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(question.id)
                    : () => handleSingleSelection(question.id)
                }
              >
                <h3>{question.question}</h3>
                <span>
                  {enableMultiSelection
                    ? multipleSelected.includes(question.id)
                      ? "-"
                      : "+"
                    : singleSelection === question.id
                    ? "-"
                    : "+"}
                </span>
              </div>
              {enableMultiSelection
                ? multipleSelected.includes(question.id) && (
                    <div className="content">{question.answer}</div>
                  )
                : singleSelection === question.id && (
                    <div className="content">{question.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <p>No questions found</p>
        )}
      </div>
      <p className="Copyright">@ Anish Gane | 2025</p>
    </div>
  );
};

export default Accordian;
