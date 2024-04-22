import FirebasePhoto from "./img/Firebase.png";
import Auth0Photo from "./img/auth0.svg";

export default function Others() {
  return (
    <div className="card bg-base-300 shadow-xl" data-aos="zoom-in">
      <div className="card-body">
        <b className="card-title self-center mb-5">Other tools:</b>
        <ul className="skill-list space-y-2">
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
  );
}
