import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./views/App";
import AdminView from "./views/AdminView";
import AppLayout from "./layouts/AppLayout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/admin" element={<AdminView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
