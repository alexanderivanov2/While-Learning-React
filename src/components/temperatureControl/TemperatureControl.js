import { useState } from 'react';
import BackButton from "../BackButton";
import './TemperatureControl.css';
import TemperatureScreen from './TemperatureScreen';

function TemperatureControl() {
    const [temperature, setTemperature] = useState(18);
    const MIN_TEMPERATURE = 15;
    const MAX_TEMPERATURE = 30;

    const pressedButtonEffect = (e) => {
        e.target.classList.add('pressed');
        setTimeout(() => e.target.classList.remove('pressed'), 200);
    }

    const increaseTemperature = (e) => {
        pressedButtonEffect(e);
        setTemperature(state => state + 1 >= MAX_TEMPERATURE ? MAX_TEMPERATURE : state + 1);
    }

    const decreaseTemperature = (e) => {
        pressedButtonEffect(e);
        setTemperature(state => state - 1 <= MIN_TEMPERATURE ? MIN_TEMPERATURE : state - 1);
    }

    return (
        <>
            <BackButton/>
            <h2 className="counterTitle">Temperature Control App</h2>
            <section className="temperatureController">
                <TemperatureScreen temperature={temperature}/>
                <div className="temperatureControls">
                <div className="controlTemperature up noSelect" onClick={increaseTemperature}>+</div>
                <div className="controlTemperature down noSelect" onClick={decreaseTemperature}>&minus;</div>
            </div>
            </section>
        </>
    );
}

export default TemperatureControl;