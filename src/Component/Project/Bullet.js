import BulletPhoto from "./img/Bullet.png";

export default function Bullet() {
  return (
    <div className="hero">
      <div className="hero-content flex-col md:flex-row-reverse">
        <img
          className="rounded-lg w-full md:w-1/2 shadow-2xl"
          src={BulletPhoto}
          alt="BulletPhoto"
          data-aos="zoom-out"
        />
        <div data-aos="fade-left" data-aos-delay="500">
          <h1 className="text-xl font-bold">Bullet - Boardgame Trial</h1>
          <p className="m-5">
            This is an app and simplified version of the board game Bullet♥︎. In
            this game, your objective is to survive incoming bullets for as many
            rounds as possible.
          </p>
          <a
            className="btn btn-primary"
            href="https://ianlauyin.github.io/project1-bootcamp/"
            target="_blank"
            rel="noreferrer"
          >
            Deployed Site
          </a>
        </div>
      </div>
    </div>
  );
}
