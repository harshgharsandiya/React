import React, { useEffect, useState } from 'react';

function UseEffectHook() {
    const [count, setCount] = useState(0);
    const [otherCount, setOtherCount] = useState(5);
    const [time, setTime] = useState(0);

    useEffect(() => {
        document.title = `${otherCount} new Messages!`;
    }, [otherCount, count]);

    useEffect(() => {
        console.log('Component mounted or updated');
        const timer = setInterval(() => {
            setTime(time + 1);
        }, 1000);

        return () => {
            console.log('Cleanup function called');
            clearInterval(timer);
        };
    }, [count]);

    return (
        <div>
            <h3>{count} new Messages!</h3>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <h3>Other Count: {otherCount}</h3>
            <button onClick={() => setOtherCount(otherCount + 5)}>
                Increase by 5
            </button>

            <h3>{time} in seconds</h3>
        </div>
    );
}

export default UseEffectHook;
