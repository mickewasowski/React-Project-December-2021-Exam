import styles from './Register.module.css';

import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { isNotAuth } from '../../hoc/isAuth';

import * as userService from '../../services/userService';

import PopUpPartial from '../common/partials/PopUpNotification';

function Register(){
   const [error, setError] = useState('');
   let history = useHistory();

   const submitHandler = (e) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      let username = formData.get('username');
      let fullName = formData.get('fullName');
      let email = formData.get('email');
      let password = formData.get('password');
      let rePassword = formData.get('rePassword');

      userService.register(username, fullName, email, password, rePassword)
         .then(res => {
            if (res._id) {
               history.push('/user/login');
            }
            else if (res.message.includes("User validation failed")){
               let error = res.message.replace("User validation failed:", '');
               return setError(error);
            }
         })
         .catch(err => {
            if (err.message.includes('Failed to fetch')) {
               setError(err.message);
            }
            console.log(err)
         });
   }

   return(
      <>
            <PopUpPartial error={error} />
            <form className={styles.registerForm} onSubmit={submitHandler}>
                  <div className="register">
                     <div className={styles.formHeadings}>
                        <h3>REGISTER</h3>
                     </div>
                     <div>
                     <label>Username : </label>
                     <input type="text" placeholder="Enter Username" name="username" required />
                  </div>
                  <div>
                     <label>Full Name : </label>
                     <input type="text" placeholder="Enter Full Name" name="fullName" required />
                  </div>
                  <div>
                     <label>Email : </label>
                     <input type="text" placeholder="Enter Email" name="email" required />
                  </div>
                  <div>
                     <label>Password : </label>
                     <input type="password" placeholder="Enter Password" name="password" required />
                  </div>
                  <div>
                     <label>Repeat Password : </label>
                     <input type="password" placeholder="Enter Repeat Password" name="rePassword" required />
                  </div>
                  <div className={styles.btnContainer}>
                     <button id={styles.registerBtn} type="submit">REGISTER</button>
                  </div>
                  </div>
            </form>
      </>
   )
}

const EnhancedComponent = isNotAuth(Register);


export default EnhancedComponent;