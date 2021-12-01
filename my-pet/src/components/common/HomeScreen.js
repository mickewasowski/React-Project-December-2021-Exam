import styles from './HomeScreen.module.css';

import * as petService from '../../services/petService';
import PetPartial from '../pet/partials/PetPartial';

import {useState, useEffect} from 'react';

const HomeScreen = () => {
      const [ topPets, setTopPets ] = useState([]);

      useEffect(() => {
         petService.getTopThreeAdded()
            .then(result => {
               setTopPets(result)
            });
      }, []);

   return (
         <div >
            <h3>LATEST ADDED</h3>

            <div className={styles.topPetsAdded}>
               
               {
                  topPets.length > 0 
                  ? topPets.map(x => 
                     
                     <PetPartial 
                        key={x._id}
                        pet={x}
                     />
                     )
                     : <p>No pets added yet.</p>
               }

            </div>
                     
            
         </div>
   );
   
};

export default HomeScreen;