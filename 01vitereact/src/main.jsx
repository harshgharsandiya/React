import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp() {
    return (
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank',
//     },
//     children: 'Hey Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "harsh"

const ReactElement = React.createElement(
    //tag
    'a',
    //object
    {
        href: 'https://google.com',
        target: '_blank'
    },
    //text
    'Visit Google',
    //variable
    anotherUser
)

createRoot(document.getElementById('root')).render(
    // <App />
    // MyApp()
    // <MyApp />
    ReactElement 
    // anotherElement
)
