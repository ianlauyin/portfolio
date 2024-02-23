import preview from "./img/preview.png";

export default function BoardousellSummary({ handleSelectProject }) {
  return (
    <div className="card w-80 bg-base-300 ring shadow-2xl">
      <figure className="px-10 pt-10">
        <img
          src={preview}
          alt="preview"
          className="rounded-xl h-60 object-contain"
        />
      </figure>
      <div className="card-body items-center">
        <h1 className="card-title">Boardousell</h1>
        <p className="py-5">
          A e-commerce platform that allows users to purchase items from the
          shop, while also enabling shop owners to manage orders and projects on
          the same site.
        </p>
        <div className="card-actions flex justify-end">
          <button
            className="btn btn-primary"
            onClick={() => handleSelectProject("boardousell")}
          >
            Details
          </button>
          <button
            className="btn btn-primary"
            onClick={() => window.open("https://boardousell.netlify.app")}
          >
            Deployed Site
          </button>
        </div>
      </div>
    </div>
  );
}
