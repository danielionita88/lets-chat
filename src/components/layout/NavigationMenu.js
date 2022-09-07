import { NavLink } from "react-router-dom";

const NavigationMenu = () => {
  return (
    <header>
      <nav>
        <div>Let's Chat!</div>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/friends">Friends</NavLink>
          </li>
        </ul>
            <button>Logout</button>
      </nav>
    </header>
  );
};

export default NavigationMenu;
