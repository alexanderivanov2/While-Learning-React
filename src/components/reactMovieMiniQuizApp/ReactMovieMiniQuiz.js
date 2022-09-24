import styles from './ReactMovieMiniQuiz.module.css';
import jsonQuestions from './questions.json';
import { useEffect, useState } from 'react';
import Question from './Question';

function ReactMovieMiniQuiz() {
    const [questions, setQuestions] = useState({
        questions: [],
        questionsLength: 0, 
    });
    const [questionNumber, setQuestionNumber] = useState(0);
    const [quizStart, setQuizStart] = useState(false);
    const [quizEnd, setQuizEnd] = useState(false);
    const [checkedAnswer, setCheckedAnswer] = useState('');
    const [rightAnswer, setRightAnswer] = useState('');
    const [quizResult, setQuizResult] = useState(0);

    useEffect(() => {
        const getQuestions = jsonQuestions.questions;
        setQuestions({
            questions: getQuestions,
            questionsLength: getQuestions.length - 1,
        });
    }, []);

    const getRightAnswer = () => {
        let result = '';
        questions.questions[questionNumber].answers.forEach(x => {
            if (x.isCorrect) {
                result = x.answer;
            }
        });
   
        return result;
    }

    const checkAnswer = (answer) => {
        const correctAnswer = getRightAnswer();
        setQuizResult(state => answer == correctAnswer ? state + 1 : state);
        setCheckedAnswer(answer);
        setRightAnswer(correctAnswer);
    }

    const onClickAnswer = (e) => {
        e.target.classList.add(styles.selectedAnswer);

        checkAnswer(e.target.textContent);

        setTimeout(() => {
            if (questions.questionsLength === questionNumber) {
                setQuizStart(false);
                setQuizEnd(true);
            } else {
                setQuestionNumber(questionNumber + 1);
            }
        }, 1000);
    } 

    const endQuiz = () => {
        setQuizEnd(false);
        setQuestionNumber(0);
        setQuizResult(0);
        setQuizStart(true);
    }

    return (
        <>
            <h2 className={styles.title}>Movie Mini Quiz</h2>
            <section className={styles.questionBox}>
                {quizStart
                    ?
                        <>
                            <Question question={questions.questions[questionNumber]}
                            checkedAnswer={checkedAnswer}
                            rightAnswer={rightAnswer}
                            onClickAnswer={onClickAnswer}
                            />
                        </>
                    :
                        <>
                            {
                                quizEnd 
                                    ?
                                    <article>
                                        <h2 className={styles.quizTitle}>Movie Mini Quiz</h2>
                                        <p>Quiz result: {quizResult}/{questions.questionsLength + 1}</p>
                                        <button className={styles.startBtn} onClick={endQuiz}>New Quiz</button>
                                    </article>
                                    :
                                    <article>
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