import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layer from './Layer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contract/Contract'
import User from './components/User/User'
import GitHub, { Gitinfo } from './components/Github/Github'
// const router = createBrowserRouter([
//   {
//     path:"/",
//     element : <Layer />,
//     children:[
//       {
//         path:"",
//         element: <Home />
//       },
//       {
//         path:"about",
//         element: <About />
//       },
//       {
//         path:"contract",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

// another method to craete router 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layer />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contract' element={<Contact />} />
      <Route path='github' 
      element={<GitHub />} 
      loader = {Gitinfo}
      />
      <Route path='user/:userid' element={<User />}  />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider  router={router}  />
  </React.StrictMode>,
)
