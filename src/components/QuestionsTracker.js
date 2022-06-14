import React from "react";

export const QuestionsTracker = ({ questions }) => {
  return (
    <>
      <h2>Your remaining questionss</h2>
      {questions.map((question, id) => {
        return <p key={id}>{question}</p>;
      })}
    </>
  );
};
