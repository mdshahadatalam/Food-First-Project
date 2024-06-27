import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Box } from './components/Box';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Programs } from './Pages/Programs';
import { Contact } from './Pages/Contact';
import { RootLayouts } from './RootLayouts';
import { Publications } from './Pages/Publications';
import { SingleProduct } from './Pages/SingleProduct';




function App() {
   const router = createBrowserRouter(
      createRoutesFromElements(
         <Route>
            <Route element ={<RootLayouts/>}>
            <Route path='/' element={<Home/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Programs' element={<Programs/>} />
            <Route path='/Publications' element={< Publications />} />
            <Route path='/Product/:id' element={< SingleProduct />} />
            <Route path='/Contact' element={<Contact/>} />
            </Route>
        </Route>

      )
   )
   return (
      <>
    <RouterProvider router={router}/>
     </>
    )
}

export default App
