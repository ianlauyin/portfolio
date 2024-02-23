import Photo1 from "./img/IanLauPhoto1.jpg";
import Photo2 from "./img/IanLauPhoto2.jpg";
import Photo3 from "./img/IanLauPhoto3.jpg";
import Auth0Photo from "./img/Auth0.png";
import BootstrapPhoto from "./img/Bootstrap.png";
import CSSPhoto from "./img/CSS.png";
import ExpressjsPhoto from "./img/Expressjs.png";
import FirebasePhoto from "./img/Firebase.png";
import GitPhoto from "./img/Git.png";
import htmlPhoto from "./img/html.jpg";
import JSPhoto from "./img/JS.png";
import MUIPhoto from "./img/MUI.png";
import NodeJsPhoto from "./img/NodeJS.png";
import noSQLPhoto from "./img/noSQL.png";
import PostgreSQLPhoto from "./img/PostgreSQL.png";
import PythonPhoto from "./img/Python.png";
import ReactPhoto from "./img/React.png";
import ReactRouterPhoto from "./img/ReactRouter.png";
import RESTAPIPhoto from "./img/RESTAPI.png";
import SequelizePhoto from "./img/Sequelize.png";
import TailwindCSSPhoto from "./img/TailwindCSS.png";
import TypescriptPhoto from "./img/Typescript.png";

export default function AboutMe() {
  return (
    <div className="flex flex-col items-center space-y-5">
      <b className="text-lg">Hello! I am Ian. Welcome to my page.</b>
      <div className="divider divider-primary">Background:</div>
      <div className="flex flex-col space-y-3 items-center sm:flex-row">
        <p className="w-3/4 sm:p-5">
          Back in the day when I was studying at university, programming was
          really catching my eyes. I feel "in the zone" when I am reading or
          writing programming languages. After several years in society, I think
          software engineering is really my dream job and what I am really
          passionate about. And I also have the passion to learn more
          programming languages, skills and do more practice on my algorithm.
        </p>
        <div className="carousel sm:carousel-vertical rounded-box w-52 h-56 self-center">
          <div className="carousel-item w-full h-full">
            <img src={Photo1} alt="photo1" className="w-full h-full" />
          </div>
          <div className="carousel-item w-full">
            <img src={Photo2} alt="photo2" className="w-full h-full" />
          </div>
          <div className="carousel-item w-full">
            <img src={Photo3} alt="photo3" className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="divider divider-secondary">Skills:</div>
      <div className="flex flex-col w-5/6 items-center space-y-10 sm:flex-row sm:justify-between sm:space-y-0 sm:items-stretch">
        <div className="card w-56 bg-base-300 shadow-xl">
          <div className="card-body">
            <b className="card-title self-center">Frontend:</b>
            <ul className="skill-list space-y-2">
              <li>
                <img src={htmlPhoto} alt="htmlPhoto" />
                HTML
              </li>
              <li>
                <img src={CSSPhoto} alt="CSSPhoto" />
                CSS
              </li>
              <li>
                <img src={ReactPhoto} alt="ReactPhoto" />
                React.js
              </li>
              <li>
                <img src={ReactRouterPhoto} alt="ReactRouterPhoto" />
                React Router
              </li>
              <li>
                <img src={TailwindCSSPhoto} alt="TailwindCSSPhoto" />
                Tailwind CSS
              </li>
              <li>
                <img src={BootstrapPhoto} alt="BootstrapPhoto" />
                Bootstrap
              </li>
              <li>
                <img src={MUIPhoto} alt="MUIPhoto" />
                Material UI
              </li>
            </ul>
          </div>
        </div>
        <div className="card w-56 bg-base-300 shadow-xl">
          <div className="card-body">
            <b className="card-title self-center">Backend:</b>
            <ul className="skill-list space-y-2">
              <li>
                <img src={ExpressjsPhoto} alt="ExpressjsPhoto" />
                Express.js
              </li>
              <li>
                <img src={noSQLPhoto} alt="noSQLPhoto" />
                noSQL
              </li>
              <li>
                <img src={PostgreSQLPhoto} alt="PostgresSQLPhoto" />
                postgreSQL
              </li>
              <li>
                <img src={SequelizePhoto} alt="SequelizePhoto" />
                Sequelize
              </li>
              <li>
                <img src={RESTAPIPhoto} alt="RESTAPIPhoto" />
                REST API
              </li>
            </ul>
          </div>
        </div>
        <div className="card w-56 bg-base-300 shadow-xl">
          <div className="card-body">
            <b className="card-title self-center">Others:</b>
            <ul className="skill-list space-y-2">
              <li>
                <img src={JSPhoto} alt="JSPhoto" />
                JavaScript
              </li>
              <li>
                <img src={TypescriptPhoto} alt="TypescriptPhoto" />
                TypeScript
              </li>
              <li>
                <img src={PythonPhoto} alt="PythonPhoto" />
                Python
              </li>
              <li>
                <img src={NodeJsPhoto} alt="NodeJSPhoto" />
                Node.js
              </li>
              <li>
                <img src={GitPhoto} alt="GitPhoto" />
                Git
              </li>
              <li>
                <img src={FirebasePhoto} alt="FirebasePhoto" />
                Firebase
              </li>
              <li>
                <img src={Auth0Photo} alt="Auth0Photo" />
                Auth0
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="divider divider-accent">Personality:</div>
      <div className="w-full flex justify-around flex-wrap">
        <div className="chat-end my-5">
          <div className="w-56 h-32 chat-bubble chat-bubble-info flex flex-col justify-between">
            <b className="text-3xl self-start">“</b>
            <b className="text-xl">Quick Learner</b>
            <b className="text-3xl self-end">„</b>
          </div>
        </div>
        <div className="chat-end my-5">
          <div className="w-56 h-32 chat-bubble chat-bubble-success flex flex-col justify-between">
            <b className="text-3xl self-start">“</b>
            <b className="text-xl">Challenge Taker</b>
            <b className="text-3xl self-end">„</b>
          </div>
        </div>
        <div className="chat-end my-5">
          <div className="w-56 h-32 chat-bubble chat-bubble-warning flex flex-col justify-between">
            <b className="text-3xl self-start">“</b>
            <b className="text-xl">Team Player</b>
            <b className="text-3xl self-end">„</b>
          </div>
        </div>
        <div className="chat-end my-5">
          <div className="w-56 h-32 chat-bubble chat-bubble-error flex flex-col justify-between">
            <b className="text-3xl self-start">“</b>
            <b className="text-xl">Problem Solver</b>
            <b className="text-3xl self-end">„</b>
          </div>
        </div>
      </div>
      <div className="divider divider-success">Passion:</div>
      <div className="w-full flex justify-around flex-wrap">
        <div className="chat-end mb-5">
          <div className="w-56 chat-bubble chat-bubble-primary">
            <b className="text-xl">Coding Challenges</b>
          </div>
        </div>
        <div className="chat-end mb-5">
          <div className="w-56 chat-bubble chat-bubble-secondary">
            <b className="text-xl">Strategy Board Games</b>
          </div>
        </div>
      </div>
    </div>
  );
}
