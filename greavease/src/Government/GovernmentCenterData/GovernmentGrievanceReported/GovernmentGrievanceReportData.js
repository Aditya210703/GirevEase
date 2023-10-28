import "./GovernmentGrievanceShow.css";
import Damage from './damage.webp';
import GovernmentGrievShow from "./GovernmentGrievanceCardShow";
const GovernmentGrievanceReportData = () => {
  const GovernmentGrievanceReport = [
    {
      id: "1",
      Department: "Electricity",
      Locality: "Kidwai Nagar",
      By: "Pending..",
      Description: "Description of Grievance",
      DESIMG: Damage,
    },
    {
      id: "2",
      Department: "Water-Works",
      Locality: "Jankipuram",
      By: "Reviewed",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo vel mi rutrum volutpat. Proin ac pellentesque orci. Nulla at fringilla orci. Nulla aliquet quam quis justo vulputate, quis rutrum metus consequat. Vestibulum consectetur vitae dolor vitae feugiat. Nunc et condimentum leo. Etiam mollis tristique augue ac posuere. Curabitur imperdiet venenatis lacinia. Vivamus euismod mi quis nulla elementum bibendum. Sed pulvinar ultricies velit, sit amet ornare magna eleifend et. Nulla ac convallis felis, at vestibulum dolor.",
      DESIMG: Damage,
    },
    {
      id: "3",
      Department: "Water-Works",
      Locality: "GomtiNagar",
      By: "Solved",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo vel mi rutrum volutpat. Proin ac pellentesque orci. Nulla at fringilla orci. Nulla aliquet quam quis justo vulputate, quis rutrum metus consequat. Vestibulum consectetur vitae dolor vitae feugiat. Nunc et condimentum leo. Etiam mollis tristique augue ac posuere. Curabitur imperdiet venenatis lacinia. Vivamus euismod mi quis nulla elementum bibendum. Sed pulvinar ultricies velit, sit amet ornare magna eleifend et. Nulla ac convallis felis, at vestibulum dolor.",
      DESIMG: Damage,
    },
  ];
  const GovernmentGrievanceReportDivStyle = {
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
  if (GovernmentGrievanceReport.length === 0) {
    return (
      <div style={ifnotfound}>No Grievance GovernmentGrievanceReported</div>
    );
  } else {
    const GovernmentGrievanceReportList = [];
    for (let i = 0; i < GovernmentGrievanceReport.length; i++) {
      GovernmentGrievanceReportList.push(
        <div
          className="GovernmentGrievanceReportShow_Card_Body"
          key={GovernmentGrievanceReport[i].id}
        >
          <GovernmentGrievShow
            id={GovernmentGrievanceReport[i].id}
            Department={GovernmentGrievanceReport[i].Department}
            Locality={GovernmentGrievanceReport[i].Locality}
            By={GovernmentGrievanceReport[i].By}
            Description={GovernmentGrievanceReport[i].Description}
            DESIMG={GovernmentGrievanceReport[i].DESIMG}
          ></GovernmentGrievShow>
        </div>
      );
    }
    return (
      <div style={GovernmentGrievanceReportDivStyle}>
        {GovernmentGrievanceReportList}
      </div>
    );
  }
};

export default GovernmentGrievanceReportData;
