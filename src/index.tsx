import React from "react";
import ReactDOM from "react-dom";
import Todo from "./views/Todo";

// If I were using routing or Apollo this is where I would wrap / make the main app, if not using Next.JS
const App = () => <Todo />;

ReactDOM.render(<App />, document.getElementById("root"));
