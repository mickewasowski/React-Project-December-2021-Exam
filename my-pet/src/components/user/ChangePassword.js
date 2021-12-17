import styles from './ChangePassword.module.css';

import {useState} from 'react';

import {useHistory} from 'react-router-dom';

import {useAuth} from '../../contexts/UserContext';
import {isAuth} from '../../hoc/isAuth';
import * as userService from '../../services/userService';

import PopUpPartial from '../common/partials/PopUpNotification';

function ChangePassword(){
   const [error, setError] = useState('');
   const history = useHistory();
   const {user} = useAuth();

   const onSubmitHandler = async (e) =>{
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const oldPass = formData.get('oldPass');
      const newPass = formData.get('pass');
      const rePass = formData.get('rePass');

         await userService.changePassword(user.username, oldPass, newPass, rePass)
         .then(res => { 
            console.log(res);
            if (res.includes('Failed to fetch')) {
               setError(res.message);
            }
            else if(!res.userId){
               setError(res);
            }
            else if(res.userId){
               history.push(`/user/myProfile`); 
            }
            else{
               throw Error(res);
            }
         })
         .catch(err => {console.log(err);});     
   }

      return (
         <>
         <PopUpPartial error={error}/>
            <form onSubmit={onSubmitHandler} className={styles.updatePass}>
               <div className={styles.formHeadings}>
                  <h3>Update password</h3>
               </div>
               <div>
                  <label>Current password:</label>
                  <input type="password" name="oldPass"/>
               </div>
               <div>
                  <label>New Password:</label>
                  <input type="password" name="pass"/>
               </div>
               <div>
                  <label>Confirm new password:</label>
                  <input type="password" name="rePass"/>
               </div>
               <div>
                  <input type="submit"/>
               </div>
            </form>
         </>
      )
}

const EnhancedComponent = isAuth(ChangePassword)

export default EnhancedComponent;