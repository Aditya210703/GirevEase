import React, { useState } from "react";
import { Typography, Paper, Box, Tab, Tabs } from "@mui/material";
import Login from "./Login";
import Signup from "./Signup";
import './Merge.css'
import Land2 from'./land2.jpg'
const Merge = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle = { width: 500, margin: "20px auto", backgroundColor: "rgba(255,255,255,0.4)"  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      
      <div 
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <div  >  
        <Paper  elevation={20} style={paperStyle} className="bd" >
        
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
          variant="fullWidth"
          
        >
          <Tab label="Sign In" />
  
          <Tab label="Sign Up" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Login   handleChange={handleChange} />
        </TabPanel>
        <TabPanel  value={value} index={1}>
          <Signup/>
        </TabPanel>
      </Paper>
    </div>
    
  );
};

export default Merge;
