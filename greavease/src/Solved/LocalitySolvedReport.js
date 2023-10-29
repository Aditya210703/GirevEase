import "./LocalitySolved.css";
import Damage from "./damage.webp";
import GovernmentSolvedShow from "../Government/GovernmentCenterData/GovernmentGrievanceSolved/GovernmentSolvedShow";
const LocalitySolvedReportData = () => {
  const LocalitySolvedReport = [
    {
      id: "1",
      Department: "Electricity",
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
  const LocalitySolvedReportDivStyle = {
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
  if (LocalitySolvedReport.length === 0) {
    return <div style={ifnotfound}>No Grievances Solved</div>;
  } else {
    const LocalitySolvedReportList = [];
    for (let i = 0; i < LocalitySolvedReport.length; i++) {
      LocalitySolvedReportList.push(
        <div
          className="LocalitySolvedReportShow_Card_Body"
          key={LocalitySolvedReport[i].id}
        >
          <GovernmentSolvedShow
            id={LocalitySolvedReport[i].id}
            Department={LocalitySolvedReport[i].Department}
            Locality={LocalitySolvedReport[i].Locality}
            On={LocalitySolvedReport[i].On}
            Description={LocalitySolvedReport[i].Description}
            DESIMG={LocalitySolvedReport[i].DESIMG}
          ></GovernmentSolvedShow>
        </div>
      );
    }
    return (
      <div style={LocalitySolvedReportDivStyle}>
        {LocalitySolvedReportList}
      </div>
    );
  }
};

export default LocalitySolvedReportData;
