var state = true;
/*
    true = Matematica
    false = Fisica
*/
function Title() {
    const title = document.querySelector('.title');
    if (state) {
        title.innerHTML = "<h1>Trabalho de Matematica</h1>";
    } else {
        title.innerHTML = "<h1>Trabalho de Fisica</h1>";
    }
}

function Sobre() {
    const sobre = document.querySelector("#Sobre p");
    if (state) {
        sobre.innerHTML = "Neste trabalho de matematica, nós do 2º ano falaremos um pouco sobre vetores, o que são, caracteristicas, entre outras coisas. Espero que goste 😁";
    } else {
        sobre.innerHTML = "Neste trabalho de fisica, nós do 2º ano falaremos um pouco sobre o 5G como: O que é? Ele é prejudicial a saude? e outras coisas. Espero que goste 😁";
    }
}

function Equipe() {
    const li = document.getElementsByClassName("ul-li");
    const matematica = [
        "Jaime - O que são vetores?",
        "Yuri - Operações com vetores",
        "Uelerson - Caracteristicas de vetores",
        "Pablo - Exemplos de vetores"
    ];
    const fisica = [
        "Jaime - Ele é prejudicial a saude? Por que?",
        "Yuri - O que é?",
        "Uelerson - Porque é considerado superior ao 4G?",
        "Pablo - Como Funciona?"
    ];
    if (state) {
        for(let pos = 0; pos < li.length; pos++) {
            li[pos].innerHTML = matematica[pos];
        }
    } else {
        for(let pos = 0; pos < li.length; pos++) {
            li[pos].innerHTML = fisica[pos];
        }
    }
}

function Video() {
    const video = document.querySelector("div#Video video");
    const video_src = document.querySelector("source#videoMedia");
    if (state) {
        video.poster = "./Media/posterMatematica.png";
        video_src.src = "./Media/matematica.mp4";
        video.load();
    } else {
        video.poster = "./Media/posterFisica.png";
        video_src.src = "./Media/fisica.mp4";
        video.load();
    }
    
}

function Switch() {
    state = !state
    const btnTxt = document.querySelector("#btnSwitch")
    if (state) {
        document.title = "Matematica"
        btnTxt.value = "Trabalho de Fisica";
    } else {
        document.title = "Fisica"
        btnTxt.value = "Trabalho de Matematica";
    }
    Title();
    Sobre();
    Equipe();
    Video();
    
}