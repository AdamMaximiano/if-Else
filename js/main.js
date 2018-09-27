/* 
AND (&&) e OR (II)

o AND (&&). todas as condições devem ser verdadeiras. 
o OR (||). Só uma condição basta ser verdadeiro. 




var pontos = prompt("Diga Seu Palpite");
// vitoria >= 30 && <= 40

if (
	((pontos>=30)&&(pontos<=40))
	||
	((pontos>=50)&&(pontos<=60))
	)
	{
	alert("Voce Acertou")
} else{
	alert("Voce Errou")
}

*/

var campoNota = document.querySelector(".campoNota");
var envioNota = document.querySelector(".envioNota");
var res = "Situação do Aluno";

document.getElementById("resultado").innerHTML = res;

function conferirNota() {
	var nota = Number(campoNota.value);
	if (nota>=60) {
		document.getElementById("resultado").classList.add("aprovado");
		document.getElementById("resultado").classList.remove("reprovado","recuperacao");
		res="Aprovado";
	} else if(nota>=40){
		res="Recuperação";
		document.getElementById("resultado").classList.add("recuperacao");
		document.getElementById("resultado").classList.remove("aprovado","reprovado");
	}else{
		res="Reprovado";
		document.getElementById("resultado").classList.add("reprovado");
		document.getElementById("resultado").classList.remove("aprovado","recuperacao");
	}
	document.getElementById("resultado").innerHTML = res;
}




/*var v1 = prompt("Digite a Nota do Aluno");
var res;

if (v1 >= 60){
	res = "Aprovado";
	document.getElementById("nota").classList.add("aprovado");

}else if(v1 >= 40){
	res = "Recuperação";
	document.getElementById("nota").classList.add("recuperacao");	
}else{
	res = "Reprovado";
	document.getElementById("nota").classList.add("reprovado");	
}

document.getElementById("nota").innerHTML = res;	
*/