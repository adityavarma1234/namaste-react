import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => "Aditya Title Component";

const ParagraphComponent = () => (
  <div>
    <p>This is a pargraph</p>
  </div>
);

const number = 10000;

const HeadingComponent = () => (
  <div id="container">
    <h1 id="heading">Aditya Namaste React Functional Component</h1>
    <ParagraphComponent />
    {ParagraphComponent()}
    <h2>{number}</h2>
    <p>{100 + 200}</p>
    <p>{console.log("Hi this is aditya varma")}</p>
    <img src="https://cdn.prod.website-files.com/65fd72d1af536c05fae68e0d/65fd802307e674a8cb966105_Decent%20logos%201.svg"></img>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

const titleRoot = ReactDOM.createRoot(document.getElementById("root_title"));

root.render(<HeadingComponent />);
titleRoot.render(<Title />);
