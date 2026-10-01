import { createBrowserRouter } from "react-router";
import Home from "../components/bytespaces/Home";
import CourseDetail from "../components/bytespaces/CourseDetails";
import Courses from "../components/bytespaces/Courses";
import CreatorProfile from "../components/bytespaces/CreatorProfile";
import HomeMain from "../components/bytespaces/HomeMain";
import SignIn from "../components/bytespaces/SignIn";
import SignUp from "../components/bytespaces/SignUp";
import NotFound from "../components/bytespaces/Error";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeMain,
    children: [
      { index: true, Component: Home },
      { path: "/courses", Component: Courses },
      { path: "/courses/:id", Component: CourseDetail },
      { path: "*", Component: NotFound },
      { path: "/creator-profile", Component: CreatorProfile },
    ],
  },
  { path: "/sign-in", Component: SignIn },
  { path: "/sign-up", Component: SignUp }
]);