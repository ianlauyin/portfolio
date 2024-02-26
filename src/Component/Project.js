import { useState } from "react";
import BoardousellSummary from "./Boardousell/BoardousellSummary";
import LingoSummary from "./Lingo/LingoSummary";
import BulletSummary from "./Bullet/BulletSummary";
import RedoRoundedIcon from "@mui/icons-material/RedoRounded";
import BoardousellMainPage from "./Boardousell/BoardousellMainPage";
import LingoMainPage from "./Lingo/LingoMainPage";
import BulletMainPage from "./Bullet/BulletMainPage";

export default function Project() {
  const [project, setProject] = useState(null);
  const [isFliping, setIsFliping] = useState(false);
  const [goingProject, setGoingProject] = useState(false);

  const handleSelectProject = (target) => {
    setGoingProject(true);
    const timer = setInterval(() => {
      setProject(target);
      setGoingProject(false);
    }, 1000);
    setTimeout(() => clearInterval(timer), 1000);
  };

  const [stack, setStack] = useState([
    <BoardousellSummary
      handleSelectProject={handleSelectProject}
      key={"boardousell"}
    />,
    <LingoSummary handleSelectProject={handleSelectProject} key={"lingo"} />,
    <BulletSummary handleSelectProject={handleSelectProject} key={"bullet"} />,
  ]);

  const handleChangePreview = () => {
    setIsFliping(true);
    const finishFliping = () => {
      setStack((prev) => {
        const newStack = [...prev];
        newStack.push(newStack.shift());
        return newStack;
      });
      setIsFliping(false);
    };
    const timer = setInterval(() => finishFliping(), 500);
    setTimeout(() => clearInterval(timer), 500);
  };

  const selectProject = (
    <div
      className={`flex justify-center p-5 overflow-x-hidden ${
        goingProject && "select-project-animation"
      }`}
    >
      <div className="relative">
        <div
          className={`stack project-preview  ${
            isFliping && "project-preview-animate"
          }`}
        >
          {stack}
        </div>
        <button
          className="btn btn-circle btn-accent btn-sm flip-page-button"
          onClick={handleChangePreview}
        >
          <RedoRoundedIcon />
        </button>
      </div>
    </div>
  );

  let projectDetail = null;
  switch (project) {
    case "boardousell":
      projectDetail = <BoardousellMainPage />;
      break;
    case "lingo":
      projectDetail = <LingoMainPage />;
      break;
    case "bullet":
      projectDetail = <BulletMainPage />;
      break;
    default:
      break;
  }
  return project ? projectDetail : selectProject;
}
