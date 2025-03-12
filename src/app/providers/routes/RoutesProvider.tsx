import { PageHome } from "@/pages/home";
import { BaseLayout } from "@/widgets/layouts";

import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

const RoutesProviderFC: FC = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <BaseLayout />,
        children: [
          {
            path: "/",
            element: <PageHome />,
          },
        ],
      },

      {
        path: "*",
        element: <div>404</div>,
      },
    ],
    {
      basename: import.meta.env.BASE_URL,
    },
  );

  return <RouterProvider router={router} />;
};
export default RoutesProviderFC;
