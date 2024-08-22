import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./Main/Main";
import WebDesign from "./WebDesign/WebDesign";
import Branding from "./Branding/Branding";
import SchoolWorks from "./SchoolWorks/SchoolWorks";
import Resume from "./Resume/Resume";

import BrandingDetail from "./Branding/BrandingDetail";
import SchoolWorksDetail from "./SchoolWorks/SchoolWorksDetail";
import WebDesignDetail from "./WebDesign/WebDesignDetail";

import ScrollToTop from "./Assets/ScrollRestoration";

import RootLayout from "./Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: [<RootLayout />, <ScrollToTop />],
      children: [
        { index: true, element: <Main /> },
        {
          path: "web-design",
          children: [
            { index: true, element: <WebDesign /> },
            { path: ":webId", element: <WebDesignDetail /> },
          ],
        },
        {
          path: "branding",
          children: [
            { index: true, element: <Branding /> },
            { path: ":brId", element: <BrandingDetail /> },
          ],
        },
        {
          path: "school-works",
          children: [
            { index: true, element: <SchoolWorks /> },
            { path: ":schoolId", element: <SchoolWorksDetail /> },
          ],
        },
        { path: "resume", element: <Resume /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
