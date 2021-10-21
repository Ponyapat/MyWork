import React, { useContext } from 'react';
import { dbContext, userContext } from '../App';

function UserComponent() {
    return (
        <div>
            <h1>User Component</h1>
            <dbContext.Consumer>
                {
                    db => {
                        return (
                            <userContext.Consumer>
                                {
                                    user => {
                                        return (
                                            <div>
                                                name : {db}
                                                <br />
                                                E-mail : {user}
                                            </div>
                                        )
                                    }
                                }
                            </userContext.Consumer>
                        )
                    }

                }
            </dbContext.Consumer>
        </div>
    )


}

export default UserComponent;