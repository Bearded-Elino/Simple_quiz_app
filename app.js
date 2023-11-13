console.log("script is working!")

let sportsQuiz = [
    {
        question: 'what country does Cristiano Ronaldo play for',
        options: ["Portugal", "France", "Nigeria"],
        answer: "Portugal",
    },

    {
        question: 'which country won the fifa world cup in 2022',
        options: ["Ghana", "Brazil", "Argentina"],
        answer: "Argentina",
    },

    {
        question: 'which country is Jay Jay Okocha from',
        options: ["South Africa", "Nigeria", "Uruguay"],
        answer: "Nigeria"
    },
];

let dataView = document.querySelector (".data-view");

function quizApp () {
    let quizArray = sportsQuiz.map((quiz) => {
        return `<div class="row d-flex my-3 gx-2">
        <div class="left-section col-6 bg-danger">
          <p class="Question" style="font-size: 30px;">${quiz.question}</p>


          <select name="" id="" class="w-100 py-2 mb-2" onchange="updateRightSection(this, '${quiz.answer}')">
            <option value="" disabled selected>Select an answer</option>
        ${quiz.options.map((option) => {
        return `<option value="${option}">${option}</option>`;
        })}
        </select>

        </div>

        <div class="right-section col-6 bg-primary shadow">
            <p class="selected">Selected answer: <span id="selectedAnswer"></span></p>
            <p id="status"></p>
            <p>correct answer</p>
        </div>
      </div>`
    });

    dataView.innerHTML = quizArray.join(" ");

    let selects = document.querySelectorAll('select');

    selects.forEach((select) => {
        select.addEventListener('change', (event) => {
        let selectValue = event.target.value;
        console.log(selectValue);

        
        let selectedElement = select.closest(".row").querySelector(".selected");
        selectedElement.textContent = `Selected answer: ${selectValue}`;
    });
});

}

function updateRightSection(selectElement, correctAnswer) {
    let selectedAnswer = selectElement.value;
    let rightSection = selectElement.closest(".row").querySelector(".right-section");
    let selectedAnswerElement = rightSection.querySelector(".selected span"); 
    let statusElement = rightSection.querySelector("#status");


    if (!selectedAnswerElement || !statusElement) {
        console.error("Error: Unable to find elements in HTML structure.");
        return;
    }

    selectedAnswerElement.textContent = selectedAnswer;

    if (selectedAnswer === correctAnswer) {
        statusElement.textContent = "Correct!";
        statusElement.style.color = "green";
    } else {
        statusElement.textContent = "Incorrect. Try again.";
        statusElement.style.color = "red";
    }
}




// quizApp();
// let input = document.querySelector('.input');

// function selectMe(event) {
//     event.target.value
// }

document.addEventListener("DOMContentLoaded", function () {
    quizApp();
});

