import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import Details from "../../Pages/Details/Details";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Review from "../../Pages/Review/Review";
import Services from "../../Pages/Services/Services";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/services",
        element: <Services />,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/service/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
      },
      {
        path: "/addreview/:id",
        element: <Review />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);
