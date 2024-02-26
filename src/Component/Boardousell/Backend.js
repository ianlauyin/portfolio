import ScrollSpy from "react-ui-scrollspy";
import expressJSPhoto from "../img/Expressjs.png";
import postgreSQLPhoto from "../img/PostgreSQL.png";
import sequelizePhoto from "../img/Sequelize.png";
import firebasePhoto from "../img/Firebase.png";

export default function Backend() {
  const tools = (
    <div id="tools" className="flex flex-col w-full">
      <b data-toscrollspy-id="tools" className="self-start text-2xl p-5">
        Tools:
      </b>
      <div className="flex justify-around flex-wrap">
        <div className="flex justify-center items-center border border-primary m-5 px-5">
          <img
            src={expressJSPhoto}
            alt="expressJSPhoto"
            className="object-contain mr-5 w-20"
          />
          Express.js
        </div>
        <div className="flex justify-center items-center border border-primary m-5 px-5">
          <img
            src={postgreSQLPhoto}
            alt="postgreSQLPhoto"
            className="object-contain mr-5 w-20"
          />
          PostgreSQL
        </div>
        <div className="flex justify-center items-center border border-primary m-5 px-5">
          <img
            src={sequelizePhoto}
            alt="sequelizePhoto"
            className="object-contain mr-5 w-20"
          />
          Sequelize
        </div>
        <div className="flex justify-center items-center border border-primary m-5 px-5">
          <img
            src={firebasePhoto}
            alt="firebasePhoto"
            className="object-contain mr-5 w-20"
          />
          Firebase
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col w-full items-center">
      <ScrollSpy>{tools}</ScrollSpy>
    </div>
  );
}
