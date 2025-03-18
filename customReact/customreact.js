 function renderReact(reactElement,container){
    // version 1

    // const domElement=document.createElement(reactElement.type);
    // domElement.innerHTML=reactElement.children;
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);
    // container.appendChild(domElement);
    
    // version 2

    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    for (const prop in reactElement.props) {
        if(prop==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(domElement);
 }
 const reactElement={
    type:'a',
    props:{
        href:"https://github.com/",
        target:'_blank'
    },
    children:"Click here to go on github"
 }

 const mainCointainer=document.querySelector('#root')

 renderReact(reactElement,mainCointainer);