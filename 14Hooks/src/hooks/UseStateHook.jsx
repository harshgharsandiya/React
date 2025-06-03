import React, { useState } from 'react';

function UseStateHook() {
    // const [counter, setCounter] = useState(0);
    // const [name, setName] = useState('');

    const [details, setDetails] = useState({
        counter: 0,
        name: '',
    });

    const increaseCounter = () => {
        setDetails((prev) => ({
            ...prev,
            counter: prev.counter + 1,
        }));
    };

    const decreaseCounter = () => {
        setDetails((prev) => ({
            ...prev,
            counter: prev.counter - 1,
        }));
    };

    // const increaseCounter = () => {
    //     setCounter((prevCounter) => prevCounter + 1);
    // };

    // const decreaseCounter = () => {
    //     setCounter((prevCounter) => prevCounter - 1);
    // };

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setDetails({ name: e.target.value })}
            />
            <h1>
                {' '}
                {details.name || 'Guest'}! -- Counter: {details.counter}
            </h1>
            <button onClick={() => increaseCounter()}>Increase</button>
            <button onClick={() => decreaseCounter()}>Decrease</button>
        </div>
    );
}

export default UseStateHook;
