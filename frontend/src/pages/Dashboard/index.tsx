import { CardContato } from "../../components/CardContato";
import { Header } from "../../components/Header";
import { AuthProvider } from "../../providers/AuthProvider";

export const Dashboard = () => {
  return (
    <>
      <AuthProvider>
        <Header />
        <CardContato />
      </AuthProvider>
    </>
  );
};
