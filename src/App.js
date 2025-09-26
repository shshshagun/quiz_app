import React, { useState, useEffect } from 'react';
import { questionBank } from './questions'; // Import the questions
import './App.css';

export default function App() {
    // State to manage which screen we're on: 'menu', 'quiz', 'score'
    const [gameState, setGameState] = useState('menu');
    // State to hold the 5 randomly selected questions for the current quiz
    const [questions, setQuestions] = useState([]);
    // State to track the current question index
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // State to track the score
    const [score, setScore] = useState(0);

    // This function runs when the component loads. It's a good place for setup.
    useEffect(() => {
        // We'll prepare the first quiz when the app loads
        startQuiz();
    }, []);

    // Function to start or restart the quiz
    const startQuiz = () => {
        // Shuffle the question bank
        const shuffledQuestions = [...questionBank].sort(() => Math.random() - 0.5);
        // Select the first 5 questions and set them to state
        setQuestions(shuffledQuestions.slice(0, 5));

        // Reset all game states
        setCurrentQuestion(0);
        setScore(0);
        setGameState('quiz'); // Set the game state to 'quiz'
    };

    // This function will be called from the start menu
    const beginQuizFromMenu = () => {
        startQuiz();
        setGameState('quiz');
    }

    // Function to handle answer button clicks
    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setGameState('score'); // If no more questions, go to the score screen
        }
    };

    // This function renders the main content based on the gameState
    const renderContent = () => {
        switch (gameState) {
            case 'score':
                return (
                    <div className='score-section'>
                        <h2>You scored {score} out of {questions.length}</h2>
                        <button className='retry-button' onClick={startQuiz}>Retry Quiz</button>
                    </div>
                );
            case 'quiz':
                // Check if questions are loaded
                if (questions.length === 0) {
                    return <div>Loading questions...</div>;
                }
                return (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                                    {answerOption.answerText}
                                </button>
                            ))}
                        </div>
                    </>
                );
            case 'menu':
            default:
                return (
                    <div className='menu-section'>
                        <h1>Welcome to the Trivia Challenge!</h1>
                        <p>Test your knowledge on Anime & Games.</p>
                        <button className='start-button' onClick={beginQuizFromMenu}>Start Quiz</button>
                    </div>
                );
        }
    };

    return (
        <div className='app'>
            <header className='app-header'>
                <h1>Gen Z Trivia</h1>
                <p>Anime & Gaming Edition</p>
            </header>
            <main>
                {renderContent()}
            </main>
        </div>
    );
}