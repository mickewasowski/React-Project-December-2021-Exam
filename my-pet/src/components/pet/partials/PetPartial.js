import styles from './PetPartial.module.css';

import {Link} from 'react-router-dom';

const PetPartial = ({
   pet,
}) => {
   return(
      <div className={styles.petPartial}>
               <img src={pet.imageURL} alt="petPicture"
                  width="100px" height="100px" />
               <h3> {pet.petName}</h3>
               <p> {pet.age}</p>
               <p> {pet.breed}</p>
               
               <Link 
               to={`/pets/details/${pet._id}`} 
               className={styles.detailsBtn}> Details
               </Link>
      </div>
   )
}

export default PetPartial;