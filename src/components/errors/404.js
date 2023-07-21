import "./mycss.css";
import bg from "../img/bg.svg";
import are from "../img/areyoulost.webp";

const NoPage = () => {
  return (
    <>
      <div className="login-bg">
        <img src={bg} className="logo"></img>
        <div className="login-box">
          <div className="screen_content">
            <h1>Are you lost bbygurl</h1>
            <img src={are} className="areyou"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoPage;
