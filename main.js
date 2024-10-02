// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";

// Get Array From Letters
let lettersArray = Array.from(letters);

let lettersContainer = document.querySelector(".letters");

// Generate Letters
lettersArray.forEach(letter => {
    
    // Create Span
    let span = document.createElement("span");

    // Create Letters Text Node
    let theLetter = document.createTextNode(letter);

    // Append The Letter To Span
    span.appendChild(theLetter);

    // Add Class On Span
    span.className = 'letter-box';

    // Append Span To The Letters Container
    lettersContainer.appendChild(span);
})