//Promises

//As promises são eventuais falhas ou conclusões de operações assincronas

//As promises tem 3 estados: pendente, resolvida e rejeitada

//Quando é resolvida, significa que a operacao assincrona foi um sucesso e um valor é retornado

//Quando é rejeitada, significa que houve falha na operação assincrona falhou e um motivo (erro) é retornado

//Exemplo de Promise

const minhaPromessa = new Promise((resolve, reject) => {
  // Simulando uma operação assíncrona
  setTimeout(() => {
    const sucesso = true;
    if (sucesso) {
      resolve("Operação concluída com sucesso!");
    } else {
      reject(new Error("Algo deu errado!"));
    }
  }, 2000); // Simula uma operação que leva 2 segundos
});

//Depois de criar uma promessa, você pode encadear chamadas usando o then(), quando a operação for resolvida. Neste caso pegamos o valor dela no then para exec um console

minhaPromessa.then((resultado) => {
  console.log("Promessa resolvida:", resultado);
});

//Tambem podemos fazer isso com error atraves do catch(), quando a operação for rejeitada

minhaPromessa.catch((error) => {
  console.log("Promessa rejeitada:", error);
});

//Como uma função assincrona retorna uma promise, ela pode ser usada com then e o catch

async function novaFuncao() {}

novaFuncao.then();
novaFuncao.catch();
