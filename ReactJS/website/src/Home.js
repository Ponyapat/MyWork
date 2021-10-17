import React , {Component} from 'react';


class Home extends Component  {
    render(){
    return(
        <div>
            <h1>Home Detail</h1>
            <p>{this.props.name} </p>
            <p>{this.props.address} </p>
        </div>
    )
    }
}

export default Home