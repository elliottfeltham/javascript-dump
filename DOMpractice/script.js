// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// a <p> with red text that says “Hey I’m red!”

const redText = document.createElement("p");
redText.classList.add("redText");
redText.textContent = "Hey I'm red!";
redText.style.color = "red";
container.appendChild(redText);

// an <h3> with blue text that says “I’m a blue h3!”

const blueHeader = document.createElement("h3");
blueHeader.classList.add("blueHeader");
blueHeader.textContent = "I'm a blue h3!";
blueHeader.style.color = "blue";
container.appendChild(blueHeader);

// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”

const box = document.createElement("div");
box.classList.add("box");
box.style.backgroundColor = "pink";
box.style.border = "2px solid black";

const header = document.createElement("h1");
header.textContent = "I'm in a div";

const text = document.createElement("p");
text.textContent = "ME TOO!";

box.appendChild(header);
box.appendChild(text);

container.appendChild(box);
