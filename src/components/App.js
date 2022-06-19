import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionList, setQuestionList] = useState([]);
  console.log(questionList);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((data) => setQuestionList(data));
  }, []);

  function handleNewQuestion(newQuestion) {
    const newQuestions = [...questionList, newQuestion];
    setQuestionList(newQuestions);
  }

  function handleDelete(deletedQuestion) {
    const updatedQuestions = questionList.filter(
      (question) => question.id !== deletedQuestion.id
    );
    setQuestionList(updatedQuestions);
  }

  function changeAnswer(newAnswer) {
    let updatedQuestions = [...questionList];
    updatedQuestions.forEach(question => question.id === newAnswer.id ? question.correctIndex = newAnswer.correctIndex : question);
    setQuestionList(updatedQuestions);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onNewQuestionSubmit={handleNewQuestion} />
      ) : (
        <QuestionList questions={questionList} handleDelete={handleDelete} onAnswerChange={changeAnswer}/>
      )}
    </main>
  );
}

export default App;
