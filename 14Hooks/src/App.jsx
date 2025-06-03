import { useState } from 'react';
import UseStateHook from './hooks/useStateHook';
import UseEffectHook from './hooks/UseEffectHook';
import UseContextHook from './hooks/ContextHook/UseContextHook';
import UseRefHook from './hooks/UseRefHook/UseRefHook';
import UseReducerHook from './hooks/useReducer/UseReducerHook';
import UseLayoutEffectHook from './hooks/useLayoutEffect/UseLayoutEffectHook';
import UseMemoHook1 from './hooks/useMemoHook/UseMemoHook1';
import UseCallbackHook from './hooks/useCallback/UseCallbackHook';
import CustomHook from './hooks/CustomHook/CustomHook';
import Axios from './hooks/Axios/Axios';

function App() {
    return (
        <>
            <Axios />
        </>
    );
}

export default App;
