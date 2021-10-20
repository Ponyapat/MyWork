import React , {Component} from 'react';
import Employee from './Employee';
import { connect} from 'react-redux';

class App extends Component {
  render() {
    return(
      <div>
        <h1>Class Component</h1>
        <hr />
        <Employee fullname={this.props.salaryReducer.fullname}
        salary={this.props.salaryReducer.salary} />
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    reducer:state.reducer,
    salaryReducer:state.salaryReducer
  }
}

export default connect(mapStateToProp)(App);