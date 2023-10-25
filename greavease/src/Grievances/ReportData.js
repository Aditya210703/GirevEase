import "./ShowData.css";
import GrievShow from "./Gshow";
import { database } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const ReportData = () => {
  const [grievanceData, setGrievanceData] = useState([]);

  const fetchGrievanceData = async () => {
    const userCollections = collection(database, "grievances");
    const data = await getDocs(userCollections);
    const fil = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setGrievanceData(fil);
  };

  useEffect(() => {
    fetchGrievanceData();
  }, []);

  if (grievanceData.length === 0) {
    return <div>No Grievance Reported</div>;
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
  }
};

export default ReportData;
