import React from 'react'
import { UserConsumer } from '../context/Context';

function ComponentC(props) {
    console.log('components-C',props);
    return (
        <div>

            <UserConsumer>
                {
                    (userData)=>{
                        return(
                            <h2>Data from Context:{userData}</h2>
                        )
                    }
                }
            </UserConsumer>
            <h2>Data from props drilling:{props.uname}</h2>
        </div>
    )
}

export default ComponentC
