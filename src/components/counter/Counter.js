import { useState } from 'react';
import './Counter.css';

function Counter() {
    const [countResult, setCountResult] = useState(0);

    const countResultAddition = (e) => {
        setCountResult(state => state + 1);
    }

    const countResultSubtraction = (e) => {
        setCountResult(state => state - 1 < 0 ? 0 : state - 1);
    }

    return (
        <>
        <section className='counterBox'>
            <h3 className="countResult">{countResult}</h3>
            <article className='controls'>
                <div className="add control" onClick={countResultAddition}>+</div>
                <div className="subtract control" onClick={countResultSubtraction}>-</div>
            </article>
        </section>
        </>
    );
}

export default Counter;