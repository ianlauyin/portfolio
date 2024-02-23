import { Slide, Zoom } from "@mui/material";
import phone from "./img/phone.png";
import github from "./img/github.png";
import email from "./img/email.png";
import whatsapp from "./img/whatsapp.png";
import { useRef, useState } from "react";

export default function Contact() {
  const [hover, setHover] = useState("");
  const containerRef = useRef(null);
  return (
    <div className="flex flex-col items-center justify-around ">
      <Zoom in>
        <div
          className="contact-icon-container"
          onMouseEnter={() => setHover("phone")}
          onMouseLeave={() => setHover("")}
          ref={containerRef}
        >
          <img src={phone} alt="phone" className="w-14 h-14" />
          <Slide
            in={hover === "phone"}
            direction="right"
            mountOnEnter
            unmountOnExit
            container={containerRef.current}
          >
            <a href="tel:+85257030374" className="text-base-100 pl-5">
              +852 5703 0374
            </a>
          </Slide>
        </div>
      </Zoom>
      <Zoom in style={{ transitionDelay: "0.5s" }}>
        <div
          className="contact-icon-container"
          onMouseEnter={() => setHover("whatsapp")}
          onMouseLeave={() => setHover("")}
          ref={containerRef}
        >
          <img src={whatsapp} alt="whatsapp" className="w-14 h-14" />
          <Slide
            in={hover === "whatsapp"}
            direction="right"
            mountOnEnter
            unmountOnExit
            container={containerRef.current}
          >
            <a href="https://wa.me/85257030374" className="text-base-100 pl-5">
              Whatsapp me
            </a>
          </Slide>
        </div>
      </Zoom>
      <Zoom in style={{ transitionDelay: "1s" }}>
        <div
          className="contact-icon-container"
          onMouseEnter={() => setHover("email")}
          onMouseLeave={() => setHover("")}
          ref={containerRef}
        >
          <img src={email} alt="email" className="w-14 h-14" />
          <Slide
            in={hover === "email"}
            direction="right"
            mountOnEnter
            unmountOnExit
            container={containerRef.current}
          >
            <a href="mailto:ianlauyin@gmail.com" className="text-base-100 pl-5">
              ianlauyin@gmail.com
            </a>
          </Slide>
        </div>
      </Zoom>
      <Zoom in style={{ transitionDelay: "1.5s" }}>
        <div
          className="contact-icon-container"
          onMouseEnter={() => setHover("github")}
          onMouseLeave={() => setHover("")}
          ref={containerRef}
        >
          <img src={github} alt="github" className="w-14 h-14" />
          <Slide
            in={hover === "github"}
            direction="right"
            mountOnEnter
            unmountOnExit
            container={containerRef.current}
          >
            <a
              href="https://github.com/ianlauyin"
              className="text-base-100 pl-5"
            >
              https://github.com/ianlauyin
            </a>
          </Slide>
        </div>
      </Zoom>
    </div>
  );
}
