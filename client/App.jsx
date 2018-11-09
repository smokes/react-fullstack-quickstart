import React , { Component } from "react";
import axios from "axios";

class App extends Component {
    state = { username : undefined }

    componentDidMount() {
        axios({
            method:'get',
            url:'/api/username',
          })
          .then(({data}) => {
              this.setState({ username : data.username })
            })
          .catch(console.error)
    }

    render() {
        return(
            <div>
                <h1></h1>
            </div>
        )
    }
}
export default App;