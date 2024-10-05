let gameName = "Hangman Game";
document.title = gameName;

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
});


// Object Of Words + Caregories
// const words = {
//     programming: ["php", "javacript", "go", "scala", "fortran", "r", "mysql", "python"],
//     movies: ["Inception", "Interstellar", "Oppenheimer", "Parasite", "Whiplash", "Memento", "Coco", "Up"],
//     celebrities: ["Albert Einstein", "Donald Trump", "Tom Cruise", "Taylor Swift", "Bill Gates", "Will Smith", "Cristiano Ronaldo", "Queen Elizabeth II", "Leonardo DiCaprio", "Joe Biden"],
//     countries: ["Algeria", "France", "United Stats", "Brazil", "Colombia", "Spain", "Portugal", "Egypt", "Germany", ""]
// }
const words = {
    programming: [
      "JavaScript",
      "Python",
      "Java",
      "Ruby",
      "PHP",
      "Go",
      "Swift",
      "Kotlin",
      "TypeScript",
      "Rust",
      "Scala",
      "Haskell",
      "Lisp",
      "Prolog",
      "Perl",
      "R",
      "SQL",
      "HTML",
      "CSS",
      "jQuery",
      "React",
      "Angular",
      "Vue",
      "Node.js",
      "Express.js",
      "Django",
      "Flask",
      "Rails"
    ],
    movies: [
      "The Godfather",
      "Pulp Fiction",
      "The Dark Knight",
      "12 Angry Men",
      "Schindler's List",
      "The Matrix",
      "Inception",
      "Fight Club",
      "Forrest Gump",
      "The Silence of the Lambs",
      "The Green Mile",
      "The Good, the Bad, and the Ugly",
      "The Dark Knight Rises",
      "The Lord of the Rings The Two Towers",
      "The Lord of the Rings The Return of the King",
      "The Departed",
      "The Usual Suspects",
      "Saving Private Ryan",
      "American Beauty",
      "Gladiator",
      "Life is Beautiful",
      "The Pianist",
      "The Truman Show",
      "The Sixth Sense",
      "The Lord of the Rings The Hobbit",
    ],
    celebrities: [
      "Leonardo DiCaprio",
      "Meryl Streep",
      "Brad Pitt",
      "Angelina Jolie",
      "Tom Hanks",
      "Robert Downey Jr.",
      "Scarlett Johansson",
      "Dwayne Johnson",
      "Jennifer Lawrence",
      "Chris Evans",
      "Emma Watson",
      "Ryan Reynolds",
      "Gal Gadot",
      "Chris Hemsworth",
      "Margot Robbie",
      "Will Smith",
      "Jennifer Aniston",
      "Matthew McConaughey",
      "Nicole Kidman",
      "George Clooney",
      "Julia Roberts",
      "Johnny Depp",
      "Natalie Portman",
      "Keanu Reeves",
      "Charlize Theron",
      "Denzel Washington",
      "Sandra Bullock",
      "Tom Cruise",
      "Jennifer Lopez",
      "Justin Bieber"
    ],
    countries: [
      "United States",
      "China",
      "India",
      "Indonesia",
      "Brazil",
      "Pakistan",
      "Nigeria",
      "Bangladesh",
      "Russia",
      "Japan",
      "Mexico",
      "Germany",
      "Philippines",
      "Vietnam",
      "Egypt",
      "Iran",
      "Turkey",
      "Thailand",
      "South Africa",
      "Colombia",
      "Argentina",
      "Canada",
      "Australia",
      "Spain",
      "France",
      "United Kingdom",
      "Italy",
      "South Korea",
      "Ukraine"
    ]
};

// Get Random Property

let allKeys = Object.keys(words);

// Random Number Depend On Keys Length
let randomPropertyNumber = Math.floor(Math.random() * allKeys.length);

// Category
let randomPropertyName = allKeys[randomPropertyNumber];

// Category Words
let randomPropertyValue = words[randomPropertyName];

// Random Number Depend On Category Words
let randomValueNumber = Math.floor(Math.random() * randomPropertyValue.length);

// The Chosen Word
let randomValue = randomPropertyValue[randomValueNumber];
console.log(randomValue);
// Set Category Info
document.querySelector(".game-info .category span").innerHTML = randomPropertyName;


// Leters Guess Container
let letterGuessContainer = document.querySelector(".letters-guess");

// Convert Chosen Word To Array
let arrayOfLetters = Array.from(randomValue.toLowerCase());

// Create Spans Depend On Word
arrayOfLetters.forEach(letter => {

    // Create Empty Span
    let emptySpan = document.createElement("span");

    // If Letter Is Space
    if (letter === ' ') {
        emptySpan.className = "with-space";
    }

    // Append Span To Letters Guess COntainer
    letterGuessContainer.appendChild(emptySpan);
});

// Select Guess Spans
let guessSpans = document.querySelectorAll(".letters-guess span");

// Set Wrong Attempts
let wrongAttempts = 0;

// Slect The Draw Element
let theDraw = document.querySelector(".hangman-draw")

// Handle Clicking On Letters
document.addEventListener("click", (e) => {
    // Set Game Status
    let theStatus = false;
    if (e.target.className === "letter-box") {

        e.target.classList.add("clicked");

        // Get Clicked Letter
        let theClickedLetter = e.target.innerHTML.toLowerCase();

        arrayOfLetters.forEach((wordLetter, index) => {


            // Check If The Word Contains The Chosen Letter
            if (theClickedLetter === wordLetter) {

                // Set Status To Correct
                theStatus = true;

                guessSpans[index].innerHTML = theClickedLetter;
                guessSpans.forEach(span => {
                    if (span.innerHTML.length === 1) {
                        span.classList.add("full");
                    }
                })
            }
        });
        
        let counter = 0;
        guessSpans.forEach(span => {
            if (span.innerHTML.length === 1) {
                counter++;
            }
        });

        if (counter === arrayOfLetters.length) {

            endGame(true);

        }
        
        // If letter Is Wrong
        if (theStatus !== true) {

            // Increase The Wrong Attempts
            wrongAttempts++;

            // Add Class Wrong On The Draw Element
            theDraw.classList.add(`wrong-${wrongAttempts}`);

            // Play Fail Sound
            document.getElementById("fail").play();



            if (wrongAttempts === 8) {

                endGame(false);

            }

        } else {

            // Play Sucess Sound
            document.getElementById("sucess").play();

        }

    }
});

// End Game Function

function endGame(bool) {
    // Disable Letters Container
    lettersContainer.classList.add("finished")

    // Container Div
    let containerDiv = document.querySelector(".container");

    // Create Popup Div
    let div = document.createElement("div");

    let popupDivText = document.createElement("div");

    let divText;
    if (bool) {
        // Div Text Node
        divText.innerHTML = `Victory after ${wrongAttempts} tries, Well done!`;
    } else {
        divText = document.createTextNode(`Game Over, The Word Was ${randomValue}`);
    }

    popupDivText.appendChild(divText);
    popupDivText.className = "popup-text"
    div.appendChild(popupDivText);
    div.className = "popup";

    containerDiv.appendChild(div);


    // Scroll To The Bottom Of The Page So That The Uses Sees The Message
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
    });

}
