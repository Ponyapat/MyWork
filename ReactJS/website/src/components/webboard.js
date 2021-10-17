import React from "react";

function webboard({match}) {
    return (
        <div>
            <h1>Webboard Page</h1>
            <p>
                Post : {match.params.kid}
            </p>
        </div>
    );
}

export default webboard;