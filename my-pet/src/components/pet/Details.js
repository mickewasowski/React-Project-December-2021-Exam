import styles from './Details.module.css';

import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import * as petService from '../../services/petService';

const Details = ({
    match,
}) => {
    const [pet, setPet] = useState({});

    useEffect(() => {
        const petId = match.params.petId;

        petService.getOne(petId)
            .then(result => {
                setPet(result)

            });
        
    }, []);

   return (
      <div className="details">
          
                <div className={styles.main}>
                    <div className="left">
                        <div className="petDetails">
                            <h1>Pet Name : {pet.petName} </h1>
                            <h3>Owner : </h3>
                            <div className="card">
                                <p>Breed : {pet.breed} </p>
                                <p>Age : {pet.age} </p>
                                <p>Type : {pet.type} </p>
                            </div>


                            <div className="buttonsContainer">
                                <Link to={`/pets/edit/${pet._id}`} className={styles.editBtn}>Edit</Link>
                                <Link to={`/pets/delete/${pet._id}`} className={styles.delBtn}>Delete</Link>
                            </div>

                        </div>
                    </div>
                    <div >
                        <img className={styles.petImg} src={pet.imageURL} alt="animalPicture"/>
                    </div>
                </div>

      </div>
   );
}

export default Details;