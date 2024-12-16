import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import { Root } from './routers/Root'
import { Dean } from './routers/Dean'
import { Good } from './routers/Good'
import { Bin } from './routers/Bin'
import { Evh } from './routers/Evh'
import { Kramerg } from './routers/Kramerg'



let qwert = createBrowserRouter([
  {
    path: '/',
    element: <Root />,

  },
  {
    path: '/Dean',
    element: <Dean />,

  },

  {
    path: '/Good',
    element: <Good />
  },

  {
    path: '/Bin',
    element: <Bin />
  },

  {
    path: '/Evh',
    element: <Evh />
  },

  {
    path: '/Kramerg',
    element: <Kramerg />
  }


])


export default function App() {


  return (

    <>
      <RouterProvider router={qwert} />
    </>
  )
}


