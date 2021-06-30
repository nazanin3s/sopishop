import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>

      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
