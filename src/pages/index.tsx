import Head from 'next/head';
import Playlist from '../components/Playlist';
import Search from '../components/Search';
import Sidebar from '../components/Sidebar';
import Views from '../components/Views';

import styles from '../styles/Home.module.css';

function HomePage() {
  return (
    <div>
      <Head>
        <title>Inicio | Music</title>
      </Head>
      <div className={styles.container}>
        <Sidebar></Sidebar>
        <div className={styles.dashboard}>
          <Search />
          <Playlist />
          <div className={styles.viewsAndTracks}>
            <Views />
          </div>
        </div>
      </div>
      
    </div>
  );
  
}

export default HomePage