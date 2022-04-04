import './App.css';
import NewsList from './components/NewsList'
import * as  ReactBootstrap from 'react-bootstrap';
import SearchBar from './components/searchBar/SearchBar' 
function App() {
  return (
    <div className="App">

  
  <ReactBootstrap.Navbar bg="dark" variant="dark">
    
  <ReactBootstrap.Navbar.Brand href="#home"> NEWS APP</ReactBootstrap.Navbar.Brand>
    <ReactBootstrap.Nav className="me-auto">
      <ReactBootstrap.Nav.Link href="#home">HOME</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#features">SPORTS</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#pricing">HEALTH</ReactBootstrap.Nav.Link>
      
    </ReactBootstrap.Nav>
    <SearchBar placeHolder="Search everything"/>
  </ReactBootstrap.Navbar> 

      <NewsList />

    </div>
  );
}

export default App;
