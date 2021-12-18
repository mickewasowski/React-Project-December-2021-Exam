import {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {UserContext} from '../../contexts/UserContext';
import { isNotAuth } from '../../hoc/isAuth';

import styles from './Login.module.css';

import * as userService from '../../services/userService';

import PopUpPartial from '../common/partials/PopUpNotification';

function Login(){
   const [error, setError] = useState('');

   let history = useHistory();
   const { login } = useContext(UserContext);

   const submitHandler = async (e) => {
      
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      let username = formData.get('username');
      let password = formData.get('password');

      userService.login(username, password)
         .then(res => {
            console.log(res);
            if (res.userId) {

               setError('');
               login(res.userId, res.username, res.email, res.fullName);
               history.push('/');
            }else if(res.message){
               setError(res.message);
            }else{
               throw Error(res);
            }
         })
         .catch(err => {
            if (err.message.includes("Failed to fetch")) {
               setError(err.message);
           }
            console.log(err)
         });
   }

   return( 
      <>
         <PopUpPartial error={error} />
         <form onSubmit={submitHandler} className={styles.loginForm}>
            <div className="login">
                  <div className={styles.formHeadings}>
                     <h3>LOGIN</h3>
                  </div>
                  <div>
                     <label>Username : </label>
                     <input type="text" placeholder="Enter Username" name="username" required />
                  </div>
               <div>
                  <label>Password : </label>
                  <input type="password" placeholder="Enter Password" name="password" required />
               </div>
               <div className={styles.btnContainer}>
                  <button id={styles.loginBtn} type="submit">LOGIN</button>
               </div>
            </div>
         </form>
   </>
   );
}

const EnhancedComponent = isNotAuth(Login);

export default EnhancedComponent;