import { useEffect, useState } from "react";
import AOS from "aos";
import "./App.css";
import Title from "./Component/Title";

export default function App() {
  const [section, setSection] = useState("");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <div
        className={`absolute ${
          section.length
            ? "title-to-nav w-full"
            : "absolute-center nav-to-title"
        }`}
      >
        <Title setSection={setSection} section={section} />
      </div>
    </div>
  );
}
