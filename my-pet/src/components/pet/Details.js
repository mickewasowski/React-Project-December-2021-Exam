

function Details(){
   return (
      <div className="details">

          <div class="main">
              <div class="left">
                  <div class="petDetails">

                      <h1>Pet Name : </h1>
                      <h3>Owner : </h3>
                      <div className="card">
                          <p>Breed : </p>
                          <p>Age : </p>
                          <p>Type : </p>
                      </div>


                      <div className="buttonsContainer">
                          <a href="" class="edit-btn">Edit</a>
                          <a href="" class="del-btn">Delete</a>
                      </div>

                  </div>
              </div>
              <div className="right">
                  <img src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Dog-512.png" alt="image"
                      width="200px" height="200px" />
              </div>
          </div>

      </div>
   );
}

export default Details;