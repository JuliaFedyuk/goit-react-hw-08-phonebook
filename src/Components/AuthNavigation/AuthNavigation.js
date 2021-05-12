import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import './AuthNavigation.scss';

const AuthNavigation = () => (
  <div className="authNavigation">
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
  </div>
);

export default AuthNavigation;
