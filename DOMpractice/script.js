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