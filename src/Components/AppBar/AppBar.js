import Navigation from '../Navigation';
import AuthNavigation from '../AuthNavigation';

const AppBar = () => {
  return (
    <header className="AppBar">
      <Navigation />
      <AuthNavigation />
    </header>
  );
};
export default AppBar;
