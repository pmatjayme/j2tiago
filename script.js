const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está pronto para o desafio?",
        alternativas: [
            {texto: "Sim",
            afirmacao: ""
            },{
            texto: "Lógico",
            afirmacao: ""
            }
        ]
    },
    {
    enunciado: "Você está em frente da porta do castelo. Como você a imagina?",
    alternativas: [
        {texto: "É uma porta simples",
        afirmacao: "A porta representa sua atitude perante novas experiências. Você provavelmente não teme nenhum desafio e tenta a sorte em situações novas sem pensar duas vezes | "
        },{
        texto: "Está coberta por plantas e é um pouco difícil de encontrá-la",
        afirmacao: "A porta representa sua atitude perante novas experiências. Você provavelmente não sabe o que fazer do seu futuro e da sua vida; olhar para frente parece um pouco enevoado e indefinido | "
        },{
        texto: "É uma porta gigante de madeira com detalhes em metal e parece um pouco assustadora",
        afirmacao: "A porta representa sua atitude perante novas experiências. Você provavelmente tem medo do desconhecido e acha difícil sair da sua zona de conforto e tentar novas experiências | "
        }
    ]
    },
    {
    enunciado: "Você passa pela porta do castelo e percebe que não tem uma alma viva lá dentro, está deserto. Qual é a primeira coisa que você vê?",
    alternativas: [
        {texto: "Uma biblioteca gigantesca com todas as paredes cheias de livros",
        afirmacao: "A área dentro do castelo representa como você acredita que os outros te vêem. Você provavelmente pensa que é aquele que apoia os outros, ajudando-os a encontrar respostas para seus problemas | "
        },{
        texto: "Uma lareira enorme com fogo queimando",
        afirmacao: "A área dentro do castelo representa como você acredita que os outros te vêem. Você acha que causa nas pessoas a sensação de acolhimento e entusiasmo | "
        },{
        texto: "Uma enorme sala de jantar com grandes lustres e carpete vermelho",
        afirmacao: "A área dentro do castelo representa como você acredita que os outros te vêem. Você sente que deslumbra as pessoas ao seu redor e que você tem muito para oferecer | "
        },{
        texto: "Um corredor comprido cheio de portas fechadas",
        afirmacao: "A área dentro do castelo representa como você acredita que os outros te vêem. Você sente que é difícil de ser compreendido e os outros têm que se esforçar muito para saber o que se passa dentro de você | "
        }
    ]
    },
    {
        enunciado: "Você olha ao redor e encontra uma escadaria. Você decide subir os degraus. Como essa escadaria se parece?",
        alternativas: [
            {texto: "Imponente e maciça, como se não levasse a lugar algum",
            afirmacao: "A escadaria mostra a imagem que você tem da vida. Você vê a vida como sofrida, cheia de dificuldades | "
            },{
            texto: "É uma grande e impressionante escadaria em espiral",
            afirmacao: "A escadaria mostra a imagem que você tem da vida. Você é uma pessoa romântica | "
            }
    ]
    },
    {
        enunciado: "Após subir as escadas você chega em uma pequena sala que possui só uma janela. Qual o tamanho da janela?",
        alternativas: [
            {texto: "É uma janela normal",
            afirmacao: "A janela é como você se sente agora. Pessoa com demandas e expectativas bem realistas da vida nesse momento. Você percebe que há limitações, mas o futuro está próximo e parece bem claro pra você | "
            },{
            texto: "É uma janela bem pequena, praticamente uma claraboia",
            afirmacao: "A janela é como você se sente agora. Você se sente depressivo e sem alternativas na sua vida. Pode ser que você sinta que não há saída para o que você está vivendo no momento | "
            },{
            texto: "A janela é gigante, quase do tamanho da parede",
            afirmacao: "A janela é como você se sente agora. Você provavelmente se sente invencível, livre e capaz de conseguir o que quer | "
            }
    ]
    },
    {
        enunciado: "Você olha para fora da janela. O que você vê?",
        alternativas: [
            {texto: "Grandes ondas chocando-se furiosamente contra rochas",
            afirmacao: "A vista da janela é uma visão global da sua vida inteira. Vida agitada e instável | "
            },{
            texto: "Uma floresta com neve",
            afirmacao: "A vista da janela é uma visão global da sua vida inteira. Vida isolada e distante de multidões | "
            },{
            texto: "Um vale bem verde",
            afirmacao: "A vista da janela é uma visão global da sua vida inteira. Vida é calma e estável, sem muito stress ou ansiedade | "
            },{
            texto: "Uma cidade pequena e vibrante",
            afirmacao: "A vista da janela é uma visão global da sua vida inteira. Vida toda socializando com várias pessoas | "
            }
    ]
    },
    {
        enunciado: "Você desce as escadas e retorna ao local onde chegou. Você segue em frente e encontra uma porta na parte de trás do castelo. Ao abri-la, vê um pátio. Como é esse lugar?",
        alternativas: [
            {texto: "Cheio de grandes e assustadoras plantas, relva irregular, pedaços de paus quebrados e arame farpado caído",
            afirmacao: "A imagem do pátio é a imagem que você tem em mente sobre o seu futuro. Pessoa pessimista e não têm uma boa visão do futuro!"
            },{
            texto: "Está muito bem mantido, impecável, com inúmeras flores coloridas",
            afirmacao: "A imagem do pátio é a imagem que você tem em mente sobre o seu futuro. Pessoa que sente que o seu futuro será fantástico!"
            },{
            texto: "É uma pequena selva, mas você pode imaginar como ficaria bonito se alguém o limpasse e o arrumasse",
            afirmacao: "A imagem do pátio é a imagem que você tem em mente sobre o seu futuro. Pessoa otimista, que se preocupa em ser capaz de encontrar energia para tomar o controle da própria vida e fazer o futuro melhor!"
            }
    ]
    },
    ];

    let atual = 0;
    let perguntaAtual;
    let historiaFinal = "";

    function mostraPergunta(){
        if(atual >= perguntas.length){
            mostraResultado();
            return;
        }
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntas[atual].enunciado;
        caixaAlternativas.textContent = "";
        mostraAlternativas();
        }
    
    function mostraAlternativas(){
        for(const alternativa of perguntaAtual.alternativas){
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
            caixaAlternativas.appendChild(botaoAlternativas);
        }
    }

    function respostaSelecionada(opcaoSelecionada){
        const afirmacao = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacao + " ";
        atual++;
        mostraPergunta();
    }

    function mostraResultado(){
        caixaPerguntas.textContent = "Sobre sua personalidade...";
        caixaPerguntas.style.color = "#db1313";
        textoResultado.textContent = historiaFinal;
        textoResultado.style.color = "#ffffff";
        caixaAlternativas.textContent = "";
    }

    mostraPergunta();