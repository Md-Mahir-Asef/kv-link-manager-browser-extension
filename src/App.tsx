import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Add from "./pages/Add";
import NavBar from "./components/NavBar";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Header />
      <Toaster />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </>
  );
}

export default App;
