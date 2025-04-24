/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag </h1>
 *          <h2>I'm h2 tag </h2>
 *      </div>
 * 
 * <div id="child2">
 *          <h1>I'm h1 tag </h1>
 *          <h2>I'm h2 tag </h2>
 *      </div>
 * </div>
 */

const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
        "div",
        { id: "children1" },
        [React.createElement("h1", {}, "I'm an h1 tag!"), React.createElement("h2", {}, "I'm an h2 tag")]
    ),
    React.createElement(
        "div",
        { id: "children2" },
        [React.createElement("h1", {}, "I'm an h1 tag!"), React.createElement("h2", {}, "I'm an h2 tag")]
    )]
);

const paragraph = React.createElement("p", {}, "paragraph in react");


// const heading = React.createElement(
//     "h1",
//     { id: "heading", xyz: "abc" },
//     "Hello World from React!"
// );

// console.log(heading);
console.log(parent);


const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

// root.render(heading);
// root.render(paragraph);
root.render(parent);