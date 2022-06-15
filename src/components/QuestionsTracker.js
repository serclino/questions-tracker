import React from "react";

export const QuestionsTracker = ({ questions }) => {
  return (
    <div className="box">
      <h2>Your remaining questions:</h2>
      {questions.map((question, id) => {
        return <p key={id}>{question}</p>;
      })}
    </div>
  );
};
