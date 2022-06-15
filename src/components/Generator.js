import React, { useState } from "react";
import { QuestionsTracker } from "./QuestionsTracker";
import { RolledQuestions } from "./RolledQuestions";

export const Generator = () => {
  const [questions, setQuestions] = useState([]);
  const [rolledQuestions, setRolledQuestions] = useState([]);

  const [firstQ, setFirstQ] = useState(1);
  const [lastQ, setLastQ] = useState(200);
  const [rolledNum, setRolledNum] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(firstQ + " <- fq and lq: " + lastQ);
    if (lastQ < firstQ) {
      console.log(
        "Your first question integer is smaller then your last question integer."
      );
      return;
    }
    setQuestions((prev) => {
      const newArr = [];
      for (let i = firstQ; i <= lastQ; i++) {
        newArr.push(i);
      }
      return newArr;
    });
    setRolledQuestions((prev) => []);
    setRolledNum((prev) => null);
  };

  const handleClick = () => {
    const randomNum = Math.floor(Math.random() * questions.length);
    const targetNum = questions[randomNum];
    setRolledNum(targetNum);
    setQuestions((prev) => {
      return prev.filter((t) => t !== targetNum);
    });
    setRolledQuestions((prev) => [...prev, targetNum]);
  };

  const form = (
    <>
      <h1>Questions counter</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstQ">First Question: </label>
        <input
          type="number"
          name="firstQ"
          id="firstQ"
          step="1"
          min="1"
          max="200"
          value={firstQ}
          onChange={(e) => setFirstQ((prev) => e.target.value)}
        />
        <label htmlFor="lastQ">Last Question: </label>
        <input
          type="number"
          name="lastq"
          id="lastq"
          step="1"
          min="1"
          max="200"
          value={lastQ}
          onChange={(e) => setLastQ((prev) => e.target.value)}
        />
        <input type="submit" value="Generate!" />
      </form>
    </>
  );

  return (
    <>
      {form}
      {questions.length > 0 ? (
        <button onClick={handleClick}>Roll a dice!</button>
      ) : null}
      {rolledNum ? <h3>You just rolled: {rolledNum}</h3> : null}
      <section className="overview">
        {questions.length > 0 ? (
          <QuestionsTracker questions={questions} />
        ) : null}
        {rolledQuestions.length > 0 ? (
          <RolledQuestions rolledQuestions={rolledQuestions} />
        ) : null}
      </section>
    </>
  );
};
