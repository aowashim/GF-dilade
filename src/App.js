import logo from "./logo.svg";
import "./App.css";
import Landing from "./pages/Landing";
import NavBar from "./components/NavBar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);

  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
    </>
    // <>
    //   <NavBar />
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={<Landing />} />
    //       <Route path="/home" element={<Home />} />
    //     </Routes>
    //   </Router>
    // </>
  );
}

export default App;
