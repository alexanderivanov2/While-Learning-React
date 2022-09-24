import styles from './ReactMovieMiniQuiz.module.css';

function Answer({answer, onClickAnswer, checkedAnswer, rightAnswer}) {
    const classesAnswer = [styles.answer];

    if (checkedAnswer === answer) {
        classesAnswer.push(styles.selectedAnswer);
    }

    if (checkedAnswer !== rightAnswer && checkedAnswer === answer) {
        classesAnswer.push(styles.wrongAnswer);
    }

    if (answer == rightAnswer) {
        classesAnswer.push(styles.rightAnswer);
    }
    return (
        <>
            <p onClick={onClickAnswer} className={classesAnswer.join(' ')} answer={answer}>{answer}</p>  
        </>
    );
}

export default Answer;