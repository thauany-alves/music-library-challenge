import styles from '../styles/Playlist.module.css';

export default function Playlist(){
  return(
    <div className={styles.container}>
      <h2>Featured Playlists</h2>
      <div className={styles.playlistsCards}>
        <div className={styles.card}>
          <img src="assets/playlist1.jpg" alt="Playlist"/>
          <h3>Playlist Name</h3>
          <p>23 tracks</p>
        </div>

        <div className={styles.card}>
          <img src="assets/playlist2.jpg" alt="Playlist"/>
          <h3>Playlist Name</h3>
          <p>23 tracks</p>
        </div>

        <div className={styles.card}>
          <img src="assets/playlist3.jpg" alt="Playlist"/>
          <h3>Playlist Name</h3>
          <p>23 tracks</p>
        </div>

        <div className={styles.card}>
          <img src="assets/playlist4.jpg" alt="Playlist"/>
          <h3>Playlist Name</h3>
          <p>23 tracks</p>
        </div>

        <div className={styles.card}>
          <img src="assets/playlist4.jpg" alt="Playlist"/>
          <h3>Playlist Name</h3>
          <p>23 tracks</p>
        </div>

      </div>
    </div>
  );
}