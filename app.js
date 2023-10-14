const div = document.querySelector('.container');
const btn = document.querySelector('.btn');

const quiz = [
    {
        question: 'What is JavaScript?',
        correct: 'javascript',
        wrong: ['java sand', 'junaid siraiki']
    },
    {
        question: 'What is HTML?',
        correct: 'Hyper text markup language',
        wrong: ['java sand', 'junaid siraiki']
    },
    {
        question: 'What is CSS?',
        correct: 'Cascading Style Sheets',
        wrong: ['java sand', 'junaid siraiki']
    },
    {
        question: ' What is JavaScript? ',
        correct: 'A programming language',
        wrong: [' A type of snake', 'A markup language']
    } ,
    {
        question: 'Which keyword is used to declare a variable in JavaScript?',
        correct: ' var',
        wrong: [' variable', 'string']
    },
     {
        question: ' How do you write a comment in JavaScript?',
        correct: '. //This is a comment',
        wrong: ['/This is a comment/', '#This is a comment#']
    }, {
        question: 'Which of the following is not a valid JavaScript data type?',
        correct: ' Character',
        wrong: ['String', 'number']
    }, 
];
for (let i = 0; i < quiz.length; i++) {
    const options = quiz[i].wrong.concat(quiz[i].correct)
    div.innerHTML += `
    <div class = "question">
        
                 <p>${quiz[i].question}</p>
                 </div>
                 <div class = "options">
                 <input type="radio" name="question${i}" value="${options[0]}">${options[0]}
                 <input type="radio" name="question${i}" value="${options[1]}">${options[1]}
                 <input type="radio" name="question${i}" value="${options[2]}">${options[2]}
            
                </div>
                
                
         `
}
btn.addEventListener('click',() => {
    let score = 0; 
    for (let i = 0; i < quiz.length; i++) {
        const selectedOption = document.querySelector(`input[name="question${i}"]:checked`)
        if (selectedOption && selectedOption.value === quiz[i].correct) {
            score += +1
        }
    }
    if (score === quiz.length) {
        alert('congragulation! You have passed')
    } else {
        alert(`you got ${score} out of ${quiz.length} question correct`)
    }
})
