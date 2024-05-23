//Forms

//Um form submit pode ser feita no JS

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Nome é requisitado");
    return false;
  }
}

<form name="myform" action="/" onsubmit="return validateForm()">
  <input type="text" name="fname"></input>
  <button type="submit">Submit</button>
</form>;

//Neste exemplo, estamos manipulando uma form atraves do DOM. É possivel acessar a form atraves do document.forms e passando seus valores

//Eventos

//O JS pode ser executado quando um evento ocorre, quando um usuario clica em um elemento HTML, por exemplo

//No DOM temos alguns eventos pré definidos e eles executam algo que for passado

//Por exemplo, um deles é o onclick, que executa algo quando o elemento for clicado.

<input onclick="()=>{executa alguma coisa}"></input>;

//Existem varios deles, eis os principais

onclick(); //Quando clica no elemento
onchange(); //Quando o elemento muda
onload(); //Quando o usuario entra na pagina
oninput(); //Quando o usuario digita algo no input
onmouseenter(); //Quando o cursor do mouse entra no elemento
onmouseleave(); //Quando o cursor do mouse sai do elemento

//Também podemos criar nosso proprio evento. Para isso, usamos o addEventListener

document.getElementById(id).addEventListener("click", () => {});
document.getElementById(id).addEventListener("mouseleave", () => {});
