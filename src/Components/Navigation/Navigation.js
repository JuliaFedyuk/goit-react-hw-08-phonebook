import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import './Navigation.scss';

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav className="navigation">
      <NavLink
        exact
        to={routes.home}
        className="NavLink"
        activeClassName="NavLink--active"
      >
        Home
      </NavLink>

      {isAuthenticated && (
        <NavLink
          to={routes.contacts}
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
