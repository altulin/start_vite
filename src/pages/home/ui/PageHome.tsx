import { FC } from "react";
import Promo from "./promo/Promo";
import Slider from "./slider/Slider";

const PageHome: FC = () => {
  return (
    <>
      <Promo />;
      <Slider />
    </>
  );
};
export default PageHome;
