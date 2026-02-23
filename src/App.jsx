import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Update from "./views/Update";
import Create from "./views/Create";
import DefaultPage from "./views/DefaultPage";


const router = createBrowserRouter([
  {
   path: "/",
   element: <Layout/>,
    children: [
      {
        index: true,
        element: <DefaultPage/>
      },

      {
        path: "/create",
        element: <Create/>
      },
      {
        path: "/update",
        element: <Update/>
      },
     ]
  }
],
{ 
  basename: "/calendar"
}
)

export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}

