import React from "react";

export const RolledQuestions = ({ rolledQuestions }) => {
  return (
    <div className="box">
      <h2>Already rolled:</h2>
      {rolledQuestions.map((question, id) => {
        return <p key={id}>{question}</p>;
      })}
    </div>
  );
};
