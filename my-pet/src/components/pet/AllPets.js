import './partials/PetPartial';
import PetPartial from './partials/PetPartial';

function AllPets(){
   return(
      <div className="allPetsContainer">

         <PetPartial />            
         <PetPartial />            
         <PetPartial />            
         
      </div>
   );
}

export default AllPets;