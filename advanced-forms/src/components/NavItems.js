import { NavLink } from "react-router-dom";

const NavItems = () => {
  return (
    <div className="navBtns">
      <NavLink to='/sample-survey'>
        <button>Sample Survey</button>
      </NavLink>
      <NavLink to='/sensory-preferences'>
        <button>Sensory Preferences</button>
      </NavLink>
      <NavLink to='/report'>
        <button>Report</button>
      </NavLink>
      <NavLink to='/'>
        <button>Home</button>
      </NavLink>
    </div>
  );
};

export default NavItems;
