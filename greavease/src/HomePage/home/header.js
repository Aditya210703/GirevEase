import logoImage from './Mask group.png'
import ProfileIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const headerStyle = {
    height: '8vh',
    backgroundColor: 'rgba(255,255,255,0.7)',
    color: '#fff',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    
    zIndex: 1
  };
  
  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '20%',
  };
  
  const logoStyle = {
    width: '35px',
    height: '35px',
    marginRight: '1rem',
  };
  
  const appNameStyle = {
    margin: 0,
    color: '#df6609',
    fontFamily: 'Oswald, sans-serif',
};
const searchContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '20px',
    background: 'white', 
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
    padding: '12px', 
    width: '40%',
    height: '2em'
  };
  
  const searchInputStyle = {
    flex: 1,
    border: 'none',
    outline: 'none',
    padding: '8px',
    color: 'darkblue',
    background: 'transparent',
    fontSize: '16px',
    width: '100%', 
  };
  
  const searchButtonStyle = {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    color: 'darkblue',
  };
const iconsContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',  
  };
const buttonStyle = {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
};  
const iconStyle = {
    margin: '0 0.3rem',
    cursor: 'pointer',
    color: '#f60',
    width: '35px',
    height: '4vh',
    borderRadius: "20%",
    backgroundColor: '#fff',
};
const profileNameStyle = {
    margin: '0 0.3rem',
    color: '#006',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
} 
  const Header = () => {
    return (
      <header style={headerStyle}>
        <div style={logoContainerStyle}>
          <img src={logoImage} alt="App Logo" style={logoStyle} />
          <h1 style={appNameStyle}>GrievEase</h1>
        </div>
        
        <div style={iconsContainerStyle}>
        <button style={{ ...buttonStyle, ...iconStyle }}><HomeIcon /></button>
        <button style={{ ...buttonStyle, ...iconStyle }}><GroupsIcon /></button>
        <button style={{ ...buttonStyle, ...iconStyle }}><GroupsIcon /></button>
        </div>

        <div style={searchContainerStyle}>
          <input type="text" placeholder="Type here to Search..." style={searchInputStyle} />
          <button style={searchButtonStyle}><SearchIcon /></button>
        </div>
  
        <div style={iconsContainerStyle}>
        <button style={{ ...buttonStyle, ...iconStyle }}><MessageIcon /></button>
        <button style={{ ...buttonStyle, ...iconStyle }}><NotificationsIcon /></button>
        <button style={{ ...buttonStyle, ...iconStyle }}><ProfileIcon /></button>
        <span style={{ ...buttonStyle, ...profileNameStyle }}>Your Name</span>
        <button style={{ ...buttonStyle, ...iconStyle }}><ArrowDropDownIcon /></button>
      </div>
      </header>
    );
  };
  
  export default Header;