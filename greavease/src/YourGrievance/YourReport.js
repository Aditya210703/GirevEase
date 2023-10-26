import './YourGrievance.css';
import GrievShow from '../Grievances/Gshow';
import Damage from "../Grievances/damage.webp";
const YourReport = () => {
  const YourReportList = [
    {
      id: "1",
      Department: "Electricity",
      Locality: "Kidwai Nagar",
      By: "Ayush Sahu",
      Description: "Description of Grievance",
      DESIMG: Damage,
    },
  ];
  const ReportDivStyle = {
    padding: "0",
    margin: "0",
  };
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
  if (YourReportList.length === 0) {
    return <div style={ifnotfound}>No Grievance Reported</div>;
  } else {
    const ReportList = [];
    for (let i = 0; i < YourReportList.length; i++) {
      ReportList.push(
        <div className="ShowYourGrievaceBody" key={YourReportList[i].id}>
          <GrievShow
            id={YourReportList[i].id}
            Department={YourReportList[i].Department}
            Locality={YourReportList[i].Locality}
            By={YourReportList[i].By}
            Description={YourReportList[i].Description}
            DESIMG={YourReportList[i].DESIMG}
          ></GrievShow>
        </div>
      );
    }
    return <div style={ReportDivStyle}>{ReportList}</div>;
  }
  
};

export default YourReport;
