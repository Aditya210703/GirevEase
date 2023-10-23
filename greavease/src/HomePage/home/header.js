import logoImage from './Mask group.png'
import ProfileIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styles from './header.module.css';

  const Header = () => {
    return (
      <header className={styles.header}>
        <div className={styles.logocontainer}>
          <img src={logoImage} alt="App Logo" className={styles.logo} />
          <h1 className={styles.appName}>GrievEase</h1>
        </div>
        
        <div className={styles.iconsContainer}>
        <button className={styles.iconButton}><HomeIcon /></button>
        <button className={styles.iconButton}><GroupsIcon /></button>
        <button className={styles.iconButton}><GroupsIcon /></button>
        </div>

        <div className={styles.searchContainer}>
          <input type="text" placeholder="Type here to Search..." className={styles.searchInput} />
          <button className={styles.searchButton}><SearchIcon /></button>
        </div>
  
        <div className={styles.iconsContainer}>
        <button className={styles.iconButton}><MessageIcon /></button>
        <button className={styles.iconButton}><NotificationsIcon /></button>
        <button className={styles.iconButton}><ProfileIcon /></button>
        <span className={styles.profileName}>Your Name</span>
        <button className={styles.iconButton}><ArrowDropDownIcon /></button>
      </div>
      </header>
    );
  };
  
  export default Header;