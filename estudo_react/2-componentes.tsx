//Introdução ao JSX e aos componentes

//JSX (Javascript XML) é uma extensão de sintaxe JS que nos permite escrever codigos semelhantes a HTML em nossos arquivos JS.

//Fornece uma maneira concisa e familiar de criar elementos React, e renderizá-los no DOM. Basicamente, ela une os dois (HTML e JS)

//Exemplo de um React Jsx

import React from "react";

export default function App() {
  return <div></div>;
}

//JSX pode conter tags HTML, componentes React e expressões React.

//Todo componente React deve ter um elemento pai que agrupa todos os outros elementos

//Caso queira usar um elemento pai, como por exemplo, por exemplo  uma <div>, podemos usar os fragments

//Os fragments permitem agrupar uma lista de elementos sem a adição de um elemento DOM como a propria <div>

//Os elementos filhos devem ser encapsulados por <></>

const element = () => {
  return (
    <>
      <h2>title</h2>
    </>
  );
};

//Expressoes JS no componentes

//JSX permite que sejam colocadas expressões JS dentro de chaves {}. Isso permite gerar conteudo dinamicamente ou acessar variaveis dentro de um codigo JSX.

const name = "John";
const element2 = () => {
  return <div>{name}</div>;
};

//Componentes

//No React, os componentes são os blocos de construção de nossas interfaces de usuário.

//Eles encapsulam a funcionalidade e a aparencia de uma parte especifica da UI. Os componentes nos permite  dividir nossos aplicativos em partes menores e gerenciaveis.

const MyComponent = () => {
  return "code";
};
export function AnotherComponent() {
  return "code";
}

//Usando os componentes

//Uma vez criado, podemos usa-los em outros componentes React.

//Os nomes dos arquivos TSX devem começar com letra maiuscula.

//Para usar, devemos importar o componente para o local e depois aciona-lo da seguinte forma:

export function App2() {
  return (
    <>
      <MyComponent />
      <AnotherComponent />
    </>
  );
}
