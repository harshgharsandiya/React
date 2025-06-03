import React, { useMemo, useState } from 'react';

function expensiveFunction(num) {
    console.log('Loop Started');
    for (let i = 0; i < 1000000000; i++) {}

    return num;
}

function UseMemoHook1() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const memoCalculation = useMemo(() => {
        return expensiveFunction(number);
    }, [number]);

    // const calculation = expensiveFunction(number);

    const cssStyle = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#000',
    };

    return (
        <div style={cssStyle}>
            <input
                type="number"
                onChange={(e) => setNumber(e.target.valueAsNumber)}
                value={number}
                placeholder="Enter a number"
            />

            <h2>Calculation: {memoCalculation}</h2>
            <button onClick={() => setDark(!dark)}>Toggle</button>
        </div>
    );
}

export default UseMemoHook1;
