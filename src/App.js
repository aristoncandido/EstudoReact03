import './components/HellowWorld'
import './App.css';
import Hello from './components/HellowWorld';
import Frase from './components/MaisUmaFrase';
import teste from './components/teste';

function App() {
  

  const nome = "joaquim"

   function multi(a,b){
         
    return a*b;
   }


  return (

          <div className="App">
          <h1>Olá {nome.toLocaleUpperCase()}</h1>
          <p>Meu primeiro App heheh</p>
      
        
          
        


          <Hello></Hello>

        </div>

  );
}

export default App;
