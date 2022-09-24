import Answer from './Answer';
import styles from './ReactMovieMiniQuiz.module.css';

function Question({question, onClickAnswer, checkedAnswer, rightAnswer}) {
    // console.log(`${checkedAnswer} - ${rightAnswer}`);
    return (
        <>
            <article className={styles.question}>
                <p className={styles.questionText}>{question.question}</p>
            </article>
            <article className={styles.answers}>
                {question.answers.map(answer => <Answer onClickAnswer={onClickAnswer} key={answer.answer}
                 checkedAnswer={checkedAnswer} rightAnswer={rightAnswer} answer={answer.answer}/>)}
            </article>
        </>
    );
}

export default Question;