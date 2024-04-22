import noSQLPhoto from "./img/noSQL.png";
import SQLPhoto from "./img/SQL.png";
import SequelizePhoto from "./img/sequelize.svg";

export default function Database() {
  return (
    <div className="card bg-base-300 shadow-xl" data-aos="zoom-in">
      <div className="card-body">
        <b className="card-title self-center mb-5">Database Technologies:</b>
        <ul className="skill-list space-y-2">
          <li>
            <img src={SQLPhoto} alt="SQLPhoto" />
            SQL
          </li>
          <li>
            <img src={noSQLPhoto} alt="noSQLPhoto" />
            noSQL
          </li>
          <li>
            <img src={SequelizePhoto} alt="SequelizePhoto" />
            Sequelize
          </li>
        </ul>
      </div>
    </div>
  );
}
