import expressJSPhoto from "../img/Expressjs.png";
import postgreSQLPhoto from "../img/PostgreSQL.png";
import sequelizePhoto from "../img/Sequelize.png";
import firebasePhoto from "../img/Firebase.png";
import structurePhoto from "./BackendImg/SQLStructure.png";

export default function Backend() {
  const tools = (
    <div className="flex flex-col w-full">
      <b className="self-start text-2xl p-5">Tools:</b>
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

  const structure = (
    <div className="flex flex-col w-full">
      <b className="self-start text-2xl p-5">DB Structure:</b>
      <div className="flex justify-around flex-wrap">
        <img
          alt="structurePhoto"
          src={structurePhoto}
          className="w-full sm:w-5/6 h-auto object-contain p-2 rounded-2xl"
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col w-full items-center">
      {tools}
      {structure}
    </div>
  );
}
