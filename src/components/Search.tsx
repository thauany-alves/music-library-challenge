import styles from '../styles/Search.module.css';

export default function Search(){
  return (
    <div className={styles.inputSearch}>
      <span className="material-icons">search</span>
      <input type="text" placeholder="Search playlists, artists or tracks"/>
    </div>
  );
}