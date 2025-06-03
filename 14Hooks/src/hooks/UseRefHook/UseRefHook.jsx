import React, { useEffect, useRef, useState } from 'react';

function UseRefHook() {
    const [name, setName] = useState('');
    // const [count, setCount] = useState(0);
    const count = useRef(0);

    const inputElement = useRef();

    useEffect(() => {
        count.current += 1;
    });

    const handleClick = () => {
        console.log('Button clicked');
        console.log(inputElement);
        inputElement.current.focus();
        inputElement.current.style.width = '300px';
    };

    return (
        <div>
            <input
                type="text"
                ref={inputElement}
                onChange={(e) => setName(e.target.value)}
            />
            <h2>Name: {name}</h2>
            <h2>Render: {count.current}</h2>
            <button onClick={handleClick}>Click Here</button>
        </div>
    );
}

export default UseRefHook;
