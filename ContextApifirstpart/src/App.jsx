import { useState } from 'react';
import UserContextProvider from './Context/UesContextProvuder'

import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  

  return (
    <>
    <UserContextProvider >
    <Login />
    <Profile />
    </UserContextProvider>

    </>
  )
}

export default App
