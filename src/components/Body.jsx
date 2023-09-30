import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import HeaderCmp from "./HeaderCmp";
import Login from "./Login";

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element:<Login/>
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