import React, { useCallback, useState } from 'react';
import PrintTable from './PrintTable';

function UseCallbackHook() {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const calculateTable = useCallback(
        (value) => {
            let newNum = number + value;
            return [number * 1, number * 2, number * 3, number * 4, number * 5];
        },
        [number]
    );

    const cssStyle = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black',
    };

    // const calculateTable = () => {
    //     return [number * 1, number * 2, number * 3, number * 4, number * 5];
    // };

    return (
        <div style={cssStyle}>
            <input
                type="number"
                placeholder="Enter a number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />

            <PrintTable calculateTable={calculateTable} />
            <button onClick={() => setDark(!dark)}>Toggle</button>
        </div>
    );
}

export default UseCallbackHook;
