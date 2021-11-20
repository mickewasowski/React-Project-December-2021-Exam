import {Route, Switch} from 'react-router-dom';

import Header from './components/header/Header';
import AllPets from './components/pet/AllPets';
import Create from './components/pet/Create';
import Details from './components/pet/Details';
import Edit from './components/pet/Edit';

import Register from './components/user/Register';
import Login from './components/user/Login';
import MyProfile from './components/user/MyProfile';


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/pets/all" exact component={AllPets}/>
        <Route path="/pets/create" exact component={Create}/>
        <Route path="/pets/details/:petId" exact component={Details}/>
        <Route path="/pets/edit/:petId" exact component={Edit}/>
        <Route path="/user/register" exact component={Register}/>
        <Route path="/user/login" exact component={Login}/>
        <Route path="/user/myprofile" exact component={MyProfile}/>

      </Switch>
      
    </div>
  );
}

export default App;
