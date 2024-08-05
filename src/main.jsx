import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Contact from './components/Contact/contact'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'


//Two ways to create router: 

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout/>}>
      <Route path='' element= {<Home/>}> </Route>
      <Route path='about' element= {<About/>}> </Route>
      <Route path='contact' element= {<Contact/>}> </Route>
      <Route path='user/:userid' element= {<User/>}> </Route>
      <Route 
        loader={githubInfoLoader}
        path='github' element= {<Github/>}
      > 
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
