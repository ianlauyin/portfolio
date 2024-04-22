import ExpressPhoto from "./img/Express.png";
import NodePhoto from "./img/Node.png";
import RESTAPIPhoto from "./img/REST.png";
import SOLIDPhoto from "./img/SOLID.png";

export default function Backend() {
  return (
    <div className="card bg-base-300 shadow-xl" data-aos="zoom-in">
      <div className="card-body">
        <b className="card-title self-center mb-5">Back-end Development:</b>
        <ul className="skill-list space-y-2">
          <li>
            <img src={ExpressPhoto} alt="ExpressPhoto" />
            Express.js
          </li>
          <li>
            <img src={NodePhoto} alt="NodePhoto" />
            Node.js
          </li>
          <li>
            <img src={RESTAPIPhoto} alt="RESTAPIPhoto" />
            REST API
          </li>
          <li>
            <img src={SOLIDPhoto} alt="SOLIDPhoto" />
            S.O.L.I.D.
          </li>
        </ul>
      </div>
    </div>
  );
}
