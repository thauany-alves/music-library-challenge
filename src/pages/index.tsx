import Head from 'next/head';
import Sidebar from '../components/Sidebar';

function HomePage() {
  return (
    <div>
      <Head>
        <title>Inicio | Music</title>
      </Head>
      <Sidebar></Sidebar>
    </div>
  );
  
}

export default HomePage