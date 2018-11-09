import React, { Component } from 'react';
import axios from 'axios';
import reactsvg from './public/react.svg';

class App extends Component {
  state = { username: undefined };

  componentDidMount() {
    axios({
      method: 'get',
      url: '/api/username',
    })
      .then(({ data }) => {
        this.setState({ username: data.username });
      })
      .catch(console.error);
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        <img src={reactsvg} alt="React Logo" className="react-logo" />
        <h1>{`${username} welcome to your React application.`}</h1>
      </div>
    );
  }
}
export default App;
