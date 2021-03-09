import styles from '../styles/Profile.module.css';

export default function Profile(){
  return(
    <div className={styles.profile}>
      <div className={styles.profileImage}>
        <img src="assets/profile.jpg" alt=""/>
      </div>
      <div className={styles.profileName}>
        <h3>Thauany Araujo</h3>
        <a role="a">
          Edit profile 
          <span className="material-icons">
            settings
          </span>
        </a>
      </div>
    </div>
  );
}