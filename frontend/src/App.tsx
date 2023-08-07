import { AxiosInterceptor } from "./components/AxiosInterceptor";
import { AuthProvider } from "./providers/AuthProvider";
import { RoutesMain } from "./routes";
import GlobalStyles from "./styles/globalStyles";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <AxiosInterceptor>
        <AuthProvider>
          <RoutesMain />
        </AuthProvider>
      </AxiosInterceptor>
    </>
  );
};
