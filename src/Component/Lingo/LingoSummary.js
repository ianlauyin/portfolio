import preview from "./img/preview.png";

export default function LingoSummary() {
  return (
    <div className="card w-80 bg-base-300  ring shadow-2xl">
      <figure className="px-10 pt-10">
        <img
          src={preview}
          alt="preview"
          className="rounded-xl  h-60 object-contain"
        />
      </figure>
      <div className="card-body items-center">
        <h1 className="card-title">Lingo</h1>
        <p className="py-5">
          A web app for learning Spanish that offers various study tools,
          including flashcards, a translator, and game-based quizzes.
        </p>
        <div className="card-actions flex justify-end">
          <button className="btn btn-primary">Details</button>
          <button
            className="btn btn-primary"
            onClick={() => window.open("https://rocket-lingo.netlify.app/")}
          >
            Deployed Site
          </button>
        </div>
      </div>
    </div>
  );
}
