import Answer from './Answer';
import styles from './ReactMovieMiniQuiz.module.css';

function Question({question, onSelectTheAnswer, selectedAnswer, rightAnswer}) {
    return (
        <>
            <article className={styles.question}>
                <p className={styles.questionText}>{question.question}</p>
            </article>
            <article className={styles.answers}>
                {question.answers.map(answer => <Answer onSelectTheAnswer={onSelectTheAnswer} key={answer.answer}
                 selectedAnswer={selectedAnswer} rightAnswer={rightAnswer} answer={answer.answer}/>)}
            </article>
        </>
    );
}

export default Question;