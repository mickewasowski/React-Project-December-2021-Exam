import {useState, useEffect} from 'react';
import { useAuth } from '../../contexts/UserContext';

import * as userService from '../../services/userService';

import styles from './MyProfile.module.css';

function MyProfile(){
   const {user} = useAuth();

   const [userInfo, setUserInfo] = useState({});
   const [pets, setPets] = useState({});

   useEffect(() => {
      userService.getById(user.userId)
         .then(res => {
            setUserInfo(res);
            setPets(res.myPets);
         });
   }, []);

   return (
      <div className={styles.myProfile}>
         <img src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
            alt="avatar" width="200px" height="200px" />
         <h3>Username: {userInfo.username}</h3>
         <h4>Full name: {userInfo.fullName}</h4>
         <p>Pets owned: {pets.length}</p>
      </div>
   )
}

export default MyProfile;