import ScrollSpy from "react-ui-scrollspy";
import preview from "./img/preview.png";

export default function Features() {
  const introduction = (
    <div id="introduction" className="flex flex-col w-full">
      <b data-toscrollspy-id="introduction" className="self-start text-2xl p-5">
        Introduction
      </b>
      <div className="flex flex-col sm:flex-row justify-around items-center">
        <img
          src={preview}
          alt="preview"
          className="w-5/6 sm:w-1/3 mb-5 rounded"
        />

        <p className="w-5/6 sm:w-1/2 ">
          Boardousell is a e-commerce platform that allows users to purchase
          items from the shop, while also enabling shop owners to manage orders
          and projects on the same site.
        </p>
      </div>
    </div>
  );

  const nonMember = (
    <div id="nonMember" className="flex flex-col w-full">
      <b data-toscrollspy-id="nonMember" className="self-start text-2xl p-5">
        Non-Member User Interface
      </b>
      <div className="flex flex-col justify-around items-center">
        <img src={preview} alt="preview" className="w-5/6 mb-5 rounded" />
        <p className="w-5/6 sm:w-1/2"></p>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col w-full items-center">
      <ScrollSpy>
        {introduction}
        {nonMember}
      </ScrollSpy>
    </div>
  );
}
