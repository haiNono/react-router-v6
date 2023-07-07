import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { loader as rootLoader, action as rootAction } from "./routes/root";
import ErrorPage from "./errorpage";
import Contact,{loader as contactLoader} from "./routes/contact";
import "./index.css";

// 根路由
const router = createBrowserRouter([
  {
    path: "/",
    // 路径对应的组件
    element: <Root />,
    // 错误处理
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "/contacts/:contactId",
        loader: contactLoader,
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
