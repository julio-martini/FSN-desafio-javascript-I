// Base a ser utilizada
const alunosDaEscola = [{
    nome: "Henrique",
    notas: [],
    cursos: [],
    faltas: 5
}, {
    nome: "Edson",
    notas: [],
    cursos: [],
    faltas: 2
}, {
    nome: "Bruno",
    notas: [10, 9.8, 9.6],
    cursos: [],
    faltas: 0
}, {
    nome: "Guilherme",
    notas: [10, 9.8, 9.6],
    cursos: [{
        nomeDoCurso: "Full Stack",
        dataMatricula: new Date
    }],
    faltas: 0
}, {
    nome: "Carlos",
    notas: [],
    cursos: [],
    faltas: 0
}, {
    nome: "Lucca",
    notas: [10, 9.8, 9.6],
    cursos: [{
        nomeDoCurso: "UX",
        dataMatricula: new Date
    }],
    faltas: 0
}];


// implementação
//função extra para formatar as datas
function data(data) {

    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();

    return dia + '/' + (mes + 1) + '/' + ano;
}


function adicionarAluno(nomeDoAluno) {
    alunosDaEscola.push({
        nome: nomeDoAluno,
        notas: [],
        cursos: [],
        faltas: 0
    })
    console.log(nomeDoAluno + " foi cadastrado com sucesso.")
}


function listarAlunos() {
    console.log("------------------------")
    console.log("Alunos cadastrados")
    console.log("------------------------")
    for (let i = 0; i < alunosDaEscola.length; i++) {
        console.log("Nome:   " + alunosDaEscola[i].nome)
        console.log("Notas:  " + alunosDaEscola[i].notas)
        if (alunosDaEscola[i].cursos.length != 0) {
            for (i2 = 0; i2 < alunosDaEscola[i].cursos.length; i2++) {
                console.log("Cursos: " + alunosDaEscola[i].cursos[i2].nomeDoCurso)
                console.log("Matriculado em: " + data(alunosDaEscola[i].cursos[i2].dataMatricula))
            }
        } else {
            console.log("Cursos: ")
            console.log("Matriculado em:")
        }
        console.log("Faltas: " + alunosDaEscola[i].faltas)
        console.log("-----------------------")
    }
}


function buscarAluno(nomeDoAluno) {
    let encontrou
    console.log("-----------------------")
    for (i = 0; i < alunosDaEscola.length; i++) {
        if (nomeDoAluno == alunosDaEscola[i].nome) {
            encontrou = 1
            console.log("Nome:   " + alunosDaEscola[i].nome)
            console.log("Notas:  " + alunosDaEscola[i].notas)
            console.log("Cursos: " + alunosDaEscola[i].cursos[0].nomeDoCurso)
            console.log("Matriculado em:  " + data(alunosDaEscola[i].cursos[0].dataMatricula))
            console.log("Faltas: " + alunosDaEscola[i].faltas)
            console.log("-----------------------")
        }
    }
    if (encontrou != 1) {
        console.log(nomeDoAluno + " não foi encontrado")
        console.log("-----------------------")
    }
}


function matricularAluno(nomeDoAluno, nomeDoCurso) {
    let encontrou;
    let d = new Date()
    console.log("-----------------------");
    for (i = 0; i < alunosDaEscola.length; i++) {
        if (nomeDoAluno == alunosDaEscola[i].nome) {
            encontrou = 1;
            alunosDaEscola[i].cursos.push({
                nomeDoCurso: nomeDoCurso,
                dataMatricula: d
            });
            console.log("Nome:   " + alunosDaEscola[i].nome)
            console.log("Notas:  " + alunosDaEscola[i].notas)
            console.log("Cursos: " + alunosDaEscola[i].cursos[0].nomeDoCurso)
            console.log("Matriculado em:  " + data(alunosDaEscola[i].cursos[0].dataMatricula))
            console.log("Faltas: " + alunosDaEscola[i].faltas)
            console.log("-----------------------")
        }
    }
    if (encontrou != 1) {
        console.log(nomeDoAluno + " não está cadastrado no sistema.")
        console.log("Por favor cadastre o aluno antes de adicionar o curso.")
        console.log("-----------------------")
    }
}


