// Create three variables that hold references to the list (<ul>), <input>, and <button> elements.

const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

// Create a function that will run in response to the button being clicked.

button.addEventListener("click", function() {
    // Inside the function body, start off by storing the current value of the input element in a variable.
    let inputValue = input.value;

    // Next, empty the input element by setting its value to an empty string — ''.
    input.value = "";

    // Create three new elements — a list item (<li>), <span>, and <button>, and store them in variables.
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listButton = document.createElement("button");

    // Append the span and the button as children of the list item.
    listItem.appendChild(listText);
    listItem.appendChild(listButton);

    // Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.
    listText.textContent = `${inputValue}`;
    listButton.textContent = "Delete";

    // Append the list item as a child of the list.
    list.appendChild(listItem);

    // Attach an event handler to the delete button so that, when clicked, it will delete the entire list item (<li>...</li>).
    listButton.onclick = () => {
        listItem.remove();
    };

    // Finally, use the focus() method to focus the input element ready for entering the next shopping list item.
    input.focus();
});
