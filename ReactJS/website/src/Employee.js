import React, {Component} from 'react';

class Employee extends Component {
    render() {
        return(
            <div>
                <h1>Class Component Employee</h1>
                <div>
                    Hello : {this.props.fullname}
                    <br />
                    Salary : {this.props.salary}
                </div>
            </div>
        );
    }
}

export default Employee;