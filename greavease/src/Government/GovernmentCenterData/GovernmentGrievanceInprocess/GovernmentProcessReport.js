import "./GovernmentProcess.css";
import Damage from "./damage.webp";
import GovernmentProcessShow from "./GovernmentProcessShow";
import { database } from "../../../firebase";
import { collection, getDocs, query, where ,orderBy } from "firebase/firestore";
import React, { useEffect, useState } from "react";


const GovernmentProcessReportData = () => {
  const [grievanceData, setGrievanceData] = useState([]);

  const fetchGrievanceData = async () => {
    const userCollections = collection(database, "grievances");
    const q =query(userCollections,where('status', '==', 'In process'));
    const data = await getDocs(q);
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
    justifyContent: "center",
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
          <GovernmentProcessShow
            gid={grievance.id}
            id={index + 1}
            Department={grievance.department}
            Locality={grievance.locality}
            By={grievance.name}
            Description={grievance.description}
            Upvotes = {grievance.Upvotes}
            status = {grievance.status}
            DESIMG={grievance.image}
          />
        ))}
      </div>
    );
  }
};

export default GovernmentProcessReportData;
