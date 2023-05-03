import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Logement from "./pages/Logement";
import Layout from "./layouts/Layout";
import About from "./pages/About";
import PropertyError from "./pages/PropertyError"


export default  createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        
        children:[
            {
                path:"",
                element: <Homepage/>,
                loader: async ({ params }) => {
                    return fetch(`/logements.json`);
                  },
            },
            {
                path: "logement/:id",
                element: <Logement/>
            },
            {
                path: "a-propos",
                element: <About/>
            },
            {
                path: "*",
                element: <PropertyError/>, 
            },
           
        ]
    } 
]);
