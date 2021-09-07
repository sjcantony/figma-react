// const FigmaAPIKey = "230563-1015c945-4370-4300-ba34-de9eca0ef916";
// const FigmaFileID = 'c2eBqSdVwkqoB0Lf4dk4aR';
const ImportData = [
    { Breadcrumbs: ["import { Breadcrumbs, BreadcrumbItem } from '@vds/breadcrumbs';\n"] },
    { Button: ["import { Button } from '@vds/button';\n"] },
    { CheckboxGroup: ["import { CheckboxGroup } from '@vds/inputs';\n"] }
];
const importStatements = "import React , { Component }  from 'react';\n";
const constructedData = [];
var FigmaAPIKey = '', FigmaFileID = '', componentName = '', data;
var FigmaAPIKeyInput, FigmaFileIDInput, componentNameInput;
document.getElementById('downloadReact').onclick = () => {
    FigmaAPIKeyInput = (document.getElementById('accessToken'));
    FigmaFileIDInput = (document.getElementById('figmaId'));
    componentNameInput = (document.getElementById('componentName'));
    FigmaAPIKey = FigmaAPIKeyInput.value;
    FigmaFileID = FigmaFileIDInput.value;
    componentName = componentNameInput.value;
    fetch('https://api.figma.com/v1/files/' + FigmaFileID, {
        method: 'GET',
        headers: {
            'X-Figma-Token': FigmaAPIKey
        }
    })
        .then(function (response) {
        return response.json();
    })
        .then(function (myJson) {
        data = myJson;
        CodeCreation(data);
        // parent.postMessage({ pluginMessage: { type: 'downloadData', data, componentName } }, '*');
    });
};
document.getElementById('cancel').onclick = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
};
function CodeCreation(data) {
    console.log(data);
}
// import * as React from 'react'
// import * as ReactDOM from 'react-dom'
// import './ui.css'
// declare function require(path: string): any
// class App extends React.Component {
//   textbox: HTMLInputElement
//   countRef = (element: HTMLInputElement) => {
//     if (element) element.value = '5'
//     this.textbox = element
//   }
//   onCreate = () => {
//     const count = parseInt(this.textbox.value, 10)
//     parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*')
//   }
//   onCancel = () => {
//     parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
//   }
//   render() {
//     return <div>
//       <img src={require('./logo.svg')} />
//       <h2>Rectangle Creator</h2>
//       <p>Count: <input ref={this.countRef} /></p>
//       <button id="create" onClick={this.onCreate}>Create</button>
//       <button onClick={this.onCancel}>Cancel</button>
//     </div>
//   }
// }
// ReactDOM.render(<App />, document.getElementById('react-page'))
