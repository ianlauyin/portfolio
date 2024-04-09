import preview from "./img/preview.png";

export default function BulletSummary({ handleSelectProject }) {
  return (
    <div className="card w-80 bg-base-300 ring shadow-2xl">
      <figure className="px-10 pt-10">
        <img
          src={preview}
          alt="preview"
          className="rounded-xl  h-60 object-contain"
        />
      </figure>
      <div className="card-body items-center">
        <h1 className="card-title">Bullet</h1>
        <p className="py-5">
          This is an app and simplified version of the board game Bullet♥︎. In
          this game, your objective is to survive incoming bullets for as many
          rounds as possible.
        </p>
        <div className="card-actions flex justify-end">
          {/* <button
            className="btn btn-primary"
            onClick={() => handleSelectProject("bullet")}
          >
            Details
          </button> */}
          {/* <button
            className="btn btn-primary"
            onClick={() =>
              window.open("https://ianlauyin.github.io/project1-bootcamp/")
            }
          >
            Deployed Site
          </button> */}
        </div>
      </div>
    </div>
  );
}
