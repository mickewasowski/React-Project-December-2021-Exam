import {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/UserContext';
import {isAuth} from '../../hoc/isAuth';

import * as userService from '../../services/userService';

import styles from './MyProfile.module.css';

function MyProfile(){
   const {user} = useAuth();
   const history = useHistory();

   const [userInfo, setUserInfo] = useState({});
   const [pets, setPets] = useState({});

   useEffect(() => {
      userService.getById(user.userId)
         .then(res => {
            setUserInfo(res);
            setPets(res.myPets);
         })
         .catch(() => {
            history.push('/user/login');
         });
   }, [user]);

   return (
      <div className={styles.myProfile}>
         <div>
            <img src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
               alt="avatar" width="200px" height="200px" />
            <h3>Username: {userInfo.username}</h3>
            <h4>Full name: {userInfo.fullName}</h4>
            <p>Pets owned: {pets.length}</p>
         </div>
         <div className={styles.btnContainer}>
            <Link to="/user/changePassword" className={styles.updatePassBtn}>Update Password</Link>
         </div>
      </div>
   )
}

const EnhancedComponent = isAuth(MyProfile);

export default EnhancedComponent;