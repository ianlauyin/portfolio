import HTMLPhoto from "./img/html.png";
import CSSPhoto from "./img/CSS.png";
import ReactPhoto from "./img/React.png";
import TailwindPhoto from "./img/Tailwind.png";
import BootstrapPhoto from "./img/Bootstrap.png";
import MUIPhoto from "./img/MUI.png";

export default function Frontend() {
  return (
    <div className="card bg-base-300 shadow-xl" data-aos="zoom-in">
      <div className="card-body">
        <b className="card-title self-center mb-5">Front-end Development:</b>
        <ul className="skill-list space-y-2">
          <li>
            <img src={HTMLPhoto} alt="HTMLPhoto" />
            HTML5
          </li>
          <li>
            <img src={CSSPhoto} alt="CSSPhoto" />
            CSS3
          </li>
          <li>
            <img src={ReactPhoto} alt="ReactPhoto" />
            React
          </li>
          <li>
            <img src={TailwindPhoto} alt="TailwindPhoto" />
            Tailwind CSS
          </li>
          <li>
            <img src={MUIPhoto} alt="MUIPhoto" />
            Material UI
          </li>
          <li>
            <img src={BootstrapPhoto} alt="BootstrapPhoto" />
            Bootstrap
          </li>
        </ul>
      </div>
    </div>
  );
}
