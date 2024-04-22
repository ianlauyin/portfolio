import GithubPhoto from "../img/github.png";
import GitPhoto from "./img/git.png";

export default function VersionControl() {
  return (
    <div className="card bg-base-300 shadow-xl" data-aos="zoom-in">
      <div className="card-body">
        <b className="card-title self-center mb-5">Version Control:</b>
        <ul className="skill-list space-y-2">
          <li>
            <img src={GitPhoto} alt="GitPhoto" />
            Git
          </li>
          <li>
            <img src={GithubPhoto} alt="GithubPhoto" />
            Github
          </li>
        </ul>
      </div>
    </div>
  );
}
