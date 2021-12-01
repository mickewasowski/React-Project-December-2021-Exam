import styles from './Register.module.css';

function Register(){
   return(
      <form>
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
               <button type="submit">REGISTER</button>
            </div>
            </div>
      </form>
   )
}

export default Register;