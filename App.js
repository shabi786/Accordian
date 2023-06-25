import React from "react";
import ReactDOM from "react-dom/client";
import Question from "./Question";
import '/styles.css'


const questions = [
    {
        id: 1,
        title: "Is this a good product?",
        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
        id: 2,
        title: "How much does it cost?",
        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."

    },
    {
        id: 3,
        title: "When can I get it?",
        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    }

]

const App = () => {
    return (
        <div className="main-container">
            <h1>FAQ/Accordian</h1>
            <div className="container">
                <h2>Frequently Asked Questions</h2>
                <div className="questions">
                    {questions.map((question) => <Question key={question.id} title={question.title} question={question.answer} />)}
                </div>
            </div>
        </div>

    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)