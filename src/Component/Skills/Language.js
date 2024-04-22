import JavascriptPhoto from "./img/JS.png";
import TypescriptPhoto from "./img/Typescript.png";
import PythonPhoto from "./img/Python.png";
import SQLPhoto from "./img/SQL.png";

export default function Language() {
  return (
    <div className="card bg-base-300 shadow-xl" data-aos="zoom-in">
      <div className="card-body">
        <b className="card-title self-center mb-5">Programming Language:</b>
        <ul className="skill-list space-y-2">
          <li>
            <img src={JavascriptPhoto} alt="JavascriptPhoto" />
            JavaScript
          </li>
          <li>
            <img src={TypescriptPhoto} alt="TypescriptPhoto" />
            Typescript
          </li>
          <li>
            <img src={PythonPhoto} alt="PythonPhoto" />
            Python
          </li>
          <li>
            <img src={SQLPhoto} alt="SQLPhoto" />
            SQL
          </li>
        </ul>
      </div>
    </div>
  );
}
