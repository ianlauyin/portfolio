import BoardousellPhoto from "./img/Boardousell.png";

export default function Boardousell() {
  return (
    <div className="hero">
      <div className="hero-content flex-col md:flex-row">
        <img
          className="rounded-lg w-full md:w-1/2 shadow-2xl"
          src={BoardousellPhoto}
          alt="boardousellPhoto"
          data-aos="zoom-out"
        />
        <div data-aos="fade-right" data-aos-delay="500">
          <h1 className="text-xl font-bold">Boardousell - E-commerce</h1>
          <p className="m-5">
            A e-commerce platform that allows users to purchase items from the
            shop, while also enabling shop owners to manage orders and projects
            on the same site.
          </p>
          <a
            className="btn btn-primary"
            href="https://boardousell.netlify.app/"
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
