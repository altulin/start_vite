import { Header } from "@/widgets/header";
import { FC } from "react";
import { Outlet } from "react-router";

export const BaseLayout: FC = () => {
  return (
    <>
      <Header />
      <main className="grow">
        <Outlet />
      </main>
    </>
  );
};
