import { connect } from 'react-redux';
import Navigation from '../Navigation';
import AuthNavigation from '../AuthNavigation';
import UserMenu from '../UserMenu';
import { authSelectors } from '../../redux/auth';
import './AppBar.scss';

const AppBar = ({ isAuthenticated }) => {
  return (
    <header className="AppBar">
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNavigation />}
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
