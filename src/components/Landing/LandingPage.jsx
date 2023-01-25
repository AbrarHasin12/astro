import FrontPage from "../Front Page/FrontPage";
import NavBar from "./NavBar";

const LandingPage = () => {
  return (
    <div>
      <div className="header-container ">
        <NavBar />
      </div>

      <FrontPage />
    </div>
  );
};

export default LandingPage;
