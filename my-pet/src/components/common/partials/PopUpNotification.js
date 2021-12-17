import styles from './PopUpNotification.module.css';

import {useState, useEffect} from 'react';

const PopUpPartial = ({
   error
}) => {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      if (error !== '') {
         setIsVisible(true);
      }
   }, [error]);

   const closeNotification = (e) =>{
         setIsVisible(false);
   }
   
   return (
      <div className={isVisible ? styles.mainContainerActive : styles.mainContainerInactive}>
         {  
            error 
            ?  <p>{error}</p>
            : ''
         }
         <a className={styles.closeBtn} href="" onClick={closeNotification} type="button">close</a>
      </div>  
   )
}

export default PopUpPartial;