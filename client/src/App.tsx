import "./App.css";
import { motion } from "framer-motion";
import { Header } from "./components/common/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Footer } from "./components/common/Footer";

function App() {
  return (
    <>
      <motion.div className="bg-[url('./assets/images/bg-pattern-wave.png')] h-screen w-full bg-cover bg-center bg-fixed">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </motion.div>
    </>
  );
}

export default App;
