import './App.css';
import SearchAppBar from './components/SearchAppBar';
import { Route, BrowserRouter as Router ,Switch} from  "react-router-dom";
import Home from './components/Home';
import Article from './components/Article';
import ArticleAnon from './components/ArticleAnon';
import Demo from './components/demo';

function App() {
  return (
    <div className="App">
      {/* <SearchAppBar /> */}
      <Router>
          {/* <IndexRoute component = {Home} /> */}
          <Switch>
            {/* <Route path = "/article" exact  component = {Article} /> */}
            <Route path = "/article/*" component = {ArticleAnon} />
            <Route path = "/Demo/" component = {Demo} />
            <Route path = "/" exact component = {Home}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
