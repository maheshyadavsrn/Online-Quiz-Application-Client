import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Admin from "../components/Admin";
import Home from "../components/Home";
import Login from "../components/Login";
import Navbar from "../components/layout/NavBar";
import AddQuestion from '../components/question/AddQuestion';
import UpdateQuestion from "../components/question/UpdateQuestion";
import GetAllQuiz from "../components/quiz/GetAllQuiz";
import Quiz from "../components/quiz/Quiz";
import QuizResult from "../components/quiz/QuizResult";
import QuizStepper from "../components/quiz/QuizStepper";

function App() {

  return (
    <main className="container mt-5 mb-5">
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz-stepper" element={<QuizStepper/>} />
					<Route path="/take-quiz" element={<Quiz/>} />
					<Route path="/admin" element={<Admin/>} />
					<Route path="/create-quiz" element={<AddQuestion/>} />
					<Route path="/update-quiz/:id" element={<UpdateQuestion/>} />
					<Route path="/all-quizzes" element={<GetAllQuiz />} />
					<Route path="/quiz-result" element={<QuizResult />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </Router>
    </main>
  )
}

export default App
