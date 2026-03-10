import React from './react/index.js';

const element = React.createElement(
  "div",
  { id: "foo", style: "background: #f0f0f0; padding: 20px;" },
  React.createElement("h1", null, "Hello from My React"),
  React.createElement("p", null, "This is rendered by our own createElement and render functions!"),
  React.createElement("a", { href: "https://github.com" }, "Click me")
);

const container = document.getElementById("root");
React.render(element, container);

console.log("Rendered element:", element);
