import "./ShowData.css";
import GrievShow from "./GShow";
import Damage from "./damage.webp";
const ReportData = () => {
  const Report = [
    {
      id: "1",
      Department: "Electricity",
      Locality: "Kidwai Nagar",
      By: "Ayush Sahu",
      Description: "Description of Grievance",
      DESIMG: Damage,
    },
    {
      id: "2",
      Department: "Water-Works",
      Locality: "Jankipuram",
      By: "Harsh Upadhyay",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo vel mi rutrum volutpat. Proin ac pellentesque orci. Nulla at fringilla orci. Nulla aliquet quam quis justo vulputate, quis rutrum metus consequat. Vestibulum consectetur vitae dolor vitae feugiat. Nunc et condimentum leo. Etiam mollis tristique augue ac posuere. Curabitur imperdiet venenatis lacinia. Vivamus euismod mi quis nulla elementum bibendum. Sed pulvinar ultricies velit, sit amet ornare magna eleifend et. Nulla ac convallis felis, at vestibulum dolor.",
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
  if (Report.length === 0) {
    return <div style={ifnotfound}>No Grievance Reported</div>;
  } else {
    const ReportList = [];
    for (let i = 0; i < Report.length; i++) {
      ReportList.push(
        <div className="Show_Card_Body" key={Report[i].id}>
          <GrievShow
            id={Report[i].id}
            Department={Report[i].Department}
            Locality={Report[i].Locality}
            By={Report[i].By}
            Description={Report[i].Description}
            DESIMG={Report[i].DESIMG}
          ></GrievShow>
        </div>
      );
    }
    return <div style={ReportDivStyle}>{ReportList}</div>;
  }
  const ReportList = [];
  for (let i = 0; i < Report.length; i++) {
    ReportList.push(
      <div className="Show_Card_Body">
        <GrievShow
          id={Report[i].id}
          Department={Report[i].Department}
          Locality={Report[i].Locality}
          By={Report[i].By}
        ></GrievShow>
      </div>
    );
  }
  return <div style={ReportDivStyle}>{ReportList}</div>;
};

export default ReportData;
