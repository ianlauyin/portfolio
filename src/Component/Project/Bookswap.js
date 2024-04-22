import BookswapPhoto from "./img/Bookswap.png";

export default function Bookswap() {
  return (
    <div className="hero">
      <div className="hero-content flex-col md:flex-row">
        <img
          className="rounded-lg w-full md:w-1/2 shadow-2xl"
          src={BookswapPhoto}
          alt="BookswapPhoto"
          data-aos="zoom-out"
        />
        <div data-aos="fade-right" data-aos-delay="500">
          <h1 className="text-xl font-bold">Bookswap - Book Donation App</h1>
          <p className="m-5">
            A Digital platform that facilitates the process of donating and
            receiving books, connecting book donors with individuals in need of
            books.
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
