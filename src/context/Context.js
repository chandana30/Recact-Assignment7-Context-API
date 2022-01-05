import React from 'react'

const userContext=React.createContext()

let UserProvider=userContext.Provider
let UserConsumer=userContext.Consumer

export default userContext
export {UserProvider,UserConsumer}