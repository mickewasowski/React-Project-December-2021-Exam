import {Link, NavLink} from 'react-router-dom'

function Header(){


   return (
      <header>
        <div className="navigation">
            <nav>
                <ul>
                    <li><NavLink activeStyle={{backgroundColor: 'white', color: 'black', fontWeight: 'bold', padding: '3px'}} to="/">HOME</NavLink></li>
                    <li><NavLink activeStyle={{backgroundColor: 'white', color: 'black', fontWeight: 'bold', padding: '3px'}}to="">MY PETS</NavLink></li>
                    <li><NavLink activeStyle={{backgroundColor: 'white', color: 'black', fontWeight: 'bold', padding: '3px'}} to="/pets/all">ALL PETS</NavLink></li>
                    <li><NavLink activeStyle={{backgroundColor: 'white', color: 'black', fontWeight: 'bold', padding: '3px'}} to="/user/myprofile">MY PROFILE</NavLink></li>
                    <li><NavLink activeStyle={{backgroundColor: 'white', color: 'black', fontWeight: 'bold', padding: '3px'}} to="/user/register">REGISTER</NavLink></li>
                    <li><NavLink activeStyle={{backgroundColor: 'white', color: 'black', fontWeight: 'bold', padding: '3px'}} to="/user/login">LOGIN</NavLink></li>
                    <li><NavLink activeStyle={{backgroundColor: 'white', color: 'black', fontWeight: 'bold', padding: '3px'}} to="">LOGOUT</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
   );
}

export default Header;