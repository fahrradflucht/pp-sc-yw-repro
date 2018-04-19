const input = require('./lib/button/demo');

const React = require("react");
const ReactDOMServer = require("react-dom/server");
const styled = require("styled-components");

const sheet = new styled.ServerStyleSheet();
const component = React.createElement(input.default);
const html = ReactDOMServer.renderToString(sheet.collectStyles(component));
const head = sheet.getStyleTags();

console.log(html, head);