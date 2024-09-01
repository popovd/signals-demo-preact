import { useState } from 'preact/hooks';
import { Signal, useComputed } from '@preact/signals';
import Card from '../card/card';
import './dashboard.css';

export default function Dashboard({
    state
}: {
    state: Signal<number>
}) {
    const [counter, setCounter] = useState(0);
    const isEven = useComputed(() => state.value % 2 === 0 ? "yes" : "no");
    console.log('Dashboard render');
    return (
        <div class="container">
            <div class="row">
                <span>Is even number: {isEven}&nbsp;</span>
                <button onClick={() => setCounter(counter + 1)}>State Increment: {counter}</button>
            </div>
            <Card name={'Card'} className='card' counter={counter} />
            <Card name={'Card using signal'} className='card' counter={counter} signalCounter={state} />
            <Card name={'Card using signal value'} className='card' counter={counter} signalCounter={state} useSignalValue />
        </div>
    )
}