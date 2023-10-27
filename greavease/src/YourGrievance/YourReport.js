import './YourGrievance.css';
import GrievShow from '../Grievances/Gshow';
import Damage from "../Grievances/damage.webp";
import { database, auth } from "../firebase";
import { where, collection, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const YourReport = () => {
  const [grievanceData, setGrievanceData] = useState([]);
  const fetchGrievanceData = async () => {
    const user = auth.currentUser;
    const userCollections = collection(database, "grievances");
    const q = query(userCollections, where('uid', '==', user.uid));
    const data = await getDocs(q);
    console.log(data);
    const fil = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setGrievanceData(fil);
  };

  useEffect(() => {
    fetchGrievanceData();
  }, []);

  const ifnotfound = {
    backgroundColor: " rgba(255, 255, 255, 0)",

    borderRadius: "8px",
    height: "4em",
    overflow: "hidden",
    padding: "auto",
    margin: "0.25em 0",
    width: "100%",
    borderWidth: "0",
    display: "flex",
    justifyContent: "center" /* Horizontal centering */,
    alignItems: "center",
    fontSize: "4em",
    color: "#B2533E",
    fontWeight: "bold",
  };
  if (grievanceData.length === 0) {
    return <div style={ifnotfound}>No Grievance Reported</div>;
  } else {
    return (
      <div className="Show_Card_Body">
        {grievanceData.map((grievance, index) => (
          <GrievShow
            key={grievance.id}
            id={index + 1}
            Department={grievance.department}
            Locality={grievance.locality}
            By={grievance.name}
            Description={grievance.description}
            DESIMG={null}
          />
        ))}
      </div>
    );
    // return <div style={ReportDivStyle}>{ReportList}</div>;
  }
  
};

export default YourReport;
