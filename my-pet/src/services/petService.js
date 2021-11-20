const baseURL = 'http://localhost:5000';

export function getAll() {
   return fetch(`${baseURL}/pets/all`)
       .then(res => res.json())
}

export const getOne = (id) => fetch(`${baseURL}/pets/${id}`).then(res => res.json());
