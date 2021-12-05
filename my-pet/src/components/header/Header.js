import styles from './Header.module.css';
import { useAuth } from '../../contexts/UserContext';

import { NavLink} from 'react-router-dom'

function Header(){
    const { user } = useAuth();

    let activeStyles = {backgroundColor: 'white', color: 'black', fontWeight: 'bold', padding: '3px'};

    return (
        <header>
                {
                    user.userId !== ''
                    ? <div className={styles.nameDiv}><h3>Hello, {user.fullName}!</h3></div>
                    : ''
                }
            <div className={styles.navigation}>
                <nav>
                    <ul>
                        <li><NavLink to="/">HOME</NavLink></li>
                       
                       {
                           user.userId !== ''
                           ? <>
                                <li><NavLink activeStyle={activeStyles} to="/pets/myPets">MY PETS</NavLink></li>
                                <li><NavLink activeStyle={activeStyles} to="/pets/all">ALL PETS</NavLink></li>
                                <li><NavLink activeStyle={activeStyles} to="/pets/create">CREATE</NavLink></li>
                                <li><NavLink activeStyle={activeStyles} to="/user/myprofile">MY PROFILE</NavLink></li>
                                <li><NavLink to="/user/logout">LOGOUT</NavLink></li>
                            </>
                           :
                            <>
                                <li><NavLink activeStyle={activeStyles} to="/user/register">REGISTER</NavLink></li>
                                <li><NavLink activeStyle={activeStyles} to="/user/login">LOGIN</NavLink></li>
                            </>
                       }
 
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;