import styles from './Login.module.css';

function Login(){
   return( <form>
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
            <button type="submit">LOGIN</button>
         </div>
      </div>
   </form>
   );
}

export default Login;