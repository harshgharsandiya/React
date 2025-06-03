import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';

function UseLayoutEffectHook() {
    const [toggle, setToggle] = useState(false);
    const textRef = useRef();

    // useEffect(() => {
    //     if (textRef.current != null) {
    //         const dimension = textRef.current.getBoundingClientRect();
    //         textRef.current.style.paddingTop = `${dimension.height + 1000}`;
    //     }

    //     console.log('useEffect called');
    // }, [toggle]);

    useLayoutEffect(() => {
        if (textRef.current != null) {
            const dimension = textRef.current.getBoundingClientRect();
            textRef.current.style.paddingTop = `${dimension.height + 1000}`;
        }

        console.log('useEffect called');
    }, [toggle]);

    // useLayoutEffect(() => {
    //     console.log('useLayoutEffect called');
    // }, [toggle]);

    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle ? <h2 ref={textRef}>Toggle is ON</h2> : null}
        </div>
    );
}

export default UseLayoutEffectHook;
