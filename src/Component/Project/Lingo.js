import LingoPhoto from "./img/Lingo.png";

export default function Lingo() {
  return (
    <div className="hero">
      <div className="hero-content flex-col md:flex-row-reverse">
        <img
          className="rounded-lg w-full md:w-1/2 shadow-2xl"
          src={LingoPhoto}
          alt="LingoPhoto"
          data-aos="zoom-out"
        />
        <div data-aos="fade-left" data-aos-delay="500">
          <h1 className="text-xl font-bold">Lingo - Spanish Learning Site</h1>
          <p className="m-5">
            A web app for learning Spanish that offers various study tools,
            including flashcards, a translator, and game-based quizzes.
          </p>
          <div
            className="tooltip tooltip-error"
            data-tip="Currently not available"
          >
            <div className="btn btn-primary btn-disabled">Deployed Site</div>
          </div>
        </div>
      </div>
    </div>
  );
}
