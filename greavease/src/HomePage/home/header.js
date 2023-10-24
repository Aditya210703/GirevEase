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
import LogoutIcon from '@mui/icons-material/Logout';



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
  const [open, setOpen] = useState(false);

  const handleButtonClick = () => {
    setOpen((prevOpen) => !prevOpen);
  }
  const handleSubmit =() => {
    console.log("form submitted!");
  }
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



  function handleLogout() {
    auth.signOut()
  }

  return (
    <header className={styles.header}>
      <div className={styles.logocontainer}>
        <img src={logoImage} alt="App Logo" className={styles.logo} />
        <h1 className={styles.appName}>GrievEase</h1>
      </div>

      <div className={styles.iconsContainer}>
        <button className={styles.iconButton}><HomeIcon /></button>
        <button className={styles.iconButton}><GroupsIcon /></button>
        {/* <button className={styles.iconButton}><GroupsIcon /></button> */}
      </div>

      <div className={styles.searchContainer}>
        <input type="text" placeholder="Type here to Search..." className={`${styles.searchInput} ${styles.navSearch}`} />
        <button className={styles.searchButton}><SearchIcon /></button>
      </div>

      <div className={styles.iconsContainer}>
        <button className={styles.iconButton} onClick={handleLogout} ><LogoutIcon/></button>
        {/* <button className={styles.iconButton}><NotificationsIcon /></button> */}
        <button className={styles.iconButton}><ProfileIcon /></button>
        <span className={styles.profileName}>{userName}</span>
        <div className={styles.profileCard}>
        <button className={styles.iconButton} onClick={handleButtonClick}><ArrowDropDownIcon /></button>
        { open && 
        (<div className={styles.dropdown}>
          <div className={styles.updateProfile}>
           <h2>Update Profile</h2>
         <form onSubmit={handleSubmit}>
           <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          </div>
           <div className={styles.formGroup}>
           <label htmlFor="phoneNumber">Phone Number:</label>
           <input type="text" id="phoneNumber" name="phoneNumber" />
          </div>
          <div className={styles.formGroup}>
           <label htmlFor="address">Address:</label>
           <input type="text" id="address" name="address" />
         </div>
        <button type="submit" className={styles.updateButton}>Update Details</button>
    </form>
          </div>
        </div>
        )}
        </div>
      </div>
    </header>
  );
};

export default Header;