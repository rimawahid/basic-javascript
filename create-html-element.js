// create html element

const heading3 = document.createElement("h3");
const text = document.createTextNode("This is heading3");
heading3.appendChild(text);

const myDiv = document.getElementById("myDiv");
myDiv.appendChild(heading3);