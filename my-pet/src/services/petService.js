const baseURL = 'http://localhost:5000';

export function getAll() {
   return fetch(`${baseURL}/pets/all`)
       .then(res => res.json())
}

export const getOne = (id) => fetch(`${baseURL}/pets/${id}`).then(res => res.json());

export const getAnimalEnumTypes = () => fetch(`${baseURL}/pets/db/types`)
                                            .then(res => res.json());

export const createPet = (petName, breed, age, type, publicImageId, userId) => 
            fetch(`${baseURL}/pets/create`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            petName,
                            breed,
                            age,
                            type,
                            publicImageId,
                            userId
                        })
                    })
                    .then(res => {return res.json();});


export const getTopThreeAdded = () => fetch(`${baseURL}`)
                                        .then(res => res.json());


export const editPet = (id, petName, breed, age, type) => fetch(`${baseURL}/pets/${id}`, {
                                            method: 'PATCH',
                                            headers: {
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify({
                                                petName, 
                                                breed, 
                                                age, 
                                                type
                                            })
                                        })
                                        .then(res => {return res.json()});


export const deletePet = (id) => fetch(`${baseURL}/pets/${id}`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                    })
                                    .then(res => {return res.json()});
