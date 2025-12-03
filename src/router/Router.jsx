import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import AuthLayouts from "../layouts/AuthLayouts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Services from "../pages/Services";
import ServicesDetailsCard from "../components/ServicesDetailsCard";
import ForgotPassword from "../pages/forgotPassword";
import MyProfile from "../pages/MyProfile";
import MeetExpertVets from "../pages/MeetExpertVets";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";
import BookingForm from "../pages/BookingForm";
import AboutUs from "../pages/about/AboutUs";
import Pricing from "../pages/pricing/Pricing";
import ContactUs from "../pages/contact/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,

    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("/servicesData.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/services/:id",
        element: 
          
            <ServicesDetailsCard></ServicesDetailsCard>,
          
        
        loader: () => fetch("/servicesData.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/book-service",
        element: (
          <PrivateRoute>
            <BookingForm />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: <MyProfile></MyProfile>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayouts></AuthLayouts>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },
    ],
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);
