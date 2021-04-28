import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        exact
        to={routes.home}
        className="NavLink"
        activeClassName="NavLink--active"
      >
        Home
      </NavLink>
      <NavLink
        to={routes.contacts}
        className="NavLink"
        activeClassName="NavLink--active"
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
