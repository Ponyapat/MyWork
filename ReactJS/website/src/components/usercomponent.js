import React, { useContext } from 'react';
import { dbContext } from '../App';

function UserComponent() {
   const db = useContext(dbContext);
   
    return (
        <div>
            <h1>User Componenet</h1>
            <button onClick={()=>db.dataDispatch('ADD')}>+</button>
            <button onClick={() =>db.dataDispatch('SUB')}>-</button>
            <button onClick={() =>db.dataDispatch('CLEAR')}>Clear</button>
        </div>
    )


}

export default UserComponent;