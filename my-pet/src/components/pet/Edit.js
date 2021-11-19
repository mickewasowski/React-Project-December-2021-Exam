
function Edit(){
   return (
      <form action="">
            <div className="editPet">
                <div className="form-headings">
                    <h3>EDIT PET</h3>
                </div>
                <div>
                <label>Pet name : </label>
                <input type="text"></input>
            </div>
            <div>
                <label>Breed : </label>
                <input type="text"></input>
            </div>
            <div>
                <label>Age : </label>
                <input type="number"></input>
            </div>
            <div>
                <label>Type : </label>
                <input type="text"></input>
            </div>
            <div className="btn-container">
                <button type="submit"> EDIT </button>
            </div>
            </div>
        </form>
   );
}

export default Edit;