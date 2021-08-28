const quizData = [
                {
                    question:'¿Como se llama la hermana de Phoebe?',
                    a:'Ursula',
                    b:'Penelope',
                    c: 'Karen',
                    d:'Christy',
                    correct: 'a'
                },
                {
                    question:'¿Como se llaman la madre de Monica y Ross? ',
                    a:'Judy',
                    b:'Christine',
                    c:'Lenny',
                    d:'Susie',
                    correct:'a'
                },
                {
                    question:'¿Como se llama la cafeteria donde siempre se juntan los protagonistas?',
                    a:'Central Park',
                    b:'Central Perk',
                    c:'Moe´s',
                    d:'Kentucky',
                    correct:'b'
                },
                {
                    question:'¿Como se llamaba el mono que tenia Ross?',
                    a:'Marcel',
                    b:'Toby',
                    c:'Michel',
                    d:'Monkey',
                    correct:'a'
                },
                {
                    question:'¿Con quien se estuvo a punto de casar Rachel en el primer capitulo?',
                    a:'Barry',
                    b:'Larry',
                    c:'George',
                    d:'Peter',
                    correct:'a'
                },
                {
                    question:'¿En que año (ej:1996) se estreno la serie? ',
                    a:'1990',
                    b:'1992',
                    c:'1994',
                    d:'1998',
                    correct:'c'
                },
                {
                    question:'¿En que año fue la temporada final? ',
                    a:'2003',
                    b:'2002',
                    c:'2001',
                    d:'2008',
                    correct:'a'
                },
                {

                    question:'¿Como se llama el esposo de Phoebe en la temporada final?',
                    a:'Joey',
                    b:'David',
                    c:'Mike',
                    d:'Sheldon',
                    correct:'c'
                },
                {
                    question:'¿Cual es el nombre del hijo de Ross? ',
                    a:'Ben',
                    b:'Clark',
                    c:'Mark',
                    d:'Toby',
                    correct:'a'
                },
                {
                    question:'¿En que temporada se casaron Monica y Chandler?',
                    a:'7',
                    b:'10',
                    c:'8',
                    d:'5',
                    correct:'a'
                },
                {
                    question:'¿Cual es el segundo nombre de Chandler? ',
                    a:'Muriel',
                    b:'Manny',
                    c:'Moe',
                    d:'Munch',
                    correct:'a'
                },
                {
                    question:'¿Quien fue el primer beso de Monica?',
                    a:'Joey',
                    b:'Chandler',
                    c:'Gunther',
                    d:'Ross',
                    correct:'d'
                },
                {
                    question:'¿Quien es Princesa Consuela Banana Hammock?',
                    a:'Phoebe',
                    b:'Amy',
                    c:'Monica',
                    d:'Rachel',
                    correct:'a'
                },
                {
                    question:'¿Cuantas hermanas tiene Joey?',
                    a:'No tiene',
                    b:'2',
                    c:'7',
                    d:'5',
                    correct:'c'
                },
                {
                    question:'¿En que temporada Rachel tiene a su hija?',
                    a:'10',
                    b:'6',
                    c:'9',
                    d:'8',
                    correct:'d'
                },

];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Contestaste ${score}/${quizData.length} preguntas.</h2>
                
                <button onclick="location.reload()">Reiniciar</button>
            `;
        }
    }
});