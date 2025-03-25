import { Header } from "@/widgets/header";
import clsx from "clsx";
import { FC } from "react";
import { Outlet } from "react-router";
import style from "./BaseLayout.module.scss";

export const BaseLayout: FC = () => {
  return (
    <>
      <Header />
      <main className={clsx(style.main)}>
        <Outlet />
      </main>
    </>
  );
};
