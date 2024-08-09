const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
    enunciado: "Você está em frente da porta do castelo. Como você a imagina?",
    alternativas: [
        {texto: "É uma porta simples",
        afirmacao: ""
        },{
        texto: "Está coberta por plantas e é um pouco difícil de encontrá-la",
        afirmacao: ""
        },{
        texto: "É uma porta gigante de madeira com detalhes em metal e parece um pouco assustadora",
        afirmacao: ""
        }
    ]
    },
    {
    enunciado: "Você passa pela porta do castelo e percebe que não tem uma alma viva lá dentro, está deserto. Qual é a primeira coisa que você vê?",
    alternativas: [
        {texto: "Uma biblioteca gigantesca com todas as paredes cheias de livros",
        afirmacao: ""
        },{
        texto: "Uma lareira enorme com fogo queimando",
        afirmacao: ""
        },{
        texto: "Uma enorme sala de jantar com grandes lustres e carpete vermelho",
        afirmacao: ""
        },{
        texto: "Um corredor comprido cheio de portas fechadas",
        afirmacao: ""
        }
    ]
    },
    {
        enunciado: "Você olha ao redor e encontra uma escadaria. Você decide subir os degraus. Como essa escadaria se parece?",
        alternativas: [
            {texto: "Imponente e maciça, como se não levasse a lugar algum",
            afirmacao: ""
            },{
            texto: "É uma grande e impressionante escadaria em espiral",
            afirmacao: ""
            }
    ]
    },
    {
        enunciado: "Após subir as escadas você chega em uma pequena sala que possui só uma janela. Qual o tamanho da janela?",
        alternativas: [
            {texto: "É uma janela normal",
            afirmacao: ""
            },{
            texto: "É uma janela bem pequena, praticamente uma claraboia",
            afirmacao: ""
            },{
            texto: "A janela é gigante, quase do tamanho da parede",
            afirmacao: ""
            }
    ]
    },
    {
        enunciado: "Você olha para fora da janela. O que você vê?",
        alternativas: [
            {texto: "Grandes ondas chocando-se furiosamente contra rochas",
            afirmacao: ""
            },{
            texto: "Uma floresta com neve",
            afirmacao: ""
            },{
            texto: "Um vale bem verde",
            afirmacao: ""
            },{
            texto: "Uma cidade pequena e vibrante",
            afirmacao: ""
            }
    ]
    },
    {
        enunciado: "Você desce as escadas e retorna ao local onde chegou. Você segue em frente e encontra uma porta na parte de trás do castelo. Ao abri-la, vê um pátio. Como é esse lugar?",
        alternativas: [
            {texto: "Cheio de grandes e assustadoras plantas, relva irregular, pedaços de paus quebrados e arame farpado caído",
            afirmacao: ""
            },{
            texto: "Está muito bem mantido, impecável, com inúmeras flores coloridas",
            afirmacao: ""
            },{
            texto: "É uma pequena selva, mas você pode imaginar como ficaria bonito se alguém o limpasse e o arrumasse",
            afirmacao: ""
            }
    ]
    },
    ];

    let atual = 0;
    let perguntaAtual;

    function mostraPergunta(){
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntas[atual].enunciado;
        caixaAlternativas.textContent = "";
        mostraAlternativas();
        }
    
    function mostraAlternativas(){
        for(const alternativa of perguntaAtual.alternativas){
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", function(){
            atual++;
            mostraPergunta();
            });
            caixaAlternativas.appendChild(botaoAlternativas);
        }
    }

    mostraPergunta();