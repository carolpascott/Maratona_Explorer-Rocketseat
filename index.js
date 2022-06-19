const respostas = [
	"certeza",
	"não tenho tanta certeza",
	"é decididamente assim",
	"não conte com isso",
	"sem dúvidas",
	"pergunte novamente mais tarde",
	"sim, definitivamente",
	"minha resposta é não",
	"você pode contar com isso",
	"melhor não te dizer agora",
	"a meu ver, sim",
	"minhas fontes dizem não",
	"provavelmente",
	"não é possível prever agora",
	"prespectiva boa",
	"as prespectivas não são tão boas",
	"sim",
	"concentre-se e pergunte novamente",
	"sinais apontam que sim"	
]

// busca pelo id=resposta no doc html
const respostaElement = document.querySelector("#resposta")
const perguntaElement = document.querySelector("#pergunta")
const botaoElement	= document.querySelector("#botao") 

function fazerPergunta() {
	
	if(perguntaElement.value == "") {
		alert("Digite sua pergunta!")
		return
	}
	botaoElement.setAttribute("disabled", true)

	// gerar num aleatorio
	const totalRespostas = respostas.length;
	const numAleatorio = Math.floor(Math.random() * totalRespostas)
	// variavel com a pergunta feita dentro de uma <div> (html)
	const pergunta = "<div>" + perguntaElement.value + "</div>"

	// innerHTML => mostrar a resposta no #resposta(h3 no html)
	respostaElement.style.opacity = 1;
	respostaElement.innerHTML = pergunta + respostas[numAleatorio]
	
	// sumir resposta apos 3s e habilita novamente botao
	setTimeout(function() {
		respostaElement.style.opacity = 0;
		botaoElement.removeAttribute("disabled")
	}, 3000)	
}
