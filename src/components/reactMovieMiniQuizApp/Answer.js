import styles from './ReactMovieMiniQuiz.module.css';

function Answer({answer, onSelectTheAnswer, selectedAnswer, rightAnswer}) {
    const classesAnswer = [styles.answer];

    if (selectedAnswer === answer) {
        classesAnswer.push(styles.selectedAnswer);
    }

    if (selectedAnswer !== rightAnswer && selectedAnswer === answer) {
        classesAnswer.push(styles.wrongAnswer);
    }

    if (answer === rightAnswer) {
        classesAnswer.push(styles.rightAnswer);
    }
    return (
        <>
            <p onClick={onSelectTheAnswer} className={classesAnswer.join(' ')} answer={answer}>{answer}</p>  
        </>
    );
}

export default Answer;