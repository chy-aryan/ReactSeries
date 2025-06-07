function customrender(reactelement , container){
    const domEle = document.createElement(reactelement.type);
    domEle.innerHTML = reactelement.children;
    domEle.setAttribute('href' , reactelement.props.href);
    domEle.setAttribute('target' , reactelement.props.target);
    container.appendChild(domEle);

}

const reactelement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}


const maincontainer = document.getElementById("root")
customrender(reactelement , maincontainer);