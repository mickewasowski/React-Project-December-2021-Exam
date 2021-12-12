import styles from './Edit.module.css';

import {useState, useEffect} from 'react';
import {Image} from 'cloudinary-react';
import { isAuth} from '../../hoc/isAuth';

import * as petService from '../../services/petService';



const Edit = ({
    match,
}) => {
    const [pet, setPet] = useState({});

    useEffect( () => {
        petService.getOne(match.params.petId)
        .then(result => {
            setPet(result)
        });

    }, [match]);

    const submitHandler = async (e) => {
        e.preventDefault();
    }


   return (
      <form className={styles.editPetForm} onSubmit={submitHandler}>
            <div className="editPet">
                <div className={styles.formHeadings}>
                    <h3>EDIT PET</h3>
                                   {/* how we get the image */}
                    <Image cloudName="dr2keg2us" publicId={pet.publicImageId} width="200" crop="scale"/>
                </div>
                <div>
                    <label>Pet name : </label>
                    <input type="text" defaultValue={pet.petName}></input>
                </div>
                <div>
                    <label>Breed : </label>
                    <input type="text" defaultValue={pet.breed}></input>
                </div>
                <div>
                    <label>Age : </label>
                    <input type="number" defaultValue={pet.age}></input>
                </div>
                <div>
                    <label>Type : </label>
                    <input type="text" defaultValue={pet.type}></input>
                </div>
                <div className={styles.btnContainer}>
                    <button type="submit"> EDIT </button>
                </div>
            </div>
        </form>
   );
}

const EnhancedComponent = isAuth(Edit);

export default EnhancedComponent;