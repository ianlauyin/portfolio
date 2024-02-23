import { useState } from "react";
import BoardousellSummary from "./Boardousell/BoardousellSummary";
import LingoSummary from "./Lingo/LingoSummary";
import BulletSummary from "./Bullet/BulletSummary";
import RedoRoundedIcon from "@mui/icons-material/RedoRounded";

export default function Project() {
  const [project, setProject] = useState(null);
  const [isFliping, setIsFliping] = useState(false);
  const [stack, setStack] = useState([
    <BoardousellSummary />,
    <LingoSummary />,
    <BulletSummary />,
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
    <div className="flex justify-center p-5 overflow-x-hidden">
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

  const projectDetail = <div>detail</div>;
  return project ? projectDetail : selectProject;
}
