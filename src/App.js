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