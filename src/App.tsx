import { FC } from "react";
import { Footer } from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import TariffsPage from "./TariffsPage/tariffsPage";

const App: FC = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <TariffsPage />
      <Footer />
    </>
  );
};

export default App;
