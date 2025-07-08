import Header from "./components/Header";
import Home from "./pages/Home";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Header />
      <Toaster />
      <Home />
    </>
  );
}

export default App;
