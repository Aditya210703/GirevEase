import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <img className="background-icon" alt="" src="/background@2x.png" />
      <div className="details-about-site">
        <div className="details">
          <div className="breif-intro">
            Lorem ipsum 
          </div>
          <div className="number">
            <div className="regesteres">
              <b className="k">25K</b>
              <div className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet `}</div>
            </div>
            <div className="regesteres">
              <b className="k">12K</b>
              <div className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet `}</div>
            </div>
          </div>
          <div className="number">
            <div className="regesteres">
              <b className="k">187</b>
              <div className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet `}</div>
            </div>
            <div className="regesteres">
              <b className="k">10.9K</b>
              <div className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet `}</div>
            </div>
          </div>
        </div>
        <div className="logo">
          <img className="image-2-icon" alt="" src="/image-2@2x.png" />
        </div>
      </div>
      <div className="headline-and-button">
        <b className="grievances-becomes-solutions">
          Grievances becomes solutions
        </b>
        <div className="lorem-ipsum-dolor4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
          imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus
          nec gravida ipsum pulvinar vel.
        </div>
        <div className="primary-button">
          <div className="get-started">Get started</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
