import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/index";

import "./index.css";
import FooterWebsite from "./components/skeleton/FooterWebsite";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <RouterProvider router={router} />
      </div>
      <FooterWebsite />
    </div>
  </React.StrictMode>
);
