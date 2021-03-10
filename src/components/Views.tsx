import styles from '../styles/Views.module.css';

export default function Views(){
  return(
    <div className={styles.container}>
      <h2>Profile Views</h2>
      <div className={styles.views}>
        
        <div className={styles.card}>
          <div className={styles.cardMain}>
            <div className={styles.image}>
              <img src="assets/view1.jpg" alt=""/>
            </div>
            <div className={styles.titleCard}>
              <h4>Jenny Villa</h4>
              <span>3 day ago</span>
            </div>
          </div>
          <p>4 albums</p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardMain}>
            <div className={styles.image}>
              <img src="assets/view2.jpg" alt=""/>
            </div>
            <div className={styles.titleCard}>
              <h4>Aquila</h4>
              <span>3 day ago</span>
            </div>
          </div>
          <p>2 albums</p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardMain}>
            <div className={styles.image}>
              <img src="assets/view3.jpg" alt=""/>
            </div>
            <div className={styles.titleCard}>
              <h4>This is War</h4>
              <span>2 week ago</span>
            </div>
          </div>
          <p>5 albums</p>
        </div>

      </div>
    </div>
  );
}