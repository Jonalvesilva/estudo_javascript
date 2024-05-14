//Node é uma runtime Javascript que permite rodarmos Javascript no lado do servidor;

//Para rodarmos um arquivo Javascript atraves do servidor usamos o seguinte no terminal

//node nomeDoArquivo.js

//Podemos passar argumentos através do terminal e pega-los da seguinte forma:

//Para passar pelo servidor: node nomeDoArquivo.js arg1 arg2 arg...

//Para pega-los quando rodamos o arquivo:
const nameaArg = process.arg[indexDoArgumento];

//Env: Variaveis de ambiente

//Env contém pares de chave/valor. Geralmente são informações sigilosas. São arquivos .env onde colocamos estes pares para ficar de forma sigilosa

//São declarados da seguinte forma dentro do arquivo env:
NOME_CHAVE = VALOR_CHAVE; //VALOR_CHAVE pode ser qualquer informação

//Para usar as env deve instalar o dotenv ou outra dependência de acesso. Neste caso instalaremos o dotenv

//Deve se importar o config do dotenv e definir o local do arquivo env. Seguir as configurações da documentção

//Para acessar os pares do arquivo env no arquivo em execução:
const variavel = process.env.NOME_CHAVE;

//O node possui um gerenciador de dependencias chamando npm

//Com ele, é possivel instalar e usar dependencias de terceiros em um projeto

//O npm guarda as dependencias e registra as dependencias instaladas em um arquivo chamado package.json

//De inicio, para se usar o npm no projeto devemos inicializa -lo

//Para isso rodamos na pasta raiz do projeto o comando: npm init

//Para uma inicialização mais rapida usamos: npm init -Y
