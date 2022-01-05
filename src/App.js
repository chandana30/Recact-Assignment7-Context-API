import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ComponentA from './components/ComponentA';
import { UserProvider } from './context/Context';
import ComponentD from './components/ComponentD';
import { LoginProvider } from './context/loginContex';


function App() {
  const [uname, setuname] = useState('google')

  let getDataFromD=(data)=>{
    console.log(data);
  }

  const logoutUser = () => {
    setloginData({
      ...loginData,
      login: false
    })
  }

  const [loginData, setloginData] = useState({
    login: true,
    userName: "Ram",
    logoutUser: logoutUser,
    getDataFromD:getDataFromD

  });

  let updateUser = () => {
    setloginData({
      ...loginData,
      userName: 'Sham'
    })
  }
  return (
    <div className="App">
      <UserProvider value={uname}>
        <ComponentA uname={uname} />
        <button onClick={() => { setuname('facebook') }}>Update uname</button>
        <button onClick={updateUser}>Update User</button>
      </UserProvider>

      <LoginProvider value={loginData}>
        <ComponentD />
      </LoginProvider>

    </div>
  );
}

export default App;
