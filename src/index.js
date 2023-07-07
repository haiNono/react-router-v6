import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import ErrorPage from "./errorpage";
import Contact, { loader as contactLoader } from "./routes/contact";
import EditContact from "./routes/edit";
import { action as editAction } from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
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
    action: rootAction, // 表单提交的action
    children: [
      {
        path: "/contacts/:contactId",
        loader: contactLoader,
        element: <Contact />,
      },
      {
        // 因为想要该页面出现在root中，所以作为root的子路由而不是上面一个路由的子路由
        path: "/contacts/:contactId/edit",
        element: <EditContact />,
        action: editAction,
        loader: contactLoader,
      },
      {
        path: "/contacts/:contactId/destroy",
        action: destroyAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
