const { Component } = require('react');

const styles = {
  title: {
    textAlign: 'center',
    marginTop: '100px',
    fontSize: '50px',
  },
};

class HomePage extends Component {
  render() {
    return <h1 style={styles.title}>Welcome to your contacts app :)</h1>;
  }
}

export default HomePage;
