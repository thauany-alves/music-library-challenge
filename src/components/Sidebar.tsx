import styles from '../styles/sidebar.module.css';
import Profile from './Profile';

function Sidebar(){
  return(
    <div className={styles.container}>
      <Profile />
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="">
              <span className="material-icons">grid_view</span>
              Overview
            </a>
          </li>
          <li>
            <a href="">
              <span className="material-icons">feed</span>
              News
            </a>
          </li>
          <li>
            <a href="">
              <span className="material-icons">queue_music</span>
              Playlists
            </a>
          </li>
          <li>
            <a href="">
              <span className="material-icons">travel_explore</span>
              Discover
            </a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="">
              <span className="material-icons">dashboard</span>
              Dashboard
            </a>
          </li>
          <li>
            <a href="">
              <span className="material-icons">chat_bubble_outline</span>
              Messages
            </a>
          </li>
          <li>
            <a href="">
              <span className="material-icons">notifications_none</span>
              Notifications
            </a>
          </li>
          <li>
            <a href="">
              <span className="material-icons">perm_identity</span>
              Account
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;