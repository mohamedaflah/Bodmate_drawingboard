import "./App.css";
import { motion } from "framer-motion";
import { Header } from "./components/common/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Footer } from "./components/common/Footer";
import { AppDispatch, RootState } from "./redux/root/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./redux/actions/user/getUser";
import { DrawArea } from "./pages/Drawarea";

function App() {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  const { user } = useSelector((state: RootState) => state.user);
  return (
    <>
      <motion.div className="bg-[url('./assets/images/bg-pattern-wave.png')] h-screen w-full bg-cover bg-center bg-fixed">
        <Header />
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to={"/draw"} /> : <Home />}
          />
          <Route
            path="/draw"
            element={user ? <DrawArea /> : <Navigate to={"/"} />}
          />
        </Routes>
        <Footer />
      </motion.div>
    </>
  );
}

export default App;
