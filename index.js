/* busca pelo id=resposta no doc html*/
const elementResposta = document.querySelector("#resposta")
const elementPergunta = document.querySelector("#pergunta")

function pergunta() {
	if(elementPergunta.value == "") {
		alert("Digite sua pergunta!")
		return
	}
	else
		respostaPergunta()
}


function respostaPergunta() {
	
	const respostas = [
	"certeza",
	"não tenho tanta certeza",
	"é decididamente assim",
	"não conte com isso",
	"sem dúvidas",
	"pergunte novamente mais tarde",	
	]

	const totalRespostas = respostas.length;
	const numAleatorio = Math.floor(Math.random() * totalRespostas)
	
	/* innerHTML => mostrar a resposta no #resposta(h3 no html)*/
	elementResposta.innerHTML = respostas[numAleatorio]
	
}
