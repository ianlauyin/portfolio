import ScrollSpy from "react-ui-scrollspy";
import reactPhoto from "../img/React.svg";
import typescriptPhoto from "../img/Typescript.png";
import reactRouterPhoto from "../img/ReactRouter.png";
import MUIPhoto from "../img/MUI.png";
import googleMapPhoto from "../img/googleMap.png";
import tailwindPhoto from "../img/TailwindCSS.png";

export default function Frontend() {
  const tools = (
    <div id="tools" className="flex flex-col w-full">
      <b data-toscrollspy-id="tools" className="self-start text-2xl p-5">
        Tools:
      </b>
      <div className="flex justify-around flex-wrap">
        <div className="flex justify-center items-center border border-primary m-5 px-5">
          <img
            src={reactPhoto}
            alt="reactPhoto"
            className="object-contain mr-5 w-20"
          />
          React.js
        </div>
        <div className="flex justify-center items-center border border-primary m-5 px-5">
          <img
            src={typescriptPhoto}
            alt="typescriptPhoto"
            className="object-contain mr-5 w-20"
          />
          Typescript
        </div>
        <div className="flex justify-center items-center border border-primary m-5 px-5">
          <img
            src={reactRouterPhoto}
            alt="reactRouterPhoto"
            className="object-contain mr-5 w-20"
          />
          React Router
        </div>
        <div className="flex justify-center items-center border border-primary m-5 px-5">
          <img
            src={MUIPhoto}
            alt="MUIPhoto"
            className="object-contain mr-5 w-20"
          />
          Material UI
        </div>
        <div className="flex justify-center items-center border border-primary m-5 px-5">
          <img
            src={googleMapPhoto}
            alt="googleMapPhoto"
            className="object-contain mr-5 w-20"
          />
          Google Map API
        </div>
        <div className="flex justify-center items-center border border-primary m-5 px-5">
          <img
            src={tailwindPhoto}
            alt="tailwindPhoto"
            className="object-contain mr-5 w-20"
          />
          Tailwind CSS
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
