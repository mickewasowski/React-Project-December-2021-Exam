import {createContext, useContext, useState} from 'react';

export const UserContext = createContext();

const initialState = {
   userId: '',
   username: '',
   fullName: '',
   email: '',
};

export const UserInfoProvider = ({
   children,
}) => {

   const [user, setUser] = useState(initialState);

   const login = (userId, username, email, fullName) => {
      setUser({
         userId,
         username,
         fullName,
         email
      });
   }

   return (
      <UserContext.Provider value={{user, login}}>
         {children}
      </UserContext.Provider>
   );
}

export const useAuth = () => {
   const authState = useContext(UserContext);

   return authState;
}