import { Switch, Route } from 'react-router-dom';
import Container from './Components/Container/Container';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';
import AppBar from './Components/AppBar';

import './App.scss';

const App = () => (
  <Container>
    <AppBar />

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/contacts" component={ContactsPage} />
      <Route path="/register" component={RegisterPage} />
      <Route exact path="/login" component={LoginPage} />
    </Switch>
  </Container>
);

export default App;
