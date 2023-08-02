/*
Componentes: 
1 - Son funciones
2 - Van en mayuscula
3 - Todos tienen return
4 - Siempre deben retornar un solo elemento
*/

import NavBar from './components/NavBar/NavBar';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Main from './components/Main';

function App() {

  //Vista
  return (
    <>
      <NavBar />
      <Header />
      <ItemListContainer greeting={'¡Bienvenidos!'} />
      <Main />


      <footer>
        <p>Copyright &copy;</p>
      </footer>
    </>
  );
}

export default App;
