import styles from './Delete.module.css';

import {useState, useEffect} from 'react';
import {Image} from 'cloudinary-react';
import { isAuth } from '../../hoc/isAuth';
import { useHistory } from 'react-router-dom';

import * as petService from '../../services/petService';


const Delete = ({
    match,
}) => {
    const [pet, setPet] = useState({});
    const history = useHistory();

    useEffect( () => {
        petService.getOne(match.params.petId)
        .then(result => {
            setPet(result)
        });

    }, [match]);

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
           await petService.deletePet(pet._id);

           history.push(`/`);
        } catch (error) {
            history.push(`/error`);
        }
    }


   return (
      <form className={styles.deletePetForm} onSubmit={submitHandler}>
            <div className="editPet">
                <div className={styles.formHeadings}>
                    <h3>DELETE PET</h3>
                                   {/* how we get the image */}
                    <Image cloudName="dr2keg2us" publicId={pet.publicImageId} width="200" crop="scale"/>
                </div>
                <div>
                    <label>Pet name : </label>
                    <input type="text" defaultValue={pet.petName} disabled></input>
                </div>
                <div>
                    <label>Breed : </label>
                    <input type="text" defaultValue={pet.breed} disabled></input>
                </div>
                <div>
                    <label>Age : </label>
                    <input type="number" defaultValue={pet.age} disabled></input>
                </div>
                <div>
                    <label>Type : </label>
                    <input type="text" defaultValue={pet.type} disabled></input>
                </div>
                <div className={styles.btnContainer}>
                    <button type="submit"> DELETE </button>
                </div>
            </div>
        </form>
   );
}

const EnhancedComponent = isAuth(Delete);

export default EnhancedComponent;