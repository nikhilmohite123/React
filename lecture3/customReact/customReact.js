
function customRainder(ReactElement,container){

    const element=document.createElement(ReactElement.type);
    element.innerHTML=ReactElement.children;
    // element.setAttribute("href",ReactElement.props.href);
    // element.setAttribute('target',ReactElement.props.target);

for (const prop in ReactElement.props) {
    element.setAttribute(prop,ReactElement.props[prop]);
}

    container.appendChild(element);
}

// tree like structure 
// react convert jsx in tree like structure
const ReactElement={
    type :"a",
    props:{
        href:"https://www.google.com/",
        target:"_blanck_"
    },
    children:"visit google"
}

const container=document.getElementById('root');

customRainder(ReactElement,container);
