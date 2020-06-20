var answer= document.getElementById("answer")
var answergif= document.getElementById("image")

var xhr = new XMLHttpRequest();
var resposta = xhr.open(
    "GET",
    "https://yesno.wtf/api"
  );
  xhr.send();
  //ESCUTAR A REPOSTA DA REQUISIÇÃO E POR NUM ELEMENTO DO HTML OU IMPRIMIR NO CONSOLE
  
  xhr.addEventListener("load", function () {
    //nos retorna a resposta em JSON e depois converte para objeto
    var resposta = xhr.responseText;
    var resposta1 = JSON.parse(resposta);
    console.log(resposta);
    var respostaout= resposta1["answer"];
    var respostaout2= resposta1["image"];
    answer.innerHTML=respostaout;
    answergif.innerHTML=`<img src=" ${respostaout2} ">`;

}
);






