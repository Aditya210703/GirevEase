import "./Water.css";
import Damage from "./damage.webp";
import GrievShow from "../Grievances/Gshow";
const WaterReportData = () => {
  const WaterReport = [
    {
      id: "1",
      Department: "Water-Works",
      Locality: "Kidwai Nagar",
      On: "27/10/2023",
      Description: "Description of Grievance",
      DESIMG: Damage,
    },
    {
      id: "2",
      Department: "Water-Works",
      Locality: "Jankipuram",
      On: "28/10/2023",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo vel mi rutrum volutpat. Proin ac pellentesque orci. Nulla at fringilla orci. Nulla aliquet quam quis justo vulputate, quis rutrum metus consequat. Vestibulum consectetur vitae dolor vitae feugiat. Nunc et condimentum leo. Etiam mollis tristique augue ac posuere. Curabitur imperdiet venenatis lacinia. Vivamus euismod mi quis nulla elementum bibendum. Sed pulvinar ultricies velit, sit amet ornare magna eleifend et. Nulla ac convallis felis, at vestibulum dolor.",
      DESIMG: Damage,
    },
    {
      id: "3",
      Department: "Water-Works",
      Locality: "GomtiNagar",
      On: "29/10/2023",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo vel mi rutrum volutpat. Proin ac pellentesque orci. Nulla at fringilla orci. Nulla aliquet quam quis justo vulputate, quis rutrum metus consequat. Vestibulum consectetur vitae dolor vitae feugiat. Nunc et condimentum leo. Etiam mollis tristique augue ac posuere. Curabitur imperdiet venenatis lacinia. Vivamus euismod mi quis nulla elementum bibendum. Sed pulvinar ultricies velit, sit amet ornare magna eleifend et. Nulla ac convallis felis, at vestibulum dolor.",
      DESIMG: Damage,
    },
  ];
  const WaterReportDivStyle = {
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
  if (WaterReport.length === 0) {
    return <div style={ifnotfound}>No Grievances Solved</div>;
  } else {
    const WaterReportList = [];
    for (let i = 0; i < WaterReport.length; i++) {
      WaterReportList.push(
        <div
          className="WaterReportShow_Card_Body"
          key={WaterReport[i].id}
        >
          <GrievShow
            id={WaterReport[i].id}
            Department={WaterReport[i].Department}
            Locality={WaterReport[i].Locality}
            On={WaterReport[i].On}
            Description={WaterReport[i].Description}
            DESIMG={WaterReport[i].DESIMG}
          ></GrievShow>
        </div>
      );
    }
    return (
      <div style={WaterReportDivStyle}>
        {WaterReportList}
      </div>
    );
  }
};

export default WaterReportData;
