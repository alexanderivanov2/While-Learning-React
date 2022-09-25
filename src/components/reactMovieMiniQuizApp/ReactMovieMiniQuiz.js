import styles from './ReactMovieMiniQuiz.module.css';
import jsonQuestions from './questions.json';
import { useEffect, useState } from 'react';
import Question from './Question';
import BackButton from '../BackButton';

function ReactMovieMiniQuiz() {
    const [questions, setQuestions] = useState({
        questions: [],
        questionsLength: 0, 
    });
    const [questionNumber, setQuestionNumber] = useState(0);
    const [quizStart, setQuizStart] = useState(false);
    const [quizEnd, setQuizEnd] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [rightAnswer, setRightAnswer] = useState('');
    const [quizResult, setQuizResult] = useState(0);

    useEffect(() => {
        const getQuestions = jsonQuestions.questions;
        setQuestions({
            questions: getQuestions,
            questionsLength: getQuestions.length - 1,
        });
    }, []);

    const getTheRightAnswer = () => {
        let result = '';

        questions.questions[questionNumber].answers.forEach(x => {
            if (x.isCorrect) {
                result = x.answer;
            }
        });
   
        return result;
    }

    const checkTheSelectedAnswer = (answer) => {
        const correctAnswer = getTheRightAnswer();
        setQuizResult(state => answer === correctAnswer ? state + 1 : state);
        setSelectedAnswer(answer);
        setRightAnswer(correctAnswer);
    }

    const onSelectTheAnswer = (e) => {
        checkTheSelectedAnswer(e.target.textContent);

        setTimeout(() => {
            if (questions.questionsLength === questionNumber) {
                setQuizStart(false);
                setQuizEnd(true);
            } else {
                setQuestionNumber(questionNumber + 1);
            }
        }, 1000);
    } 

    const resetQuiz = () => {
        setQuizEnd(false);
        setQuestionNumber(0);
        setQuizResult(0);
        setRightAnswer('');
        setSelectedAnswer('');
        setQuizStart(true);
    }

    return (
        <>
            <BackButton/>
            <h2 className={styles.title}>Movie Mini Quiz</h2>
            <section className={styles.questionBox}>
                {quizStart
                    ?
                        <>
                            <Question 
                                question={questions.questions[questionNumber]}
                                selectedAnswer={selectedAnswer}
                                rightAnswer={rightAnswer}
                                onSelectTheAnswer={onSelectTheAnswer}
                            />
                        </>
                    :
                        <>
                            {quizEnd 
                                ?
                                    <article className={styles.controllBox}>
                                        <h2 className={styles.quizTitle}>Movie Mini Quiz</h2>
                                        <p className={styles.quizResult}>Quiz result: {quizResult}/{questions.questionsLength + 1}</p>
                                        <button className={styles.startBtn} onClick={resetQuiz}>New Quiz</button>
                                    </article>
                                :
                                    <article className={styles.controllBox}>
                                        <h2 className={styles.quizTitle}>Movie Mini Quiz</h2>
                                        <button className={styles.startBtn} onClick={(e) => setQuizStart(true)}>Start Quiz</button>
                                    </article>
                            }
                        </>
                }
            </section>  
        </>
    );
}

export default ReactMovieMiniQuiz;