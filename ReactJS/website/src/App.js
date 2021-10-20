import React , {Component} from 'react';
import Employee from './Employee';
import { connect} from 'react-redux';

class App extends Component {
  render() {
    return(
      <div>
        <h1>Class Component APP</h1>
        <hr />
        <Employee fullname={this.props.salaryReducer.fullname} 
         salary={this.props.salaryReducer.salary} />
        <button onClick={() => this.props.setFullName("Poonyapat Anusonthi")}>Change Name</button>
        <button onClick={()=>this.props.editSalary(500)}>
          +
        </button>
        <button onClick={() => this.props.editSalary(-500)}>
          -
        </button>
        
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

const mapDispatchToProp = (dispatch) => {
  return {
    setFullName:(fullname) => {
      dispatch({
        type:"setFullName",
        payload:fullname
      })
    },

    editSalary: (salary) => {
      dispatch({
        type: "editsalary",
        payload: salary
      })
    }
   
}
}



export default connect(mapStateToProp,mapDispatchToProp)(App);