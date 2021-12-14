import styles from './Edit.module.css';

import {useState, useEffect} from 'react';
import {Image} from 'cloudinary-react';
import { isAuth} from '../../hoc/isAuth';
import { useHistory } from 'react-router-dom';

import * as petService from '../../services/petService';



const Edit = ({
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

        const formData = new FormData(e.currentTarget);
        let petName = formData.get('petName');
        let breed = formData.get('breed');
        let age = formData.get('age');
        let type = formData.get('type');

        try {
            await petService.editPet(pet._id, petName, breed, age, type);

            history.push(`/pets/details/${pet._id}`);
        } catch (error) {
            history.push(`/error`);
        }
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
                    <input type="text" name="petName" defaultValue={pet.petName}></input>
                </div>
                <div>
                    <label>Breed : </label>
                    <input type="text" name="breed" defaultValue={pet.breed}></input>
                </div>
                <div>
                    <label>Age : </label>
                    <input type="number" name="age" defaultValue={pet.age}></input>
                </div>
                <div>
                    <label>Type : </label>
                    <input type="text" name="type" defaultValue={pet.type}></input>
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