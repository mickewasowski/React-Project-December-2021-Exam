
import styles from './NotFound.module.css';

const NotFound = () =>{

   return (
      <div className={styles.container}>
         <p className={styles.code}>404</p>
         <p className={styles.text}>Oops...something went wrong!</p>
      </div>
   )
}

export default NotFound;