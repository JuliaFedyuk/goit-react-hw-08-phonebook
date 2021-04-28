import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const AuthNavigation = () => (
  <>
    <NavLink
      to={routes.register}
      className="NavLink"
      activeClassName="NavLink--active"
    >
      Register
    </NavLink>
    <NavLink
      to={routes.login}
      className="NavLink"
      activeClassName="NavLink--active"
    >
      Login
    </NavLink>
  </>
);

export default AuthNavigation;
