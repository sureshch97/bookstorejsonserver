import React ,{useEffect} from 'react';
import{BrowserRouter as Router ,Route,Switch } from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/home';
import about from './components/pages/about';
import contact from './components/pages/contact';
import addbook from './components/pages/books/addbook';
import singlebook from './components/pages/books/singlebook';
import Notfound from './components/pages/Notfound'

import Store from './store'
import { Provider } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'


const App = () => {
  useEffect(() => {

    M.AutoInit();
  })
  return (

    <Provider store={Store}>
      <div className="App">
      <Router>
       <Navbar/>
       <div className="container">
       <Switch>
         <Route exact path="/" component={Home}></Route>
         <Route exact path="/about" component={about}></Route>
         <Route exact path="/contact" component={contact}></Route>
         <Route exact path='/singlebook/:id' component={singlebook}></Route>
         <Route exact path="/addbook" component={addbook}></Route>
         <Route exact component={Notfound}></Route>
        
       </Switch>
       </div>
      </Router>
      
    </div>
    </Provider>
    
  );
}

export default App;
