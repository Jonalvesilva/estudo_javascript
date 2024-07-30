//Redux- Biblioteca JAvascript para Gerenciamento de Estado Global

//Centralizado, Debugavel e Flexivel

//Possui grande ecossistema de addons

//Redux Toolkit - Abordagem oficial para escrever logicas Redux. Ele inclui o Redux e os pacotes essenciais para a construção das logicas

/* 

*/

//Instalação

//Devemos instalar o toolkit: npm install@reduxjs/toolkit

//Depois iniciamos um projeto Next com ele imbutido: npx create-next-app --example with-redux my-app

//Depois instalamos o nucleo redux: npm install redux

//Metodo usado: npm install react-redux redux

//Apos create-next

/* 

*/

//Comecando no Redux (setup Basico)

// 1 - Na pasta app, crie uma pasta chamada redux;
// 2 - Dentro dela criamos o arquivo store.ts (deixar em branco) e o rootReducer.ts
// 3 - No rootReducer.ts, importamos o combineReducers do redux e criamos: export const rootReducer = combineReducers({})
// No objeto vazio, serão incluidos as reducers posteriormente
// Na pasta redux, cada reducer dever ter uma pasta com nome da entidade e dentro um reducer.ts
// 4 - Criamos a entidade user e dentro o reducer.ts. Depois criamos o userReducer: export const userReducer = ()=>{}
// Os reducers são funçoes. Por enquanto deixamos ela em branco.
// 5 - No rootReducer.ts, importamos o userReducer e adicionamos ao combineReducers
// 6 - No store, importamos o createStore do redux e o rootReducer
// 7 - Criamos a store: export store = createStore(rootReducer)
// 8 - No layout.tsx, importamos o Provider do react-redux e o store. Depois encapsulamos nossa app com o provider e passando o store como prop.

/* 

*/

//Trabalhando no UserReducer

// 1 - Dentro do userReducer, devemos criar um initialState e dentro dele um currentUser:null
// 2 - Vamos começar a prencher a função userReducer. Uma função reducer recebe dois parametros (state=initialState, action)
// 3 - Dentro da função vamos criar o if para monitorar o action.type. O nome da type deve ser composto por entidade/evento ('user/login')
// 4 - Mesmo que o reducer não entre nos if, sempre deve retornar o state
// 5 - Deve retirar o metadata do RootLayout e adicionar o use client para o Provider funcionar
// 6 - Voce pode adicionar um metadata dinamico
// 7 - Devemos alterar a logica do reducer, colocando um switch ao invés de if e o retorno receber o payload da action:

/* 
export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "user/login":
      return { currentUser: action.payload };
    case "user/logout":
      return { currentUser: null };
    default:
      return state;
  }
};
*/

/* 

*/

//Acessando os Dados do UserReducer

// 1 - No componente que for usado, importe o useSelector do react-redux
// 2 - Acessamos o reducer assim: const {currentUser} = useSelector((rootReducer:any)=>rootReducer.userReducer)
// Note que estamos chamando o userReducer da rootReducer e spread o seu valor.

/* 

*/

//Despachando a action para o UserReducer

// 1 - Importarmos o useDispatch do react-redux e criamos a função dispatch: const dispatch = useDispatch();
// 2 - No dispatch passamos a action (obj), contendo o type e o payload (dados): dispatch({type:'user/login', payload:(dados)})
