import { useState } from "react";
import "./App.css";
import Title from "./Component/Title";

export default function App() {
  const [section, setSection] = useState("");

  return (
    <div className="App">
      <div
        className={`absolute ${
          section.length
            ? "p-3 title-to-nav w-full"
            : "absolute-center nav-to-title"
        }`}
      >
        <Title setSection={setSection} section={section} />
      </div>
    </div>
  );
}
