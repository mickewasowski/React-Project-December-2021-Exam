import styles from './PetPartial.module.css';

import {Link} from 'react-router-dom';
import {Image} from 'cloudinary-react';
import {useAuth} from '../../../contexts/UserContext'


const PetPartial = ({
   pet,
}) => {
   const {user} = useAuth();

   return(
      <div className={styles.petPartial}>
                                             {/* how we get the image */}
            <Image cloudName="dr2keg2us" publicId={pet.publicImageId} width="100" crop="scale"/>
               <h3> {pet.petName}</h3>
               <p> {pet.age}</p>
               <p> {pet.breed}</p>
               
               {
                  // user.userId
                  // ? <Link 
                  // to={`/pets/details/${pet._id}`} 
                  // className={styles.detailsBtn}> Details
                  // </Link>
                  // : ''
                  <Link 
                     to={`/pets/details/${pet._id}`} 
                     className={styles.detailsBtn}> Details
                  </Link>
               }
               
      </div>
   )
}

export default PetPartial;