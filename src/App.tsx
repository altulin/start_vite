import { FC } from "react";
import { HelmetProviderFC } from "./app/providers/helmet";
import { StoreProvider } from "./app/providers/store";
import { RoutesProviderFC } from "./app/providers/routes";
import "normalize.css";
import "@/app/styles/style.scss";

const App: FC = () => {
  return (
    <HelmetProviderFC>
      <StoreProvider>
        <RoutesProviderFC />
      </StoreProvider>
    </HelmetProviderFC>
  );
};

export default App;
