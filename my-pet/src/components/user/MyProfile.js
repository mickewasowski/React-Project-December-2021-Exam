import styles from './MyProfile.module.css';

function MyProfile(){
   return (
      <div className={styles.myProfile}>
         <img src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
            alt="avatar" width="200px" height="200px" />
         <h3> username </h3>
         <p> pets owned </p>
      </div>
   )
}

export default MyProfile;