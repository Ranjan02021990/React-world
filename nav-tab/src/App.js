import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js';
import MainContent from './components/Content/Main/Main.js';
import NavSectionContent  from './components/Nav-section/Nav-section.js';
function App() {
  return (
    <div className="App">
      <Header/>
      <MainContent/>
      <NavSectionContent/>
    </div>
  );
}

export default App;
