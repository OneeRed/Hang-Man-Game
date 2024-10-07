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
//     movies: ["Inception", "Interstellar", "Oppenheimer", "Parasite", "Whiplash", "Memento", "Coco", "Up"],
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
        "C",
        "SQL",
        "HTML",
        "CSS",
        "jQuery",
        "React",
        "Angular",
        "Vue",
        "Node js",
        "Express js",
        "Django",
        "Flask",
        "Rails"
    ],
    movies: [
        "Inception",
        "Interstellar", 
        "Oppenheimer",
        "The Godfather",
        "Pulp Fiction",
        "The Dark Knight",
        "Twelve Angry Men",
        "The Matrix",
        "Inception",
        "Fight Club",
        "Forrest Gump",
        "The Green Mile",
        "The Departed",
        "The Usual Suspects",
        "Saving Private Ryan",
        "American Beauty",
        "Gladiator",
        "Life is Beautiful",
        "The Pianist",
        "The Truman Show",
        "The Sixth Sense",
    ],
    celebrities: [
        "Joe Biden",
        "Bill Gates",
        "Albert Einstein",
        "Leonardo DiCaprio",
        "Brad Pitt",
        "Angelina Jolie",
        "Tom Hanks",
        "Robert Downey Jr",
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
        "Justin Bieber",
        "Lionel Messi",
        "Cristiano Ronaldo",
        "Donald Trump",
        "Riyad Mahez",
        "Islam Slimani",
        "Mr Beast",
        "I Show Speed",
        "Inox Tag",
        "Chris Bumstead",
        "Ronnie Coleman",
        "Taylor Swift"   
    ],
    countries: [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Botswana",
        "Brazil",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo",
        "Costa Rica",
        "Cote d'Ivoire",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Korea",
        "North Macedonia",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Palestine",
        "Qatar",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Lucia",
        "Samoa",
        "San Marino",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Korea",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Vatican City",
        "Venezuela",
        "Vietnam",
        "Yemen",
        "Zambia",
        "Zimbabwe"
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
arrayOfLettersNotSpace = arrayOfLetters.filter((el) => {
    return el != ' ' ? true : false;
});

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
let guessSpansNotSpace = document.querySelectorAll(".letters-guess span:not(.with-space)");

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
        guessSpansNotSpace.forEach(span => {
            if (span.innerHTML.length === 1) {
                counter++;
            }
        });

        if (counter === arrayOfLettersNotSpace.length) {

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

    let divText = document.createElement("div");
    if (bool) {
        // Div Text Node
        if (wrongAttempts === 1 || wrongAttempts == 0) {

            divText.innerHTML = `Victory after <span>${wrongAttempts}</span> trie, Well done!<i class="fa-solid fa-rotate"></i>`;

        } else {

            divText.innerHTML = `Victory after <span>${wrongAttempts}</span> tries, Well done!<i class="fa-solid fa-rotate"></i>`;

        }
    } else {

        divText.innerHTML = `Game Over, The Word Was <span>${randomValue}</span><i class="fa-solid fa-rotate"></i>`;
        
    }

    popupDivText.appendChild(divText);
    popupDivText.className = "popup-text"
    div.appendChild(popupDivText);
    div.className = "popup";

    containerDiv.appendChild(div);

    reloadBtn = document.querySelectorAll("i");
    reloadBtn[1].onclick = function () {
        window.location.reload();
        window.scrollTo({
            top: 0
        });

    }


    // Scroll To The Bottom Of The Page So That The Uses Sees The Message
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
    });

}

reloadBtn = document.querySelector("i");
reloadBtn.onclick = function () {
    window.location.reload();
}