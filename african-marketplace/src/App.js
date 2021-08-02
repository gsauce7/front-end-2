import './styles/App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ProtectedRoute from './helpers/ProtectedRoute';
import TokenRoute from './helpers/TokenRoute';

import SignUpForm from './components/signup';
import Login from './components/login'
import ItemForm from './components/ItemForm';
import HomePage from './components/Homepage';
import ItemList from './components/ItemList';
import Item from './components/Item';
import ItemContext from './context/ItemContext';
import { axiosWithAuth } from './helpers/axiosWithAuth';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useEffect, useState } from 'react';


function App() {
  const [items, setItems] = useLocalStorage("items", [])
  const [locations, setLocation] = useLocalStorage("locations", [])

  const [tempItem, setTempItem] = useLocalStorage("itemsTemp", [])

  const getLocationData = () => {
    axiosWithAuth().get('/locations')
      .then(res => {setLocation(res.data)
          //console.log(res.data)
      })
      .catch(err => console.log(err));
  }

  const getData = ()=>{
    axiosWithAuth().get('/items')
        .then(res => {setTempItem(res.data)
        //console.log(res.data)
      })
        .catch(err => console.log(err));
  }

  const getSaleData = ()=>{
    axiosWithAuth().get('/items-for-sale')
        .then(res => {setItems(res.data)
        //console.log(res.data)
      })
        .catch(err => console.log(err));
  }

  useEffect(()=>{
    getLocationData()
  },[])

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = "/";
  };

  return (
    <Router>
       <div className="App">
       <header className="App-header">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
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
            <Route exact path="/" component={HomePage} />
            <TokenRoute path="/login" component={Login} />
            <Route path="/signup" component={SignUpForm} />

            <ItemContext.Provider value={{items, getData, setItems, tempItem, setTempItem, locations, getLocationData, getSaleData}}>
              <ProtectedRoute exact path="/listings" component={ItemList} />
              <ProtectedRoute path="/addItem" component={ItemForm} />
              <ProtectedRoute path="/details" component={Item} />
            </ItemContext.Provider>

            

          </Switch>
      </div>
    </Router>   
  );
}

export default App;
