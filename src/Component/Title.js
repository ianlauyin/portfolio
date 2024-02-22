import { useState } from "react";
import AboutMe from "./AboutMe";
import Project from "./Project";
import Contact from "./Contact";
import TitleNavi from "./TitleNavi";

export default function Title({ setSection, section }) {
  const [isLoading, setIsLoading] = useState(false);
  let content = null;
  if (!isLoading) {
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
      setIsLoading(true);
      setSection(value);
      const delay = setInterval(() => setIsLoading(false), 1100);
      setTimeout(() => clearInterval(delay), 1100);
    }
  };

  const naviBar = (
    <div role="tablist" className="tabs tabs-bordered tabs-lg">
      <input
        type="radio"
        role="tab"
        className="tab"
        aria-label="ABOUT ME"
        checked={section === "about"}
        onChange={() => handleChangeSection("about")}
      />
      <input
        type="radio"
        role="tab"
        className="tab"
        aria-label="PROJECT"
        checked={section === "project"}
        onChange={() => handleChangeSection("project")}
      />
      <input
        type="radio"
        role="tab"
        className="tab"
        aria-label="CONTACT"
        checked={section === "contact"}
        onChange={() => handleChangeSection("contact")}
      />
    </div>
  );

  const navi =
    isLoading || !section.length ? (
      <TitleNavi handleChangeSection={handleChangeSection} />
    ) : (
      naviBar
    );

  return (
    <div className={`space-y-5 `}>
      <div
        className={`items-start flex flex-col cursor-pointer title-div`}
        onClick={() => setSection("")}
      >
        <b className="text-6xl title-name">Ian Lau</b>
        <h2 className="text-3xl">Software Engineer</h2>
      </div>
      {navi}
      {content}
    </div>
  );
}
