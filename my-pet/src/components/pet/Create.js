import styles from './Create.module.css';

import {useAuth} from '../../contexts/UserContext';
import {isAuth} from '../../hoc/isAuth';

import {uploadImage} from '../../services/cloudinaryService';
import * as petService from '../../services/petService';
import { useHistory } from 'react-router-dom';


function Create() {
    let history = useHistory();

    const {user} = useAuth();

    const submitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        let petName = formData.get('petName');
        let breed = formData.get('breed');
        let age = formData.get('age');
        let type = formData.get('type');
        let imageFile = formData.get('imageFile');

        const cloudForm = new FormData();
        cloudForm.append('file', imageFile);
        cloudForm.append('upload_preset', 'g6y3jaem');
        cloudForm.append('cloud_name', 'dr2keg2us');

        try {
            let publicImageId = await uploadImage(cloudForm);

            console.log(publicImageId);

            petService
            .createPet(petName, breed, age, type, publicImageId, user.userId)
            .then(res => {
                console.log(res);
                if (res._id) {
                    history.push(`/pets/details/${res._id}`);
                }
            });
        } catch (error) {
            history.push('/failed');
        }
    }


   return (
         <form onSubmit={submitHandler} className={styles.createPetForm}>
            <div className="createPet">
                <div className={styles.formHeadings}>
                    <h3>ADD PET</h3>
                </div>
                <div>
                <label>Pet name : </label>
                <input type="text" placeholder="Enter Pet Name" name="petName" required />
                </div>
                <div>
                    <label>Breed : </label>
                    <input type="text" placeholder="Enter Breed" name="breed" required />
                </div>
                <div>
                    <label>Age : </label>
                    <input type="number" placeholder="Enter Age" name="age" required />
                </div>
                <div>
                    <label>Type : </label>
                    <input type="text" placeholder="Enter Type" name="type" required />
                </div>
                <div>
                    <label>Image file upload:</label>
                    <input type="file" name="imageFile"/>
                </div>

                <div className={styles.btnContainer}>
                    <button type="submit">ADD PET</button>
                </div>
            </div>
        </form>
   );
}

const EnhancedComponent = isAuth(Create);

export default EnhancedComponent;