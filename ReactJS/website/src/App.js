import React , {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {fullname : ''};
    this.fullnameChange = this.fullnameChange.bind(this);
  }

  fullnameChange(e) {
    this.setState({fullname: e.target.value});
  }

  render() {
    const {fullname} = this.state

    return (
      <div>
        <p>Name : {fullname}</p>
        <input type="text" value={fullname} onChange={this.fullnameChange}/>
      </div>
    );
  }
}

export default App;