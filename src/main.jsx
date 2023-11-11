import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/About.jsx'
import Github from './components/Github/Github.jsx'
import User from './components/User/User.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/Dynamic-app-sample/" element={<Layout/>}>
      <Route path="/Dynamic-app-sample/" element={<Home/>} />
      <Route path="/Dynamic-app-sample/contact" element={<Contact/>} />
      <Route path="/Dynamic-app-sample/about" element={<About/>} />
      <Route path="/Dynamic-app-sample/github" element={<Github/>} />
      <Route path="/Dynamic-app-sample/user/:userId" element={<User/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
