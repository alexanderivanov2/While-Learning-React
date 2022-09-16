import styles from './TemperatureControl.module.css';

function TemperatureScreen({temperature}) {

    return (
        <>
            <div className={`${styles.temperatureScreen} ${temperature < 20 ? styles.cold : styles.hot}`}>
                <p className={styles.temperature}>{temperature}&#8451;</p>
            </div>
        </>
    );
}

export default TemperatureScreen;