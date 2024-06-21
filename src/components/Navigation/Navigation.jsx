import {NavLink} from "react-router-dom";

const Navigation = () => {
  return (
    <header className="shadow-sm shadow-gray-700 p-3">
      <nav className="flex gap-2">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movie</NavLink>
      </nav>
    </header>
  );
};
export default Navigation;
