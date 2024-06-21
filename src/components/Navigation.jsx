import clsx from "clsx";
import {NavLink} from "react-router-dom";

const Navigation = () => {
  const buildLinkClass = ({isActive}) => {
    return clsx(isActive && "active");
  };
  return (
    <header className="shadow-sm shadow-gray-700 p-3">
      <nav className="flex gap-2">
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
