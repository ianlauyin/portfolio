import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Slide } from "@mui/material";
import { useState } from "react";

export default function TitleNavi({ handleChangeSection }) {
  const [hover, setHover] = useState("");
  return (
    <ol className="flex flex-col items-start space-y-1">
      <li
        className="text-primary cursor-pointer flex items-center"
        onClick={() => handleChangeSection("about")}
        onMouseEnter={() => setHover("about")}
        onMouseLeave={() => setHover("")}
      >
        <Slide
          direction="right"
          in={hover === "about"}
          mountOnEnter
          unmountOnExit
        >
          <DoubleArrowIcon />
        </Slide>
        ABOUT ME
      </li>
      <li
        className="text-primary cursor-pointer flex items-center"
        onClick={() => handleChangeSection("project")}
        onMouseEnter={() => setHover("project")}
        onMouseLeave={() => setHover("")}
      >
        <Slide
          direction="right"
          in={hover === "project"}
          mountOnEnter
          unmountOnExit
        >
          <DoubleArrowIcon />
        </Slide>
        PROJECT
      </li>
      <li
        className="text-primary cursor-pointer flex items-center"
        onClick={() => handleChangeSection("contact")}
        onMouseEnter={() => setHover("contact")}
        onMouseLeave={() => setHover("")}
      >
        <Slide
          direction="right"
          in={hover === "contact"}
          mountOnEnter
          unmountOnExit
        >
          <DoubleArrowIcon />
        </Slide>
        CONTACT
      </li>
    </ol>
  );
}
