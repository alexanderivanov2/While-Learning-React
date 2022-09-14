import { useState } from 'react';
import './Counter.css';

function Counter() {
    const [countResult, setCountResult] = useState(0);

    return (
        <>
        <section className='counterBox'>
            <h3 className="countResult">{countResult}</h3>
            <article className='controls'>
                <div className="add control">+</div>
                <div className="minus control">-</div>
            </article>
        </section>
        </>
    );
}

export default Counter;