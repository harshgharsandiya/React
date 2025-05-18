function customRender(reactElement,  container) {
    /* Version1 -- Static
    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */
    
    //Version 2 -- Loop based 
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        //for older version
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)

}

// react view element as a tree
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Hey Click me to visit google'
}

const mainContainer = document.querySelector('#root')

//render--> add to root
customRender(reactElement, mainContainer)