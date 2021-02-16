
// declaração
// function statement
function createPhrases () {
// Criar um aplicativo de frases motivacionais
console.log('Estude seu merda')
console.log('Pra tras nem pra pega impulso')
console.log('seu bosta')
}
//execute / run/ call / invoke the function
createPhrases()
createPhrases()
createPhrases()

//FUNCTIONS É UM LIQUIDIFICADOR

function fazerSuco (fruta1, fruta2) {
    return fruta1 + fruta2
}
const copo = fazerSuco('banana', 'maçã')
console.log(copo)

//function scoped
let subject 

function createThink(subject) {
    subject = 'Create Video'
    return subject
}

console.log(study)
console.log(createThink(subject))
console.log(study)

//function hoisting
saMyName()

function saMyName() {
    console.log('abraao')
}

//arrow function

const sayMyName = () => {
    console.log('Abraão')
}

//callback function
function sayMyName(name) {
    console.log(name)
}
sayMyName(
    () => {
        console.log("Callback") //Função que é passada como argumento
    }
)

//Função construrora
function Person(name) {
    this.name = name
}
const Eu = new Person('Abraão')
//Expressão New
//Cria um Objeto
//this keyword

