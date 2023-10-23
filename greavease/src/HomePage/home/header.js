import logoImage from './Mask group.png'
import ProfileIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styles from './header.module.css';
import { auth, database } from '../../firebase'
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

// auth data-------
const fetchUserNameFromFirestore = async () => {
  try {
    // Get the currently authenticated user
    const user = auth.currentUser;

    if (user) {
      const userCollection = collection(database, 'user');

      const q = query(userCollection, where('UID', '==', user.uid));

      // Fetch the data using the query
      const querySnapshot = await getDocs(q);

      // Extract the user's name from the document
      if (querySnapshot.size > 0) {
        const doc = querySnapshot.docs[0];
        const userData = doc.data();
        const userName = userData.Name;
        return userName; // Return the user's name
      } else {
        throw new Error('User document not found in Firestore.');
      }
    } else {
      throw new Error('User is not authenticated.');
    }
  } catch (error) {
    console.error('Error fetching user name from Firestore:', error);
    throw error;
  }
};
// };


//-----------------

const Header = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const name = await fetchUserNameFromFirestore();
        setUserName(name);
      } catch (error) {
        console.error('Error fetching user name:', error);
      }
    };

    // Check if the user is authenticated before fetching the name
    const user = auth.currentUser;
    if (user) {
      fetchUserName();
    }
  }, []);

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
        <span className={styles.profileName}>{userName}</span>
        <button className={styles.iconButton}><ArrowDropDownIcon /></button>
      </div>
    </header>
  );
};

export default Header;