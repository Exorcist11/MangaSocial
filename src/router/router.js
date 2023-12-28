import Layout from "../pages/layout";
import Index from "../pages";

import Page_comic from "../pages/comic/comic";

import Page_Genres from "../pages/Genres/Genres";
import Page_chapper from "../pages/Chapper/chapper";
import { createBrowserRouter } from "react-router-dom";
import UserProfile from "../pages/UserProfile";
import ContactUs from "../pages/ContactUs";
import Login from "../pages/Login/Login.jsx";
import SignUp from "../pages/SignUp/SignUp.jsx";
import Page_NewRelease from "../pages/NewRelease/NewRelease";
import Page_Recent from "../pages/Recent/Recent";
import Page_Comming from "../pages/Comming/Comming";
import ChapterPage from "../pages/ChapterPage/ChapterPage";
import ReadChapter from "../pages/ReadChapter/ReadChapter";
import Test from "../pages/Test/Test.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/comic",
        element: <Page_comic />,
      },
      {
        path: "/genres",
        element: <Page_Genres />,
      },
      {
        path: "/chapper",
        element: <Page_chapper />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/user-profile",
        element: <UserProfile />,
      },
      {
        path: "newRelease",
        element: <Page_NewRelease />,
      },
      {
        path: "recent",
        element: <Page_Recent />,
      },
      {
        path: "commingsoon",
        element: <Page_Comming />,
      },
      {
        path: "chapter/:slug",
        element: <ChapterPage />,
      },
      {
        path: "chapter/:slug/:id",
        element: <ReadChapter />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: '/test/:slug',
    element: <Test />
  }
]);
export default router;
