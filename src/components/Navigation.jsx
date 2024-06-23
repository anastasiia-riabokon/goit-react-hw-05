import clsx from "clsx";
import {NavLink} from "react-router-dom";

const Navigation = () => {
  const buildLinkClass = ({isActive}) => {
    return clsx("transition-colors duration-300 hover:text-red-600", isActive && "active");
  };
  return (
    <header className="shadow-md shadow-slate-400 p-4 px-8">
      <nav className="flex gap-8">
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={buildLinkClass}>
          Movie
        </NavLink>
      </nav>
    </header>
  );
};
export default Navigation;
