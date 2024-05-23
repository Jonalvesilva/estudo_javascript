//DOM (Document Object Model)

//Com o DOM, o Javascropt pode acessar todos os elementos HTML

//Basicamente o DOM é um objeto padrão que representa tudo dentro de um elemento HTML (metodos, propriedades e eventos)

//O DOM possui o objeto chamado document. Ele representa toda a web page. Assim, é possivel acessar qualquer elemento HTML atraves dele

//Podemos usá-lo para acesso e manipulação do HTML

//Encontrando HTML

document.getElementById(id); //Encontra um elemento HTML pelo seu id
document.getElementsByClassName(classname); //Encontra elementos através da classe
document.getElementsByTagName(tagname); //Ebncontra elementos através da tags

//Mudando HTML

const element = document.getElementById(id);
element.innerHTML = "Novo teste"; // Muda o texto do HTML escolhido
element.attribute = "novo valor"; // Substituir o atribute pelo atributo que deseja alterar
element.style.property = "novo valor"; //Substituir property pela propriedade que for alterar
element.setAttribute(attribute, value); //Existem também a alteração por metodos

//Adicionando ou Removendo Elementos

document.createElement("elementHtml"); //Cria um elemento HTML
document.appendChild("elementHtml"); //Adiciona um elemento HTML
document.removeChild("elementHTML"); // Remove um elemento HTML

//Alguns dos objetos HTML mais usados

document.body; // Retorna o elemento <body>
document.baseURI; //Retorna a base URI de um documento
document.cookie; //Retorna o cookie;
document.documentElement; //Retorna o <html> elemento
document.head; //Retorna o <head> elemento
document.URL; //Retorna a URL do documento;
