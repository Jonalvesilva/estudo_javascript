//Async Javascript

//No entanto, há muitas situações em que você precisa lidar com operações que levam tempo para serem concluídas

//Como fazer solicitações de rede, ler arquivos ou esperar por eventos de usuário

//Em vez de bloquear o thread principal e esperar por essas operações, JavaScript usa programação assíncrona para continuar executando outras tarefas enquanto espera pelas operações assíncronas serem concluídas.

//Para isso usamos o async/await

//Async: Essa palavra-chave é usada para definir uma função como assíncrona. Ela sempre retorna uma promise (promessa de um valor);

//Await: Só pode ser usada dentro de uma função async. Ela pausa a execução da função até que a promessa seja resolvida. Isso permite que o código pareça síncrono.

// Função assíncrona que utiliza o async/await
async function minhaFuncaoAssincrona() {
  console.log("Iniciando...");

  // Usando await para pausar a execução até que a promessa seja resolvida
  const resultado = await simularOperacaoAssincrona();

  console.log(resultado);

  console.log("Concluído!");
}

// Chamando a função assíncrona
minhaFuncaoAssincrona();
