/**
 * <div>
 *       <div> 
 *          <h1>I'm h1 Tag</h1>
 *      </div>
 * </div> 
 * 
 * ReactElement(object)  => HTML(BROWSER understands)
 */
import React from "react";
import ReactDOM  from "react-dom/client";

const parent = React.createElement('div',
    { id: "parent" },
    [React.createElement('div', { id: "child" },
        [React.createElement('h1', { id: "h1Tag" }, "Hi This bala"),
        React.createElement('h2', { id: "h2Tag" }, "I'm an h2 tag")] // here we will get an error each props should unique key
    ), React.createElement('div', { id: "child2" },
        [React.createElement('h1', { id: "h1Tag1" }, "I'm an h1 tag"),
        React.createElement('h2', { id: "h2Tag2" }, "I'm an h2 tag")] // here we will get an error each props should unique key
    )]
);


console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);

// const heading = React.createElement(
//     'h1', {id:"heading",xyz:"abc"},
//      "Hello World From React!"
// );
// console.log(heading); //object