import { useState } from "react";
import AboutMe from "./AboutMe";
import Project from "./Project";
import Contact from "./Contact";
import TitleNavi from "./TitleNavi";
import { Grow } from "@mui/material";

export default function Title({ setSection, section }) {
  const [isNavBar, setIsNavBar] = useState(false);
  let content = null;
  if (isNavBar) {
    switch (section) {
      case "about":
        content = <AboutMe />;
        break;
      case "project":
        content = <Project />;
        break;
      case "contact":
        content = <Contact />;
        break;
      default:
        break;
    }
  }
  const handleChangeSection = (value) => {
    if (section.length) {
      setSection(value);
    } else {
      setSection(value);
      const delay = setInterval(() => setIsNavBar(true), 1100);
      setTimeout(() => clearInterval(delay), 1100);
    }
  };

  const naviBar = (
    <div role="tablist" className="tabs tabs-bordered tabs-lg">
      <Grow in={isNavBar}>
        <input
          type="radio"
          role="tab"
          className="tab"
          aria-label="ABOUT ME"
          checked={section === "about"}
          onChange={() => handleChangeSection("about")}
        />
      </Grow>
      <Grow in={isNavBar} {...(isNavBar ? { timeout: 1000 } : {})}>
        <input
          type="radio"
          role="tab"
          className="tab"
          aria-label="PROJECT"
          checked={section === "project"}
          onChange={() => handleChangeSection("project")}
        />
      </Grow>
      <Grow in={isNavBar} {...(isNavBar ? { timeout: 2000 } : {})}>
        <input
          type="radio"
          role="tab"
          className="tab"
          aria-label="CONTACT"
          checked={section === "contact"}
          onChange={() => handleChangeSection("contact")}
        />
      </Grow>
    </div>
  );

  const navi = isNavBar ? (
    naviBar
  ) : (
    <TitleNavi handleChangeSection={handleChangeSection} />
  );

  return (
    <div className={`space-y-5 `}>
      <div
        className={`items-start flex flex-col cursor-pointer title-div`}
        onClick={() => {
          setSection("");
          setIsNavBar(false);
        }}
      >
        <b className="text-6xl title-name">Ian Lau</b>
        <h2 className="text-3xl">Software Engineer</h2>
      </div>
      {navi}
      {content}
    </div>
  );
}
