import React, { useState, useEffect } from 'react';
import { questionBank } from './questions'; // Import the 100 questions
import './App.css';

// The duration of the timer in seconds
const QUESTION_TIMER = 10;
// How long to show the correct/incorrect answer before moving on (in milliseconds)
const ANSWER_FEEDBACK_DURATION = 1500;

export default function App() {
    // State to manage which screen we're on: 'menu', 'quiz', 'score'
    const [gameState, setGameState] = useState('menu');
    // State to hold the 10 randomly selected questions for the current quiz
    const [questions, setQuestions] = useState([]);
    // State to track the current question index
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // State to track the score
    const [score, setScore] = useState(0);

    // --- New States for Timer and Answer Feedback ---
    const [timer, setTimer] = useState(QUESTION_TIMER);
    const [answered, setAnswered] = useState(false); // Has the user selected an answer?
    const [selectedAnswer, setSelectedAnswer] = useState(null); // Which answer was selected?

    // --- Timer Countdown Effect ---
    useEffect(() => {
        // Only run the timer if the game is in the 'quiz' state and the user hasn't answered yet
        if (gameState === 'quiz' && !answered) {
            if (timer === 0) {
                // Time's up!
                handleTimeUp();
            } else {
                // Decrement the timer every second
                const intervalId = setInterval(() => {
                    setTimer((prev) => prev - 1);
                }, 1000);
                // Clear the interval when the component unmounts or state changes
                return () => clearInterval(intervalId);
            }
        }
    }, [timer, answered, gameState]);

    // --- Quiz Setup Function ---
    // This function prepares a new quiz by shuffling and selecting questions
    const loadNewQuiz = () => {
        // Shuffle the entire question bank
        const shuffledQuestions = [...questionBank].sort(() => Math.random() - 0.5);
        // Select the first 10 questions
        setQuestions(shuffledQuestions.slice(0, 10));

        // Reset all game states
        setCurrentQuestion(0);
        setScore(0);
        setTimer(QUESTION_TIMER);
        setAnswered(false);
        setSelectedAnswer(null);
    };

    // --- App Load Effect ---
    // Load a quiz when the app first mounts so it's ready for the menu
    useEffect(() => {
        loadNewQuiz();
    }, []);

    // --- Event Handlers ---

    // Called from "Start Quiz" and "Retry Quiz" buttons
    const handleStartQuiz = () => {
        loadNewQuiz(); // Load a new set of questions
        setGameState('quiz'); // Start the game
    };

    // Moves to the next question or ends the game
    const moveToNext = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            // Reset states for the new question
            setTimer(QUESTION_TIMER);
            setAnswered(false);
            setSelectedAnswer(null);
        } else {
            // End of quiz
            setGameState('score');
        }
    };

    // Called when an answer button is clicked
    const handleAnswerOptionClick = (isCorrect, answerOption) => {
        if (answered) return; // Prevent multiple clicks
        setAnswered(true); // Stop the timer
        setSelectedAnswer(answerOption); // Store the selected answer for styling

        if (isCorrect) {
            setScore(score + 1); // Increment score
        }

        // Wait for a moment to show feedback, then move on
        setTimeout(() => {
            moveToNext();
        }, ANSWER_FEEDBACK_DURATION);
    };

    // Called by the timer when it reaches 0
    const handleTimeUp = () => {
        setAnswered(true); // Stop interactions
        // No answer was selected, so setSelectedAnswer(null)
        // No score is given

        // Wait for a moment to show the correct answer, then move on
        setTimeout(() => {
            moveToNext();
        }, ANSWER_FEEDBACK_DURATION);
    };

    // --- Dynamic Styling Function ---
    // This function determines the CSS class for each answer button
    const getButtonClass = (answerOption) => {
        if (!answered) {
            return ''; // Default style
        }

        // If this answer is the correct one, always show it as green
        if (answerOption.isCorrect) {
            return 'correct';
        }

        // If this answer was selected and it's incorrect, show it as red
        if (answerOption === selectedAnswer && !answerOption.isCorrect) {
            return 'incorrect';
        }

        // Otherwise, it's just a regular, non-selected, incorrect option
        return 'disabled';
    };

    // --- New Score Message Function ---
    const getScoreMessage = () => {
        // User's 1-4 range (includes 0)
        if (score <= 4) {
            return <p className="score-message low">aura --</p>;
        }
        // User's 5-7 range
        if (score >= 5 && score <= 7) {
            return <p className="score-message mid">Decent... you're not a complete NPC.</p>;
        }
        // User's 8-10 range
        return <p className="score-message high">aura ++ You're the main character!</p>;
    };


    // --- Render Functions ---

    // Renders the main content based on the current gameState
    const renderContent = () => {
        switch (gameState) {
            case 'score':
                return (
                    <div className='score-section'>
                        <h2>You scored {score} out of {questions.length}</h2>
                        {/* This will display the new message */}
                        {getScoreMessage()}
                        <button className='retry-button' onClick={handleStartQuiz}>Retry Quiz</button>
                    </div>
                );
            case 'quiz':
                // Check if questions are loaded
                if (questions.length === 0) {
                    return <div>Loading questions...</div>;
                }
                return (
                    <>
                        {/* New Timer Bar. The 'key' resets the animation on each question */}
                        <div className="timer-bar-container">
                            <div
                                key={currentQuestion}
                                className="timer-bar"
                                style={{ animationDuration: `${QUESTION_TIMER}s` }}
                            ></div>
                        </div>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            {/* Text Timer Display */}
                            <div className='timer-section'>
                                Time Left: {timer}s
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                <button
                                    key={index}
                                    // Pass the full answer object to the click handler
                                    onClick={() => handleAnswerOptionClick(answerOption.isCorrect, answerOption)}
                                    // Disable all buttons once an answer is chosen or time is up
                                    disabled={answered}
                                    // Apply dynamic styling
                                    className={getButtonClass(answerOption)}
                                >
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
                        <button className='start-button' onClick={handleStartQuiz}>Start Quiz</button>
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
                {/* This wrapper handles the fade animation between game states */}
                <div key={gameState} className="content-wrapper">
                    {renderContent()}
                </div>
            </main>
        </div>
    );
}
