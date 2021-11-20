import {Link} from 'react-router-dom'

function Header(){
   return (
      <header>
        <div className="navigation">
            <nav>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="">MY PETS</Link></li>
                    <li><Link to="/pets/all">ALL PETS</Link></li>
                    <li><Link to="/user/myprofile">MY PROFILE</Link></li>
                    <li><Link to="/user/register">REGISTER</Link></li>
                    <li><Link to="/user/login">LOGIN</Link></li>
                    <li><Link to="">LOGOUT</Link></li>
                </ul>
            </nav>
        </div>
    </header>
   );
}

export default Header;