import './styles/App.css';
import Header from './components/UI/Header/Header';
import Menu from './components/UI/Aside/Menu';
import Breadcrumbs from './components/UI/Breadcrumbs/Breadcrumbs';
import Main from './components/UI/Main/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Menu />
        <Breadcrumbs />
        <Main />
      </header>
    </div>
  );
}

export default App;
