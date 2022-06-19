import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, handleDelete, onAnswerChange}) {

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem question={question} key={question.id} onDelete={handleDelete} onAnswerChange={onAnswerChange}/>
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