function aplicarFalta(nomeDoAluno) {
    let encontrou;
    for (i = 0; i < alunosDaEscola.length; i++) {
        if (alunosDaEscola[i].nome == nomeDoAluno) {
            encontrou = 1
            if (alunosDaEscola[i].cursos[0] != undefined) {
                alunosDaEscola[i].faltas++;
                console.log("-----------------------")
                console.log("Falta adicionada com sucesso.")
                console.log("-----------------------")
                console.log(alunosDaEscola[i].nome + " possui " + alunosDaEscola[i].faltas + " faltas")
            } else {
                console.log("-----------------------")
                console.log("A falta não pôde ser adicionada!")
                console.log(nomeDoAluno + " não está cadastrado em nenhum curso.")
                console.log("-----------------------")
            }
        }
    }
    if (encontrou != 1) {
        console.log("-----------------------")
        console.log("A falta não pode ser adicionada, " + nomeDoAluno + " não está cadastrado no sistema.")
        console.log("-----------------------")
    }
}

//adicionei um segundo campo para poder adicionar uma nota ao aluno
function aplicarNota(nomeDoAluno, notaDoAluno) {
    let encontrou;
    for (i = 0; i < alunosDaEscola.length; i++) {
        if (alunosDaEscola[i].nome == nomeDoAluno) {
            encontrou = 1
            if (alunosDaEscola[i].cursos[0] != undefined) {
                alunosDaEscola[i].notas.push(notaDoAluno);
                console.log("-----------------------")
                console.log("Nota " + notaDoAluno + " adicionada com sucesso.")
                console.log("-----------------------")
            } else {
                console.log("-----------------------")
                console.log("A nota não pôde ser adicionada!")
                console.log(nomeDoAluno + " não está cadastrado em nenhum curso.")
                console.log("-----------------------")
            }
        }
    }
    if (encontrou != 1) {
        console.log("-----------------------")
        console.log("A nota não pôde ser adicionada.")
        console.log(nomeDoAluno + " não está cadastrado no sistema.")
        console.log("-----------------------")
    }
}


function aprovarAluno(nomeDoAluno) {
    let encontrou;
    let media = 0;
    for (i = 0; i < alunosDaEscola.length; i++) {
        if (alunosDaEscola[i].nome == nomeDoAluno) {
            encontrou = 1
            if (alunosDaEscola[i].faltas > 3) {
                console.log("-----------------------")
                console.log(nomeDoAluno + " foi reprovado por faltas.")
                console.log("-----------------------")
            } else {
                if (alunosDaEscola[i].cursos[0] != undefined) {
                    media = alunosDaEscola[i].notas.reduce(function (total, numero) {
                        return total + numero
                    }, 0) / alunosDaEscola[i].notas.length

                    if (media >= 7) {
                        console.log("-----------------------")
                        console.log(nomeDoAluno + " foi aprovado com a média " + media.toFixed(2) + ".")
                        console.log("-----------------------")
                    } else {
                        console.log("-----------------------")
                        console.log(nomeDoAluno + " foi reprovado!");
                        console.log("A média de notas " + media.toFixed + " foi insuficiente.")
                        console.log("-----------------------")
                    }
                } else {
                    console.log("-----------------------")
                    console.log("O aluno não pode ser aprovado!")
                    console.log(nomeDoAluno + " não está cadastrado em nenhum curso.")
                    console.log("-----------------------")
                }
            }
        }
    }
    if (encontrou != 1) {
        console.log("-----------------------")
        console.log(nomeDoAluno + " não está cadastrado no sistema.")
        console.log("-----------------------")
    }
}
