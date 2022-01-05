import React, { useContext } from 'react'
// import userContext from '../context/Context';
import loginContext from '../context/loginContex';

function ComponentD() {

    const context = useContext(loginContext)
     console.log('context', context);

    let logout = () => {
        context.logoutUser()
    }
    let sendData=()=>{
        context.getDataFromD(" sending data from componentD")
    }
    return (
        <div>
            {context.login ? <p>{context.userName}is logged in</p> : <p> Please login</p>}
            <button onClick={logout}>Logout</button>
            <button onClick={sendData}>send data to app component</button>
        </div>
    )
}

export default ComponentD
