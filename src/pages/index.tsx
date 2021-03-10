import Head from 'next/head';
import Playlist from '../components/Playlist';
import Search from '../components/Search';
import Sidebar from '../components/Sidebar';

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
          {/* <Playlist /> */}
        </div>
      </div>
      
    </div>
  );
  
}

export default HomePage