import {Link, NavLink} from 'react-router-dom'

function Header(){
    let activeStyles = {backgroundColor: 'white', color: 'black', fontWeight: 'bold', padding: '3px'};

   return (
      <header>
        <div className="navigation">
            <nav>
                <ul>
                    <li><NavLink activeStyle={activeStyles} to="/">HOME</NavLink></li>
                    <li><NavLink activeStyle={activeStyles}to="">MY PETS</NavLink></li>
                    <li><NavLink activeStyle={activeStyles} to="/pets/all">ALL PETS</NavLink></li>
                    <li><NavLink activeStyle={activeStyles} to="/pets/create">CREATE</NavLink></li>
                    <li><NavLink activeStyle={activeStyles} to="/user/myprofile">MY PROFILE</NavLink></li>
                    <li><NavLink activeStyle={activeStyles} to="/user/register">REGISTER</NavLink></li>
                    <li><NavLink activeStyle={activeStyles} to="/user/login">LOGIN</NavLink></li>
                    <li><NavLink activeStyle={activeStyles} to="">LOGOUT</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
   );
}

export default Header;