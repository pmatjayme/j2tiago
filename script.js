const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
    enunciado: "Você está em frente da porta do castelo. Como você a imagina?",
    alternativas: [
    "É uma porta simples",
    "Está coberta por plantas e é um pouco difícil de encontrá-la",
    "É uma porta gigante de madeira com detalhes em metal e parece um pouco assustadora"
    ]
    },
    {
    enunciado: "Você passa pela porta do castelo e percebe que não tem uma alma viva lá dentro, está deserto. Qual é a primeira coisa que você vê?",
    alternativas: [
    "Uma biblioteca gigantesca com todas as paredes cheias de livros",
    "Uma lareira enorme com fogo queimando",
    "Uma enorme sala de jantar com grandes lustres e carpete vermelho",
    "Um corredor comprido cheio de portas fechadas"
    ]
    },
    {
        enunciado: "Você olha ao redor e encontra uma escadaria. Você decide subir os degraus. Como essa escadaria se parece?",
        alternativas: [
        "Imponente e maciça, como se não levasse a lugar algum",
        "É uma grande e impressionante escadaria em espiral"
    ]
    },
    {
        enunciado: "Após subir as escadas você chega em uma pequena sala que possui só uma janela. Qual o tamanho da janela?",
        alternativas: [
        "É uma janela normal",
        "É uma janela bem pequena, praticamente uma claraboia",
        "A janela é gigante, quase do tamanho da parede"
    ]
    },
    {
        enunciado: "Você olha para fora da janela. O que você vê?",
        alternativas: [
        "Grandes ondas chocando-se furiosamente contra rochas",
        "Uma floresta com neve",
        "Um vale bem verde",
        "Uma cidade pequena e vibrante"
    ]
    },
    {
        enunciado: "Você desce as escadas e retorna ao local onde chegou. Você segue em frente e encontra uma porta na parte de trás do castelo. Ao abri-la, vê um pátio. Como é esse lugar?",
        alternativas: [
        "Cheio de grandes e assustadoras plantas, relva irregular, pedaços de paus quebrados e arame farpado caído",
        "Está muito bem mantido, impecável, com inúmeras flores coloridas",
        "É uma pequena selva, mas você pode imaginar como ficaria bonito se alguém o limpasse e o arrumasse"
    ]
    },
    ];

    let atual = 0;
    let perguntaAtual;

    function mostraPergunta(){
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntas[atual].enunciado;
        }
    mostraPergunta();