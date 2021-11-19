
function Create() {
   return (
         <form>
            <div className="createPet">
                <div className="form-headings">
                    <h3>ADD PET</h3>
                </div>
                <div>
                <label>Pet name : </label>
                <input type="text" placeholder="Enter Pet Name" name="petName" required />
            </div><div>
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
                <label>Image URL :</label>
                <input type="text" placeholder="Enter Image URL" name="imageURL" required />
            </div>
            <div className="btn-container">
                <button type="submit">ADD PET</button>
            </div>
            </div>
        </form>
   );
}

export default Create;