import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import HeaderCmp from "./HeaderCmp";
import Login from "./Login";
import Browse from "./Browse";
import { useDispatch } from "react-redux";

const Body = () => {

    const dispatch = useDispatch()

  

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element:<Login/>
        },
        {
            path: '/browse',
            element: <Browse/>
        }
    ])
    return (
        <div>
        <RouterProvider router={appRouter}>
                <HeaderCmp/>
                <Login/>
        </RouterProvider>
        </div>
    )
}

export default Body;