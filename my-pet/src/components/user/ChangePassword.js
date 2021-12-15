import styles from './ChangePassword.module.css';

import {useHistory} from 'react-router-dom';

import {useAuth} from '../../contexts/UserContext';
import {isAuth} from '../../hoc/isAuth';
import * as userService from '../../services/userService';

function ChangePassword(){
   const history = useHistory();
   const {user} = useAuth();

   const onSubmitHandler = async (e) =>{
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const oldPass = formData.get('oldPass');
      const newPass = formData.get('pass');
      const rePass = formData.get('rePass');

         await userService.changePassword(user.username, oldPass, newPass, rePass)
         .then(res => { history.push(`/user/myProfile`); })
         .catch(err => {console.log(err);});     
   }

      return (
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
      )
}

const EnhancedComponent = isAuth(ChangePassword)

export default EnhancedComponent;