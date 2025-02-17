import { FC, JSX } from "react";
import { Seo } from "./Seo";
import { TSeo } from "@/entities/types";

const HelmetProviderFC: FC<{ children: JSX.Element }> = ({ children }) => {
  const seoProps: TSeo = {
    title: import.meta.env.VITE_APP_TITLE || "",
    description: import.meta.env.VITE_APP_DESCRIPTION || "",
    url: import.meta.env.VITE_APP_URL || "",
    image: import.meta.env.VITE_APP_IMAGE || "",
  };

  // if (import.meta.env.DEV) return children;

  return (
    <>
      <Seo {...seoProps} />
      {children}
    </>
  );
};
export default HelmetProviderFC;
