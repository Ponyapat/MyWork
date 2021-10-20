import React from 'react';
import { dbContext } from '../App';

function UserComponent() {
    return(
        <div>
            <h1>User Component</h1>
            <dbContext.Consumer>
                {
                    db => {
                        return <div>
                            {db}
                        </div>
                    }
                }
            </dbContext.Consumer>
        </div>
    );


}

export default UserComponent;