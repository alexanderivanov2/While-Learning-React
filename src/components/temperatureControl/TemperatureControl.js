import { useState } from 'react';
import BackButton from "../BackButton";
import './TemperatureControl.css';
import TemperatureScreen from './TemperatureScreen';

function TemperatureControl() {
    const [temperature, setTemperature] = useState(18);

    return (
        <>
            <BackButton/>
            <h2 className="counterTitle">Temperature Control App</h2>
            <section className="temperatureController">
                <TemperatureScreen temperature={temperature}/>
            </section>
        </>
    );
}

export default TemperatureControl;