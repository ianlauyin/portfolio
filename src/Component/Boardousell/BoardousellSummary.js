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
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-info m-1">
            You can try out the function in the apps using account:
          </div>
          <div className="dropdown-content z-50 p-2 shadow bg-neutral rounded-box w-max flex flex-col items-start">
            <div className="flex flex-col items-start m-1 p-1 border border-primary">
              <b>Admin:</b>
              <p>Acc: adminIanLau@admin.com</p>
              <p>PW: IanLauAdmin9</p>
            </div>
            <div className="flex flex-col items-start m-1 p-1 border border-secondary">
              <b>Customer:</b>
              <p>Acc: customer@customer.com</p>
              <p>PW: Customer1</p>
            </div>
            <div className="flex flex-col items-start m-1 p-1 border border-accent">
              <b>Card Payment {"(Testing)"}:</b>
              <p>Card Number: 4242 4242 4242 4242</p>
              <p>Expire Date: Any Date</p>
              <p>CVC: Any 3-digit number</p>
            </div>
          </div>
        </div>

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
