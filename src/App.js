import './App.css';
import Blog from './components/screens/Blog';
import Nav from './components/screens/Nav';
import Single_page from './components/screens/Single_page';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() { 
  return (
    <Router>
    <>
        <Nav />
        <Switch>
          <Route path="/" exact component={Blog} />
          <Route path="/article/:id" component={Single_page} />
        </Switch>
    </>
    </Router>
  )
}

export default App;
