function TemperatureScreen({temperature}) {


    return (
        <>
            <div className={ temperature < 20 ? "cold temperatureScreen" : "hot temperatureScreen"}>
                <p className="temperature">{temperature}&#8451;</p>
            </div>
        </>
    );
}

export default TemperatureScreen;