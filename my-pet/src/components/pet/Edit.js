import * as petService from '../../services/petService';

import {useState, useEffect} from 'react';


const Edit = ({
    match,
}) => {
    const [pet, setPet] = useState({});

    useEffect( () => {
        petService.getOne(match.params.petId)
        .then(result => {
            setPet(result)
        });

    }, []);

    const submitHandler = async (e) => {
        e.preventDefault();
    }


   return (
      <form action="" onSubmit={submitHandler}>
            <div className="editPet">
                <div className="form-headings">
                    <h3>EDIT PET</h3>
                    <img src={pet.imageURL} alt="image"
                            width="100px" height="100px" />
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
                <div className="btn-container">
                    <button type="submit"> EDIT </button>
                </div>
            </div>
        </form>
   );
}

export default Edit;