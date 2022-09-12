import { Route, Routes } from "react-router-dom";
import MainContent from "./layout/MainContent";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="c/:id" element={<MainContent />} />
    </Routes>
  );
}

export default AppRouter;
