const baseURL = 'http://localhost:5000';

export function login(username, password) {
   return fetch(`${baseURL}/user/login`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         username,
         password
      })
   })
   .then(res => {return res.json()});
}

export function register(username, fullName, email, password, rePassword){
   return fetch(`${baseURL}/user/register`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         username, 
         fullName, 
         email, 
         password, 
         rePassword
      })
   })
   .then(res => {return res.json()});
}

export function getById(userId){
   return fetch(`${baseURL}/user/${userId}`)
         .then(res => {
               return res.json()});
}

export function changePassword(username, email, newPassword, confirmNewPassword){
   return fetch(`${baseURL}/user/db/changePassword`,{
      method: 'PATCH',
      headers: {
         'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
         username,
         email,
         newPassword, 
         confirmNewPassword
      })
   })
   .then(res => {
      return res.json();
   });
}