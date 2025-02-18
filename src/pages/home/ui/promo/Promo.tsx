import clsx from "clsx";
import { FC } from "react";
import style from "./Promo.module.scss";
import { Form } from "@/widgets/form";

const Promo: FC = () => {
  return (
    <section className={clsx(style.promo)}>
      <div className={clsx(style.promo__inner, "container")}>
        <Form />
      </div>
    </section>
  );
};
export default Promo;
