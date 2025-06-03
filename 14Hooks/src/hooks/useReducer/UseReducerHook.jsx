import React, { useReducer } from 'react';

const ACTION = {
    INCREASE: 'increase',
    DECREASE: 'decrease',
};
const initialState = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case ACTION.INCREASE:
            return { count: state.count + 1 };
        case ACTION.DECREASE:
            return { count: state.count - 1 };
        default:
            return state;
    }

    return { count: state.count + 1 };
};

function UseReducerHook() {
    //counter app
    // const [count, setCount] = React.useState(0);

    const [state, dispatch] = useReducer(reducer, initialState);

    const increment = () => {
        // setCount((prevCount) => prevCount + 1);
        dispatch({ type: ACTION.INCREASE });
    };
    const decrement = () => {
        // setCount((prevCount) => prevCount - 1);
        dispatch({ type: ACTION.DECREASE });
    };

    return (
        <div>
            <h2>Count : {state.count}</h2>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
        </div>
    );
}

export default UseReducerHook;
