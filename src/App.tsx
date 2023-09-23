import "./App.css";

import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider} from "react-router-dom";

import HomePage from "./pages/homePage.tsx";


import Nav from "./navbar";
import Contact from "./contact.tsx";
import Services from "./service.tsx";
import FooterPage from "./pages/footer.tsx";

function App() {
 const router =  createBrowserRouter(
    createRoutesFromElements(
<Route path="/" element={<Root/>}>
<Route index element={<HomePage/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/service" element={<Services/>}/>
</Route>

    )
 )
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

const Root = () => {

  return <>
  <Nav/>
  <div>
    <Outlet/>
    <FooterPage /> 
  </div>
  </>
}

export default App;
