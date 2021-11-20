import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import * as petService from '../../services/petService';

const Details = ({
    match,
}) => {
    const [pet, setPet] = useState({});

    useEffect(() => {

        petService.getOne(match.params.petId)
            .then(result => {
                setPet(result)

            });
        
    }, []);

   return (
      <div className="details">
          
                <div className="main">
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
                                <Link to={`/pets/edit/${pet._id}`} className="edit-btn">Edit</Link>
                                <Link to={`/pets/delete/${pet._id}`} className="del-btn">Delete</Link>
                            </div>

                        </div>
                    </div>
                    <div className="right">
                        <img src={pet.imageURL} alt="image"
                            width="200px" height="200px" />
                    </div>
                </div>

      </div>
   );
}

export default Details;