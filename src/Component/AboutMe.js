import AOS from "aos";
import "aos/dist/aos.css";
import photo1 from "./img/IanLauPhoto.jpg";
import { useEffect } from "react";
import Language from "./Skills/Language";
import Frontend from "./Skills/Frontend";
import Backend from "./Skills/Backend";
import Database from "./Skills/Database";
import VersionControl from "./Skills/VersionControl";
import Others from "./Skills/Others";

export default function AboutMe() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex flex-col items-center pb-10">
      <b className="text-lg">Hello! I am Ian. Welcome to my page.</b>
      <div className="divider divider-primary">Background:</div>
      <div className="flex flex-col space-y-3 items-center sm:flex-row mb-5">
        <div className="w-full sm:w-3/4 flex justify-center p-5">
          <p className="w-full sm:w-3/4">
            As a passionate software developer, I possess a strong foundation in
            programming and adapt quickly to new technologies. With experience
            in freelancing, I excel in team environments, collaborating
            effectively and delivering high-quality solutions. My dedication,
            problem-solving skills, and commitment to excellence enable me to
            exceed client expectations.
          </p>
        </div>
        <div className="flex justify-center sm:justify-start w-52 h-56 rounded-box">
          <img src={photo1} alt="photo1" />
        </div>
      </div>
      <div className="divider divider-secondary">Skills:</div>
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-evenly w-full">
        <div className="self-start m-5">
          <Language />
        </div>
        <div className="self-end sm:self-start m-5">
          <Frontend />
        </div>
        <div className="self-start m-5">
          <Backend />
        </div>
        <div className="self-end sm:self-start m-5">
          <Database />
        </div>
        <div className="self-start m-5">
          <VersionControl />
        </div>
        <div className="self-end sm:self-start m-5">
          <Others />
        </div>
      </div>
      <div className="divider divider-accent">Personality:</div>
      <div className="w-full flex justify-around flex-wrap">
        <div className="chat-end my-5" data-aos="fade-up" data-aos-delay="100">
          <div className="w-56 h-32 chat-bubble chat-bubble-info flex flex-col justify-between">
            <b className="text-3xl self-start">“</b>
            <b className="text-xl">Quick Learner</b>
            <b className="text-3xl self-end">„</b>
          </div>
        </div>
        <div className="chat-end my-5" data-aos="fade-up" data-aos-delay="300">
          <div className="w-56 h-32 chat-bubble chat-bubble-success flex flex-col justify-between">
            <b className="text-3xl self-start">“</b>
            <b className="text-xl">Challenge Taker</b>
            <b className="text-3xl self-end">„</b>
          </div>
        </div>
        <div className="chat-end my-5" data-aos="fade-up" data-aos-delay="500">
          <div className="w-56 h-32 chat-bubble chat-bubble-warning flex flex-col justify-between">
            <b className="text-3xl self-start">“</b>
            <b className="text-xl">Team Player</b>
            <b className="text-3xl self-end">„</b>
          </div>
        </div>
        <div className="chat-end my-5" data-aos="fade-up" data-aos-delay="700">
          <div className="w-56 h-32 chat-bubble chat-bubble-error flex flex-col justify-between">
            <b className="text-3xl self-start">“</b>
            <b className="text-xl">Problem Solver</b>
            <b className="text-3xl self-end">„</b>
          </div>
        </div>
      </div>
      <div className="divider divider-success">Passion:</div>
      <div className="w-full flex justify-around flex-wrap">
        <div
          className="chat-end mb-5"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div className="w-56 chat-bubble chat-bubble-primary">
            <b className="text-xl">Coding Challenges</b>
          </div>
        </div>
        <div
          className="chat-end mb-5"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <div className="w-56 chat-bubble chat-bubble-secondary">
            <b className="text-xl">Strategy Board Games</b>
          </div>
        </div>
      </div>
    </div>
  );
}
