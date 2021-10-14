
import './App.css';
import { Route , BrowserRouter as Router , Switch } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import { Container } from '@material-ui/core';
import Movies from './Pages/Movies/Movies';
import Search from './Pages/Search/Search';
import Home from './Pages/Home/Home';


function App() {
  return (
    <>
    <Header/>
    
    <div className='app'>
    <Container>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/movies' component={Movies}></Route>
        <Route path='/search' component={Search}></Route>
      </Switch>
    </Container>

    </div>
    <SimpleBottomNavigation/>
    </> 
    
    
  );
}

export default App;
