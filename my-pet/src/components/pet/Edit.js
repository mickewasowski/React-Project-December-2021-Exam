import styles from './Edit.module.css';

import {useState, useEffect} from 'react';
import {Image} from 'cloudinary-react';
import { isAuth} from '../../hoc/isAuth';
import { useHistory } from 'react-router-dom';

import * as petService from '../../services/petService';

import PopUpPartial from '../common/partials/PopUpNotification';

const Edit = ({
    match,
}) => {
    const [error, setError] = useState('');
    const [types, setTypes] = useState({});
    const [pet, setPet] = useState({});
    const history = useHistory();

    useEffect(() => {
        petService.getAnimalEnumTypes()
            .then(res => {
                setTypes(res);
            })
            .catch(err => {
                if (typeof(err) == "object") {
                    return console.log(err);
                }
                setError(err)
            });
    },[types]);

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

        petService.editPet(pet._id, petName, breed, age, type)
            .then(res => {
                if (res._id) {
                    history.push(`/pets/details/${res._id}`);
                }else if(res.message.includes("Validation failed")){
                    let error = res.message.replace('Validation failed: ', '');
                    setError(error); 
                }else{
                    throw Error(res.message);
                }
            })
            .catch(err => {
                if (err.message.includes("Failed to fetch")) {
                    setError(err.message);
                }
                console.log(err);
            });
    }


   return (
       <>
            <PopUpPartial error={error} />
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
                        <select name="type" className={styles.dropdown}>
                        {
                            types.length > 0 
                            ? types.map(x => 
                                
                                <option value={x}>{x}</option>
                                )
                                : ''
                        }
                    </select>
                    </div>
                    <div className={styles.btnContainer}>
                        <button type="submit"> EDIT </button>
                    </div>
                </div>
            </form>
        </>
   );
}

const EnhancedComponent = isAuth(Edit);

export default EnhancedComponent;