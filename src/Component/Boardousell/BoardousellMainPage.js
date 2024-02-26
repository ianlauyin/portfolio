import { Grow } from "@mui/material";
import { useState } from "react";
import Features from "./Features";
import Frontend from "./Frontend";
import Backend from "./Backend";
import ProjectMenu from "../ProjectMenu";

export default function BoardousellMainPage({ setProject }) {
  const [section, setSection] = useState("features");
  let sectionDetail;
  switch (section) {
    case "frontend":
      sectionDetail = <Frontend />;
      break;
    case "backend":
      sectionDetail = <Backend />;
      break;
    default:
      sectionDetail = <Features />;
  }

  return (
    <div>
      <div
        role="tablist"
        className="tabs sticky tabs-md tabs-boxed bg-base-200 overflow-x-hidden"
      >
        <Grow in>
          <input
            type="radio"
            role="tab"
            className={`tab`}
            aria-label="Features"
            checked={section === "features"}
            onChange={() => setSection("features")}
          />
        </Grow>
        <Grow in timeout={1000}>
          <input
            type="radio"
            role="tab"
            className={`tab`}
            aria-label="Frondend"
            checked={section === "frontend"}
            onChange={() => setSection("frontend")}
          />
        </Grow>
        <Grow in timeout={2000}>
          <input
            type="radio"
            role="tab"
            className={`tab`}
            aria-label="Backend"
            checked={section === "backend"}
            onChange={() => setSection("backend")}
          />
        </Grow>
      </div>
      {sectionDetail}
      <ProjectMenu setProject={setProject} />
    </div>
  );
}
