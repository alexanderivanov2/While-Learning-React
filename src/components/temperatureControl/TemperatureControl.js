import { useState } from 'react';
import BackButton from "../BackButton";
import styles from './TemperatureControl.module.css';
import TemperatureScreen from './TemperatureScreen';

function TemperatureControl() {
    const [temperature, setTemperature] = useState(18);
    const MIN_TEMPERATURE = 15;
    const MAX_TEMPERATURE = 30;

    const pressedButtonEffect = (e, pressedType) => {
        e.target.classList.add(styles[pressedType]);
        setTimeout(() => e.target.classList.remove(styles[pressedType]), 300);
    }

    const increaseTemperature = (e) => {
        pressedButtonEffect(e, 'pressedUp');
        setTemperature(state => state + 1 >= MAX_TEMPERATURE ? MAX_TEMPERATURE : state + 1);
    }

    const decreaseTemperature = (e) => {
        pressedButtonEffect(e, 'pressedDown');
        setTemperature(state => state - 1 <= MIN_TEMPERATURE ? MIN_TEMPERATURE : state - 1);
    }

    const temperatureControllerStyle = `${styles.controlTemperature}`;

    return (
        <>
            <BackButton/>
            <h2 className={styles.temperatureTitle}>Temperature Control App</h2>
            <section className={styles.temperatureController}>
                <TemperatureScreen temperature={temperature}/>
                <div className={styles.temperatureControls}>
                <div className={`${temperatureControllerStyle} ${styles.up} noSelect`} onClick={increaseTemperature}>+</div>
                <div className={`${temperatureControllerStyle} ${styles.down} noSelect`} onClick={decreaseTemperature}>&minus;</div>
            </div>
            </section>
        </>
    );
}

export default TemperatureControl;