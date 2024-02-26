import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

export default function ProjectMenu({ setProject }) {
  return (
    <div className="dropdown dropdown-top dropdown-hover dropdown-end fixed bottom-5 right-5">
      <div className="btn btn-circle btn-secondary ring ring-accent">
        <MenuRoundedIcon />
      </div>
      <ul className="dropdown-content z-50 bg-neutral menu rounded-lg space-y-2">
        <li>
          <button
            className="btn btn-info"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            Top
          </button>
        </li>
        <li>
          <button className="btn btn-success" onClick={() => setProject(null)}>
            Back
          </button>
        </li>
      </ul>
    </div>
  );
}
