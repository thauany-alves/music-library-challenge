import styles from '../styles/Tracks.module.css';

export default function Tracks(){
  return(
    <div className={styles.container}>
      <h2>Tracks</h2>
      <div className={styles.tracks}>
        <div className={styles.cardTrack}>
          <div className={styles.cardImage}>
            <img src="assets/track1.jpg" alt=""/>
          </div>
          <h6>Mahara Bon</h6>
          <p>Sexy in Paris</p>
        </div>

        <div className={styles.cardTrack}>
          <div className={styles.cardImage}>
            <img src="assets/track2.jpg" alt=""/>
          </div>
          <h6>Mahara Bon</h6>
          <p>Sexy in Paris</p>
        </div>

        <div className={styles.cardTrack}>
          <div className={styles.cardImage}>
            <img src="assets/track3.jpg" alt=""/>
          </div>
          <h6>Mahara Bon</h6>
          <p>Sexy in Paris</p>
        </div>

        <div className={styles.cardTrack}>
          <div className={styles.cardImage}>
            <img src="assets/track4.jpg" alt=""/>
          </div>
          <h6>Mahara Bon</h6>
          <p>Sexy in Paris</p>
        </div>

        

        {/* <div className={styles.cardTrack}>
          <div className={styles.cardImage}>
            <img src="assets/track4.jpg" alt=""/>
          </div>
          <h6>Mahara Bon</h6>
          <p>Sexy in Paris</p>
        </div> */}
      </div>
    </div>
  );
}