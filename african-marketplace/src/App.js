import './styles/App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import ProtectedRoute from './helpers/ProtectedRoute';

import SignUpForm from './components/signup';
import Login from './components/login'
import ItemForm from './components/items';



function App() {

  const logout = () => {
    axios.post(null)
      .then(res => {
        console.log("Logged out!");
        localStorage.removeItem('token');
        window.location.href = "/";
    })
  };

  return (
    <Router>
       <div className="App">
       <header className="App-header">
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">SignUp</Link>
              </li>
              <li>
                <Link to="/" onClick={logout}>Logout</Link>
              </li>
              <li>
                <Link to="/listings">Listings</Link>
              </li>
            </ul>
        </header>
          <Switch>
            <ProtectedRoute exact path="/listings" component={ItemForm} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUpForm} />
          </Switch>
      </div>
    </Router>   
  );
}

export default App;
