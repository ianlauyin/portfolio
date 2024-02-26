import { Zoom } from "@mui/material";
import phone from "./img/phone.png";
import github from "./img/github.png";
import email from "./img/email.png";
import whatsapp from "./img/whatsapp.png";
import { useState } from "react";

export default function Contact() {
  const [hover, setHover] = useState("");

  let content = null;
  switch (hover) {
    case "phone":
      content = (
        <Zoom in={hover === "phone"}>
          <div
            className="contact-content-container"
            onMouseEnter={() => setHover("phone")}
            onMouseLeave={() => setHover("")}
          >
            <img src={phone} alt="phone" className="w-14 h-14" />
            <a href="tel:+85257030374" className="text-base-100 pl-5">
              +852 5703 0374
            </a>
          </div>
        </Zoom>
      );
      break;
    case "whatsapp":
      content = (
        <Zoom in={hover === "whatsapp"}>
          <div
            className="contact-content-container"
            onMouseEnter={() => setHover("whatsapp")}
          >
            <img src={whatsapp} alt="whatsapp" className="w-14 h-14" />
            <a href="https://wa.me/85257030374" className="text-base-100 pl-5">
              Whatsapp me
            </a>
          </div>
        </Zoom>
      );
      break;
    case "email":
      content = (
        <Zoom in={hover === "email"}>
          <div
            className="contact-content-container"
            onMouseEnter={() => setHover("email")}
          >
            <img src={email} alt="email" className="w-14 h-14" />
            <a href="mailto:ianlauyin@gmail.com" className="text-base-100 pl-5">
              ianlauyin@gmail.com
            </a>
          </div>
        </Zoom>
      );
      break;
    case "github":
      content = (
        <Zoom in={hover === "github"}>
          <div
            className="contact-content-container"
            onMouseEnter={() => setHover("github")}
          >
            <img src={github} alt="github" className="w-14 h-14" />
            <a
              href="https://github.com/ianlauyin"
              className="text-base-100 pl-5"
            >
              https://github.com/ianlauyin
            </a>
          </div>
        </Zoom>
      );
      break;
    default:
      break;
  }

  return (
    <div className="flex flex-col items-center space-y-5">
      <div className="flex items-center space-x-1">
        <Zoom in>
          <div
            className={`p-3 rounded ${hover === "phone" && "border "}`}
            onMouseEnter={() => setHover("phone")}
          >
            <img src={phone} alt="phone" className="w-14 h-14" />
          </div>
        </Zoom>
        <Zoom in style={{ transitionDelay: "0.5s" }}>
          <div
            className={`p-3 rounded ${hover === "whatsapp" && "border "}`}
            onMouseEnter={() => setHover("whatsapp")}
          >
            <img src={whatsapp} alt="whatsapp" className="w-14 h-14" />
          </div>
        </Zoom>
        <Zoom in style={{ transitionDelay: "1s" }}>
          <div
            className={`p-3 rounded ${hover === "email" && "border "}`}
            onMouseEnter={() => setHover("email")}
          >
            <img src={email} alt="email" className="w-14 h-14" />
          </div>
        </Zoom>
        <Zoom in style={{ transitionDelay: "1.5s" }}>
          <div
            className={`p-3 rounded ${hover === "github" && "border "}`}
            onMouseEnter={() => setHover("github")}
          >
            <img src={github} alt="github" className="w-14 h-14" />
          </div>
        </Zoom>
      </div>
      {content}
    </div>
  );
}
